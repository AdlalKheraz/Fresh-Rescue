"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Download, Share2, Sun, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ScannerPage() {
  const [brightness, setBrightness] = useState(100)

  const currentOrder = {
    orderId: "FR-2025-0107-4829",
    store: "HyperFresh Marly",
    items: 3,
    total: 12.45,
    status: "ready",
    pickupTime: "Aujourd'hui 18h-20h",
  }

  return (
    <div className="min-h-screen bg-background pb-24 flex flex-col">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10" />
        <div className="relative p-6 text-center">
          <h1 className="text-2xl font-black text-foreground mb-1">Mon QR Code</h1>
          <p className="text-sm text-muted-foreground">Presentez ce code en magasin</p>
        </div>
      </div>

      {/* QR Code Card */}
      <div className="flex-1 flex flex-col px-4 -mt-2">
        <Card className="flex-1 flex flex-col items-center justify-center p-6 shadow-xl border-0">
          {/* Order Status */}
          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-gradient-primary text-white font-bold px-4 py-2 shadow-lg border-0 text-sm">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Commande prete
            </Badge>
          </div>

          {/* QR Code Display */}
          <div
            className="relative bg-white p-8 rounded-3xl shadow-2xl mb-6 border-4 border-primary/20"
            style={{ filter: `brightness(${brightness}%)` }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" className="rounded-xl">
              {/* QR Code Pattern */}
              <rect width="200" height="200" fill="white" />
              {/* Position patterns */}
              <rect x="10" y="10" width="50" height="50" fill="#2D1B4E" />
              <rect x="17" y="17" width="36" height="36" fill="white" />
              <rect x="24" y="24" width="22" height="22" fill="#2D1B4E" />

              <rect x="140" y="10" width="50" height="50" fill="#2D1B4E" />
              <rect x="147" y="17" width="36" height="36" fill="white" />
              <rect x="154" y="24" width="22" height="22" fill="#2D1B4E" />

              <rect x="10" y="140" width="50" height="50" fill="#2D1B4E" />
              <rect x="17" y="147" width="36" height="36" fill="white" />
              <rect x="24" y="154" width="22" height="22" fill="#2D1B4E" />

              {/* Data modules */}
              <rect x="70" y="10" width="8" height="8" fill="#3ECF8E" />
              <rect x="86" y="10" width="8" height="8" fill="#2D1B4E" />
              <rect x="102" y="10" width="8" height="8" fill="#3ECF8E" />
              <rect x="118" y="10" width="8" height="8" fill="#2D1B4E" />

              <rect x="70" y="26" width="8" height="8" fill="#2D1B4E" />
              <rect x="94" y="26" width="8" height="8" fill="#3ECF8E" />
              <rect x="110" y="26" width="8" height="8" fill="#2D1B4E" />

              <rect x="78" y="42" width="8" height="8" fill="#3ECF8E" />
              <rect x="102" y="42" width="8" height="8" fill="#2D1B4E" />
              <rect x="126" y="42" width="8" height="8" fill="#3ECF8E" />

              <rect x="10" y="70" width="8" height="8" fill="#2D1B4E" />
              <rect x="26" y="70" width="8" height="8" fill="#3ECF8E" />
              <rect x="42" y="70" width="8" height="8" fill="#2D1B4E" />
              <rect x="70" y="70" width="8" height="8" fill="#F5A623" />
              <rect x="86" y="70" width="8" height="8" fill="#2D1B4E" />
              <rect x="110" y="70" width="8" height="8" fill="#3ECF8E" />
              <rect x="134" y="70" width="8" height="8" fill="#2D1B4E" />
              <rect x="150" y="70" width="8" height="8" fill="#F5A623" />
              <rect x="166" y="70" width="8" height="8" fill="#2D1B4E" />
              <rect x="182" y="70" width="8" height="8" fill="#3ECF8E" />

              <rect x="10" y="86" width="8" height="8" fill="#3ECF8E" />
              <rect x="34" y="86" width="8" height="8" fill="#2D1B4E" />
              <rect x="50" y="86" width="8" height="8" fill="#3ECF8E" />
              <rect x="78" y="86" width="8" height="8" fill="#2D1B4E" />
              <rect x="94" y="86" width="8" height="8" fill="#F5A623" />
              <rect x="118" y="86" width="8" height="8" fill="#2D1B4E" />
              <rect x="142" y="86" width="8" height="8" fill="#3ECF8E" />
              <rect x="158" y="86" width="8" height="8" fill="#2D1B4E" />
              <rect x="182" y="86" width="8" height="8" fill="#3ECF8E" />

              <rect x="10" y="102" width="8" height="8" fill="#2D1B4E" />
              <rect x="26" y="102" width="8" height="8" fill="#3ECF8E" />
              <rect x="42" y="102" width="8" height="8" fill="#2D1B4E" />
              <rect x="70" y="102" width="8" height="8" fill="#3ECF8E" />
              <rect x="94" y="102" width="8" height="8" fill="#2D1B4E" />
              <rect x="110" y="102" width="8" height="8" fill="#F5A623" />
              <rect x="126" y="102" width="8" height="8" fill="#2D1B4E" />
              <rect x="150" y="102" width="8" height="8" fill="#3ECF8E" />
              <rect x="174" y="102" width="8" height="8" fill="#2D1B4E" />

              <rect x="10" y="118" width="8" height="8" fill="#3ECF8E" />
              <rect x="34" y="118" width="8" height="8" fill="#2D1B4E" />
              <rect x="58" y="118" width="8" height="8" fill="#3ECF8E" />
              <rect x="86" y="118" width="8" height="8" fill="#2D1B4E" />
              <rect x="102" y="118" width="8" height="8" fill="#3ECF8E" />
              <rect x="134" y="118" width="8" height="8" fill="#2D1B4E" />
              <rect x="158" y="118" width="8" height="8" fill="#3ECF8E" />
              <rect x="182" y="118" width="8" height="8" fill="#2D1B4E" />

              <rect x="70" y="142" width="8" height="8" fill="#2D1B4E" />
              <rect x="86" y="142" width="8" height="8" fill="#3ECF8E" />
              <rect x="110" y="142" width="8" height="8" fill="#2D1B4E" />
              <rect x="134" y="142" width="8" height="8" fill="#F5A623" />
              <rect x="158" y="142" width="8" height="8" fill="#2D1B4E" />
              <rect x="182" y="142" width="8" height="8" fill="#3ECF8E" />

              <rect x="70" y="158" width="8" height="8" fill="#3ECF8E" />
              <rect x="94" y="158" width="8" height="8" fill="#2D1B4E" />
              <rect x="118" y="158" width="8" height="8" fill="#3ECF8E" />
              <rect x="142" y="158" width="8" height="8" fill="#2D1B4E" />
              <rect x="166" y="158" width="8" height="8" fill="#3ECF8E" />

              <rect x="70" y="174" width="8" height="8" fill="#2D1B4E" />
              <rect x="86" y="174" width="8" height="8" fill="#3ECF8E" />
              <rect x="102" y="174" width="8" height="8" fill="#2D1B4E" />
              <rect x="126" y="174" width="8" height="8" fill="#F5A623" />
              <rect x="150" y="174" width="8" height="8" fill="#2D1B4E" />
              <rect x="174" y="174" width="8" height="8" fill="#3ECF8E" />
            </svg>

            {/* Logo overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <Image src="/logo.png" alt="Fresh Rescue" width={44} height={44} className="rounded-lg" />
              </div>
            </div>
          </div>



          {/* Order Details */}
          <div className="w-full max-w-sm space-y-4">
            <div className="text-center p-4 bg-accent/5 rounded-2xl border border-accent/20">
              <p className="text-xs text-muted-foreground mb-1">Numero de commande</p>
              <p className="font-mono font-black text-accent text-xl tracking-wider">{currentOrder.orderId}</p>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-xs text-muted-foreground">Magasin</p>
                </div>
                <p className="font-bold text-foreground">{currentOrder.store}</p>
              </div>
              <div className="flex-1 p-4 bg-secondary/5 rounded-xl border border-secondary/20 text-right">
                <p className="text-xs text-muted-foreground mb-1">{currentOrder.items} articles</p>
                <p className="font-black text-2xl text-secondary">{currentOrder.total.toFixed(2)}</p>
                <p className="text-xs text-secondary">EUR</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-secondary/10 rounded-xl border border-secondary/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-secondary" />
                <p className="text-xs text-muted-foreground">Creneau de retrait</p>
              </div>
              <p className="font-bold text-secondary text-lg">{currentOrder.pickupTime}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-primary/30 text-primary hover:bg-primary/10 rounded-xl py-5"
              >
                <Download className="h-4 w-4 mr-2" />
                Telecharger
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-secondary/30 text-secondary hover:bg-secondary/10 rounded-xl py-5"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground pt-2">
              Presentez ce QR code au magasin HyperFresh pour recuperer votre commande
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
