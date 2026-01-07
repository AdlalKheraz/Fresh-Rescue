"use client"

import { X, Users, Copy, Check, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface ReferralModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReferralModal({ isOpen, onClose }: ReferralModalProps) {
  const [copied, setCopied] = useState(false)
  const referralCode = "FRESH-LEA-2024"
  const referralLink = `https://freshrescue.app/join?ref=${referralCode}`

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <Card className="relative z-10 w-full max-w-sm bg-card p-6 shadow-xl animate-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors">
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">Parraine un ami</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Gagne 20 points pour chaque ami qui s'inscrit et fait son premier achat
            </p>
          </div>

          <div className="w-full p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground mb-2">Ton code de parrainage</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm font-mono font-bold text-foreground bg-background px-3 py-2 rounded">
                {referralCode}
              </code>
              <Button size="sm" variant="outline" onClick={handleCopy} className="shrink-0 bg-transparent">
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gift className="h-4 w-4 text-secondary" />
            <span>Max 5 parrainages par saison (3 mois)</span>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleCopy}>
            {copied ? "Lien copie!" : "Copier le lien de parrainage"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
