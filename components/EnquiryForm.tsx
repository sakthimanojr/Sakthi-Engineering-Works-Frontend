"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useI18n } from "@/components/I18nProvider";
import ButtonLink from "@/components/ButtonLink";
import { services } from "@/data/services";
import { ALLOWED_EXTENSIONS, MAX_FILE_BYTES, schemas, type EnquiryKind } from "@/lib/validation";
import { whatsAppUrl } from "@/lib/whatsapp";

type Field = { name: string; type: "text" | "tel" | "email" | "select" | "textarea"; required?: boolean; wide?: boolean; rows?: number };

const FIELDS: Record<EnquiryKind, Field[]> = {
  quick: [
    { name: "name", type: "text", required: true }, { name: "mobile", type: "tel", required: true }, { name: "email", type: "email" },
    { name: "service", type: "select" }, { name: "message", type: "textarea", required: true, wide: true, rows: 4 },
  ],
  contact: [
    { name: "name", type: "text", required: true }, { name: "mobile", type: "tel", required: true }, { name: "email", type: "email", wide: true },
    { name: "message", type: "textarea", required: true, wide: true, rows: 5 },
  ],
  project: [
    { name: "name", type: "text", required: true }, { name: "company", type: "text" }, { name: "mobile", type: "tel", required: true }, { name: "whatsapp", type: "tel" },
    { name: "email", type: "email" }, { name: "location", type: "text", required: true }, { name: "service", type: "select", wide: true },
    { name: "description", type: "textarea", required: true, wide: true, rows: 5 }, { name: "dimensions", type: "text" }, { name: "material", type: "text" },
    { name: "quantity", type: "text" }, { name: "additional", type: "textarea", wide: true, rows: 3 },
  ],
};

type Status = "idle" | "submitting" | "success" | "demo" | "error" | "network" | "limited";
type Values = Record<string, string>;

