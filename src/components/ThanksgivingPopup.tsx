'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"

interface ThanksgivingPopupProps {
  delay?: number
}

const ThanksgivingPopup: React.FC<ThanksgivingPopupProps> = ({ delay = 5000 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!mounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-600 text-center">
            Happy Thanksgiving!
          </DialogTitle>
          <DialogDescription className="text-center">
              <img
                src="/thanksgiving.jpg"
                alt="Thanksgiving celebration"
                className="rounded-lg object-cover"
              />
            <p className="text-gray-700 mt-2">
              We&apos;re thankful for your support. Enjoy this special day with your
              loved ones!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ThanksgivingPopup