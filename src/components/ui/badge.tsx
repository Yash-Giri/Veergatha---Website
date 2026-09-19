import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-destructive/50 bg-destructive text-destructive-foreground",
        outline: "border border-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeVariantProps
  extends VariantProps<typeof badgeVariants> {
  className?: string
}

export const Badge = React.forwardRef<
  HTMLDivElement,
  BadgeVariantProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(badgeVariants({ variant, className }), className)}
      {...props}
    />
  )
})
Badge.displayName = "Badge"