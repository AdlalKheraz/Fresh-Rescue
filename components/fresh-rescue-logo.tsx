export function FreshRescueLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" className="fill-primary" />

      {/* Leaf shape */}
      <path
        d="M14 32C14 32 16 18 28 12C28 12 32 24 28 32C24 40 14 32 14 32Z"
        className="fill-primary-foreground"
        strokeWidth="2"
      />

      {/* Leaf vein */}
      <path d="M21 28C21 28 22 22 26 18" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />

      {/* Rescue heart */}
      <path d="M32 20C32 17 35 15 37 17C39 19 37 22 35 24C33 22 31 19 32 20Z" className="fill-secondary" />
    </svg>
  )
}
