'use client'

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"

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
            <div className="relative w-full h-48 my-4">
              <Image
                src="/thanksgiving.jpg"
                alt="Thanksgiving celebration"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
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