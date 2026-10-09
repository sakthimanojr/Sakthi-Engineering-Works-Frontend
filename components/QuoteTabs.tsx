"use client";

import { useState } from "react";
import clsx from "clsx";
import { useI18n } from "@/components/I18nProvider";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import ProjectEnquiryForm from "@/components/ProjectEnquiryForm";

export default function QuoteTabs() {
  const { t } = useI18n();
  const [tab, setTab] = useState<"quick" | "project">("project");
  const tabCls = (active: boolean) => clsx("min-h-12 flex-1 border-b-4 px-4 py-3 font-display text-xl font-bold uppercase", active ? "border-accent text-ink" : "border-transparent text-steel hover:text-ink");
  return (
    <div className="border border-steel/20 bg-white">
      <div role="tablist" aria-label={t.quote.title} className="flex border-b border-steel/20">
        <button role="tab" id="tab-project" aria-selected={tab === "project"} aria-controls="panel-project" type="button" className={tabCls(tab === "project")} onClick={() => setTab("project")}>{t.quote.project}</button>
        <button role="tab" id="tab-quick" aria-selected={tab === "quick"} aria-controls="panel-quick" type="button" className={tabCls(tab === "quick")} onClick={() => setTab("quick")}>{t.quote.quick}</button>
      </div>
      <div className="p-6 sm:p-8">
        <div role="tabpanel" id="panel-project" aria-labelledby="tab-project" hidden={tab !== "project"}><ProjectEnquiryForm idPrefix="q-project" /></div>
        <div role="tabpanel" id="panel-quick" aria-labelledby="tab-quick" hidden={tab !== "quick"}><QuickEnquiryForm idPrefix="q-quick" /></div>
      </div>
    </div>
  );
}
