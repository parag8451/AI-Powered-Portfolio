import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 dark:border-purple-500/30 flex field-sizing-content min-h-16 w-full rounded-xl border bg-white/50 dark:bg-neutral-900/50 px-4 py-3 text-base shadow-lg backdrop-blur-sm transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-purple-400/50 dark:focus-visible:border-purple-500/50 focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:shadow-lg focus-visible:shadow-purple-500/20",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:shadow-purple-500/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
