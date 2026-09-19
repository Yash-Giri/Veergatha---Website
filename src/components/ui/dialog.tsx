import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const dialogTriggerVariants = cva(
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

const dialogContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-background bg-background px-6 py-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2 sm:rounded-xl",
  {
    variants: {
      variant: {
        default: "border-border bg-popover",
        destructive:
          "border-destructive bg-destructive text-destructive-foreground",
        outline: "border-border",
        secondary: "border-secondary bg-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const dialogOverlayVariants = cva(
  "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
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

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dialogTriggerVariants> {
  asChild?: boolean
}

export interface DialogContentProps
  extends React.DivHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogContentVariants> {
  className?: string
}

export interface DialogOverlayProps
  extends React.DivHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogOverlayVariants> {
  className?: string
}

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  return (
    <DialogPrimitive.Trigger
      as={Comp}
      className={clsx(dialogTriggerVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {asChild ? props.children : null}
    </DialogPrimitive.Trigger>
  )
})
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(({ className, variant, ...props }, ref) => {
  return (
    <DialogPrimitive.Content
      ref={ref}
      className={clsx(dialogContentVariants({ variant, className }), className)}
      {...props}
    />
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

export const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  DialogOverlayProps
>(({ className, variant, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={clsx(dialogOverlayVariants({ variant, className }), className)}
      {...props}
    />
  )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={clsx("space-y-2", className)} {...props} />
  )
}
DialogHeader.displayName = "DialogHeader"

export const DialogTitle = ({
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
DialogTitle.displayName = "DialogTitle"

export const DialogDescription = ({
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
DialogDescription.displayName = "DialogDescription"

export const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"