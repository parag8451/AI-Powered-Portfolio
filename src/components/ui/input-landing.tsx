import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-full border backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 px-4 py-2 text-base shadow-lg transition-all duration-300 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-purple-400/50 dark:focus-visible:border-purple-500/50 dark:border-purple-500/30",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:shadow-lg focus-visible:shadow-purple-500/20",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:shadow-purple-500/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
