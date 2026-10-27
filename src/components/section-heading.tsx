export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
}
