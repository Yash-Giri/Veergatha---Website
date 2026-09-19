import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"

import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const sheetTriggerVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const sheetContentVariants = cva(
  "fixed left-0 right-0 bottom-0 z-50 border-top border-border bg-background px-6 pb-6 pt-[calc(env(safe-area-inset-bottom)+6rem)] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
  {
    variants: {
      variant: {
        default: "border-t border-border",
        destructive: "border-t border-destructive",
        outline: "border-t border-border",
        secondary: "border-t border-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sheetOverlayVariants = cva(
  "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {
      variant: {
        default: "bg-black/80",
        destructive: "bg-destructive/80",
        outline: "bg-black/80",
        secondary: "bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sheetTriggerVariants> {
  asChild?: boolean
}

export interface SheetContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetContentVariants> {
  className?: string
}

export interface SheetOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetOverlayVariants> {
  className?: string
}

export const Sheet = SheetPrimitive.Root
export const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  SheetTriggerProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  return (
    <SheetPrimitive.Trigger
      asChild={asChild}
      className={clsx(sheetTriggerVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {asChild ? props.children : null}
    </SheetPrimitive.Trigger>
  )
})
SheetTrigger.displayName = SheetPrimitive.Trigger.displayName

export const SheetContent = React.forwardRef<
  HTMLDivElement,
  SheetContentProps
>(({ className, variant, ...props }, ref) => {
  return (
    <SheetPrimitive.Content
      ref={ref}
      className={clsx(sheetContentVariants({ variant, className }), className)}
      {...props}
    />
  )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

export const SheetOverlay = React.forwardRef<
  HTMLDivElement,
  SheetOverlayProps
>(({ className, variant, ...props }, ref) => {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={clsx(sheetOverlayVariants({ variant, className }), className)}
      {...props}
    />
  )
})
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

export const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={clsx("space-y-2", className)} {...props} />
  )
}
SheetHeader.displayName = "SheetHeader"

export const SheetTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <h2
      className={clsx(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}
SheetTitle.displayName = "SheetTitle"

export const SheetDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <p
      className={clsx("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
SheetDescription.displayName = "SheetDescription"

export const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={clsx("flex flex-col sm:flex-row sm:justify-end sm:space-x-2 mt-6", className)}
      {...props}
    />
  )
}
SheetFooter.displayName = "SheetFooter"