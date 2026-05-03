// Reusable component for displaying code examples
// TypeScript inline type annotation defines props with optional description
export function CodeExample({ title, code, description }: {
  title: string;
  code: string;
  description?: string; // ? makes this prop optional
}) {
  return (
    // overflow-hidden prevents rounded corners from being cut off
    <div className="border border-border rounded-lg overflow-hidden">
      {/* Header section with title and optional description */}
      <div className="bg-muted px-4 py-2 border-b border-border">
        <h4>{title}</h4>
        {/* Conditional rendering: only show description if it exists */}
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {/* Code display section */}
      <div className="p-4 bg-background">
        {/* pre preserves whitespace and formatting */}
        {/* overflow-x-auto adds horizontal scroll if code is too wide */}
        <pre className="text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
