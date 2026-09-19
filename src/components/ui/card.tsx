import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const cardVariants = cva(
  "rounded-xl border border-input bg-background px-6 pb-6 pt-4 shadow-sm [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "border-border",
        destructive:
          "border-destructive/50 bg-destructive text-destructive-foreground",
        outline: "border-border",
        secondary: "border-secondary/50 bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardVariantProps extends VariantProps<typeof cardVariants> {
  className?: string
}

export const Card = React.forwardRef<
  HTMLDivElement,
  CardVariantProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(cardVariants({ variant, className }), className)}
      {...props}
    />
  )
})
Card.displayName = "Card"