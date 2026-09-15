import { LangAttr } from "@/components/LangAttr";

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LangAttr lang="es" />
      {children}
    </>
  );
}
