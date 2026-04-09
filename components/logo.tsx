export function Logo({ className = "", iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  if (iconOnly) {
    return (
      <img
        src="/images/ciss-logo-new.png"
        alt="CISS Logo"
        className={`h-12 w-12 ${className}`}
      />
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/images/ciss-logo-new.png" alt="CISS Logo" className="h-12 w-12" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold leading-none tracking-tight">CISS</span>
        <span className="text-[10px] leading-tight text-muted-foreground">Calgary Islamic School Society</span>
      </div>
    </div>
  )
}
