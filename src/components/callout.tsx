interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

/** A highlighted note for use inside MDX posts: `<Callout title="Heads up">...</Callout>`. */
export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="not-prose my-6 rounded-lg border bg-muted/50 p-4 text-sm leading-relaxed">
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div className="text-muted-foreground">{children}</div>
    </aside>
  );
}
