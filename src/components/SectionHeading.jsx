export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-sea-deep dark:text-sand font-medium mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-themed-primary leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-themed-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
