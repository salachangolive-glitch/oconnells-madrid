import { LangAttr } from "@/components/LangAttr";

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LangAttr lang="de" />
      {children}
    </>
  );
}
