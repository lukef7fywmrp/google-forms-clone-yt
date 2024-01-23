function FormIdLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return <div className="bg-violet-100 min-h-screen px-6">{children}</div>;
}

export default FormIdLayout;