export default function EnquiryForm({ kind, idPrefix, dark = false }: { kind: EnquiryKind; idPrefix: string; dark?: boolean }) {
  const { t, lang } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [fileError, setFileError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<Values>({});
  const fields = FIELDS[kind];
  const labels = t.forms.labels as Record<string, string>;
  const errors = t.forms.errors as Record<string, string>;

  const defaults: Values = { website: "" };
  fields.forEach((f) => (defaults[f.name] = ""));
  const { register, handleSubmit, setError, reset, formState } = useForm<Values>({
    resolver: zodResolver(schemas[kind]) as unknown as Resolver<Values>,
    defaultValues: defaults,
  });

  const msg = (key?: string) => (key ? errors[key] ?? errors.required : undefined);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFileError(null);
    if (f) {
      const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) { setFileError("file_type"); e.target.value = ""; setFile(null); return; }
      if (f.size > MAX_FILE_BYTES) { setFileError("file_size"); e.target.value = ""; setFile(null); return; }
    }
    setFile(f);
  };

  const onSubmit = async (values: Values) => {
    setStatus("submitting");
    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => fd.append(k, v ?? ""));
    fd.append("kind", kind);
    fd.append("language", lang);
    if (kind === "project" && file) fd.append("file", file);
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: fd });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; demo?: boolean; error?: string; fields?: Record<string, string> };
      if (res.ok && body.ok) {
        setSummary(values);
        setStatus(body.demo ? "demo" : "success");
        reset(defaults);
        setFile(null);
        return;
      }
      if (res.status === 422 && body.fields) {
        Object.entries(body.fields).forEach(([name, key]) => (name === "file" ? setFileError(key) : setError(name, { message: key })));
        setStatus("idle");
        return;
      }
      setStatus(res.status === 429 ? "limited" : "error");
    } catch {
      setStatus("network");
    }
  };

  if (status === "success" || status === "demo") {
    const service = services.find((s) => s.slug === summary.service)?.title.en ?? "";
    return (
      <div role="status" className={`bracket border p-6 sm:p-8 ${dark ? "border-white/20 bg-coal text-white" : "border-steel/20 bg-white text-ink"}`}>
        <h3 className="font-display text-2xl font-bold">{t.forms.successTitle}</h3>
        <p className="mt-3">{t.forms.successText}</p>
        {status === "demo" && <p className="mt-3 text-sm opacity-80">{t.forms.demoText}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={whatsAppUrl({ name: summary.name, service, location: summary.location, details: summary.description ?? summary.message })}>{t.forms.successWhatsapp}</ButtonLink>
          <button type="button" onClick={() => setStatus("idle")} className={`min-h-12 border px-6 text-sm font-bold uppercase tracking-wider ${dark ? "border-white/60 hover:bg-white hover:text-ink" : "border-ink hover:bg-ink hover:text-white"}`}>{t.forms.another}</button>
        </div>
      </div>
    );
  }

  const busy = status === "submitting";
  const errorText = status === "error" ? t.forms.serverError : status === "network" ? t.forms.networkError : status === "limited" ? t.forms.tooMany : null;
  const labelCls = dark ? "text-mist" : "text-ink";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={busy} className={`grid gap-5 sm:grid-cols-2 ${dark ? "text-white" : ""}`}>
      {/* honeypot – hidden from people and screen readers */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input type="text" tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>
      {fields.map((f) => {
        const id = `${idPrefix}-${f.name}`;
        const err = msg(formState.errors[f.name]?.message as string | undefined);
        const label = labels[f.name];
        return (
          <div key={f.name} className={f.wide ? "sm:col-span-2" : undefined}>
            <label htmlFor={id} className={`mb-1.5 block text-sm font-semibold ${labelCls}`}>
              {label}{!f.required && <span className="ml-1 font-normal opacity-70">({t.forms.optional})</span>}
              {f.required && <span aria-hidden className="ml-0.5 text-accent">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea id={id} rows={f.rows} className="field" aria-invalid={Boolean(err)} aria-describedby={err ? `${id}-err` : undefined} {...register(f.name)} />
            ) : f.type === "select" ? (
              <select id={id} className="field" {...register(f.name)}>
                <option value="">{t.forms.selectService}</option>
                {services.map((s) => (<option key={s.slug} value={s.slug}>{s.title[lang]}</option>))}
                <option value="other">{t.forms.otherService}</option>
              </select>
            ) : (
              <input id={id} type={f.type} inputMode={f.type === "tel" ? "tel" : undefined} autoComplete={f.name === "name" ? "name" : f.type === "tel" && f.name === "mobile" ? "tel" : f.type === "email" ? "email" : "off"} className="field" aria-invalid={Boolean(err)} aria-required={f.required} aria-describedby={err ? `${id}-err` : undefined} {...register(f.name)} />
            )}
            {err && <p id={`${id}-err`} role="alert" className={`mt-1.5 text-sm font-medium ${dark ? "text-red-300" : "text-red-700"}`}>{err}</p>}
          </div>
        );
      })}

      {kind === "project" && (
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-file`} className={`mb-1.5 block text-sm font-semibold ${labelCls}`}>{labels.file} <span className="font-normal opacity-70">({t.forms.optional})</span></label>
          <input id={`${idPrefix}-file`} type="file" accept={ALLOWED_EXTENSIONS.join(",")} onChange={onFile} className={`field file:mr-4 file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-bold file:text-white`} aria-describedby={`${idPrefix}-file-help`} />
          <p id={`${idPrefix}-file-help`} className="mt-1.5 text-sm opacity-80">{t.forms.fileHelp}</p>
          {fileError && <p role="alert" className={`mt-1.5 text-sm font-medium ${dark ? "text-red-300" : "text-red-700"}`}>{msg(fileError)}</p>}
        </div>
      )}

      {errorText && <p role="alert" className={`sm:col-span-2 border-l-4 border-red-600 p-3 text-sm font-medium ${dark ? "bg-red-950/50 text-red-200" : "bg-red-50 text-red-800"}`}>{errorText}</p>}

      <div className="sm:col-span-2">
        <button type="submit" disabled={busy} className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {busy && <span className="spinner" aria-hidden />}
          {busy ? t.forms.submitting : kind === "project" ? t.forms.sendProject : t.forms.submit}
        </button>
      </div>
    </form>
  );
}
