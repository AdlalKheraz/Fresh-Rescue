"use client"

import { X, Share2, Instagram, Twitter, Facebook, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
}

const socialPlatforms = [
  { name: "Instagram", icon: Instagram, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { name: "Twitter", icon: Twitter, color: "bg-sky-500" },
  { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
  { name: "WhatsApp", icon: MessageCircle, color: "bg-green-500" },
]

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null

  const handleShare = (platform: string) => {
    // In a real app, this would open the share dialog for the platform
    console.log(`Sharing on ${platform}`)
    onClose()
  }

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
          <div className="p-4 rounded-full bg-secondary/10">
            <Share2 className="h-8 w-8 text-secondary" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">Partage ton impact</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Montre a tes amis combien tu as sauve de repas et gagne 10 points!
            </p>
          </div>

          <div className="w-full p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
            <p className="text-sm font-medium text-foreground">
              "J'ai sauve 34 repas et economise 18.5kg de CO2 avec Fresh Rescue!"
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 w-full">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon
              return (
                <button
                  key={platform.name}
                  onClick={() => handleShare(platform.name)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl ${platform.color} text-white hover:opacity-90 transition-opacity`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-[10px] font-medium">{platform.name}</span>
                </button>
              )
            })}
          </div>

          <p className="text-xs text-muted-foreground">1 partage par saison (3 mois)</p>
        </div>
      </Card>
    </div>
  )
}
