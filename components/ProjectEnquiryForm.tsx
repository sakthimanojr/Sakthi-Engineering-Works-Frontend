import EnquiryForm from "@/components/EnquiryForm";

export default function ProjectEnquiryForm({ idPrefix = "project", dark }: { idPrefix?: string; dark?: boolean }) {
  return <EnquiryForm kind="project" idPrefix={idPrefix} dark={dark} />;
}
