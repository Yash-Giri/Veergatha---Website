import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const separatorVariants = cva("h-px w-full flex-shrink-0 bg-border", {
  variants: {
    variant: {
      default: "bg-border",
      destructive: "bg-destructive",
      outline: "bg-border",
      secondary: "bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface SeparatorVariantProps
  extends VariantProps<typeof separatorVariants> {
  className?: string
  orientation?: "horizontal" | "vertical"
}

export const Separator = React.forwardRef<
  HTMLDivElement,
  SeparatorVariantProps
>(({ className, variant, orientation = "horizontal", ...props }, ref) => {
  const baseClass = clsx(separatorVariants({ variant, className }), className)

  return (
    <div
      ref={ref}
      className={
        orientation === "vertical"
          ? `${baseClass} w-px h-full`
          : `${baseClass} h-px w-full`
      }
      {...props}
    />
  )
})
Separator.displayName = "Separator"