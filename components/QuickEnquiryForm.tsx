import EnquiryForm from "@/components/EnquiryForm";

export default function QuickEnquiryForm({ idPrefix = "quick", dark }: { idPrefix?: string; dark?: boolean }) {
  return <EnquiryForm kind="quick" idPrefix={idPrefix} dark={dark} />;
}
