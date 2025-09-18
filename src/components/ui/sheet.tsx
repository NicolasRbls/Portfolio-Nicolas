"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SheetProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface SheetContentProps {
  children: React.ReactNode
  side?: "left" | "right" | "top" | "bottom"
  className?: string
}

interface SheetTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

interface SheetTitleProps {
  children: React.ReactNode
  className?: string
}

interface SheetCloseProps {
  children: React.ReactNode
  asChild?: boolean
}

const SheetContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

const Sheet = ({ children, open: externalOpen, onOpenChange }: SheetProps) => {
  const [internalOpen, setInternalOpen] = React.useState(false)

  const open = externalOpen !== undefined ? externalOpen : internalOpen
  const setOpen = React.useCallback(
    (newOpen: boolean) => {
      if (onOpenChange) {
        onOpenChange(newOpen)
      } else {
        setInternalOpen(newOpen)
      }
    },
    [onOpenChange],
  )

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
}

const SheetTrigger = ({ children, asChild }: SheetTriggerProps) => {
  const { setOpen } = React.useContext(SheetContext)

  if (asChild) {
    const childElement = children as React.ReactElement<any>
    return React.cloneElement(childElement, {
      onClick: (e: React.MouseEvent) => {
        const originalOnClick = childElement.props.onClick
        if (originalOnClick) originalOnClick(e)
        setOpen(true)
      },
    })
  }

  return <button onClick={() => setOpen(true)}>{children}</button>
}

const SheetContent = ({ children, side = "right", className }: SheetContentProps) => {
  const { open, setOpen } = React.useContext(SheetContext)

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  const sideClasses = {
    right: "right-0 top-0 h-full w-80 translate-x-0",
    left: "left-0 top-0 h-full w-80 -translate-x-0",
    top: "top-0 left-0 w-full h-80 translate-y-0",
    bottom: "bottom-0 left-0 w-full h-80 translate-y-0",
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)} />

      {/* Sheet Content */}
      <div
        className={cn(
          "fixed z-50 bg-background border-l shadow-lg transition-transform duration-300 ease-in-out",
          sideClasses[side],
          className,
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)} className="ml-auto">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>
    </>
  )
}

const SheetHeader = ({ children, className }: SheetHeaderProps) => {
  return <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}>{children}</div>
}

const SheetTitle = ({ children, className }: SheetTitleProps) => {
  return <h2 className={cn("text-lg font-semibold text-foreground", className)}>{children}</h2>
}

const SheetClose = ({ children, asChild }: SheetCloseProps) => {
  const { setOpen } = React.useContext(SheetContext)

  if (asChild) {
    const childElement = children as React.ReactElement<any>
    return React.cloneElement(childElement, {
      onClick: (e: React.MouseEvent) => {
        const originalOnClick = childElement.props.onClick
        if (originalOnClick) originalOnClick(e)
        setOpen(false)
      },
    })
  }

  return <button onClick={() => setOpen(false)}>{children}</button>
}

export { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose }
