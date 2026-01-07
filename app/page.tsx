"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { PremiumBanner } from "@/components/premium-banner"
import { ImpactScore } from "@/components/impact-score"
import { FlashSales } from "@/components/flash-sales"
import { AvailableBaskets } from "@/components/available-baskets"
import { GamificationSection } from "@/components/gamification-section"
import { QuickActions } from "@/components/quick-actions"
import { PurchaseHistory } from "@/components/purchase-history"
import { BottomNav } from "@/components/bottom-nav"
import { NotificationsPopup } from "@/components/notifications-popup"
import { CartPage } from "@/components/cart-page"
import { CatalogPage } from "@/components/catalog-page"
import { ProfilePage } from "@/components/profile-page"
import { ScannerPage } from "@/components/scanner-page"
import { MorePage } from "@/components/more-page"
import { ReferralModal } from "@/components/referral-modal"
import { ShareModal } from "@/components/share-modal"

const userStats = {
  points: 287,
  totalSpent: 287,
  co2Saved: 18.5,
  mealsSaved: 34,
  currentStreak: 5,
  referrals: 2,
  socialShares: 0,
  seasonStartDate: new Date("2024-01-01"),
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "catalog" | "scan" | "profile" | "more">("home")
  const [showNotifications, setShowNotifications] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showReferral, setShowReferral] = useState(false)
  const [showShare, setShowShare] = useState(false)

  const renderPage = () => {
    switch (activeTab) {
      case "catalog":
        return <CatalogPage />
      case "scan":
        return <ScannerPage />
      case "profile":
        return <ProfilePage />
      case "more":
        return <MorePage />
      default:
        return (
          <>
            {/* Header */}
            <DashboardHeader
              userName="Lea"
              level={5}
              isPremium={false}
              notificationCount={3}
              cartCount={2}
              onNotificationClick={() => setShowNotifications(true)}
              onCartClick={() => setShowCart(true)}
            />

            {/* Main Content */}
            <main className="px-4 space-y-4 pt-20 pb-4">
              {/* Premium Banner */}
              <PremiumBanner />

              <ImpactScore
                stats={userStats}
                onReferralClick={() => setShowReferral(true)}
                onShareClick={() => setShowShare(true)}
              />

              {/* Flash Sales */}
              <FlashSales />

              {/* Available Baskets */}
              <AvailableBaskets />

              {/* Gamification */}
              <GamificationSection />

              {/* Quick Actions */}
              <QuickActions />

              {/* History */}
              <PurchaseHistory />
            </main>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {renderPage()}

      {/* Bottom Navigation - always visible */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Notifications Popup */}
      <NotificationsPopup isOpen={showNotifications} onClose={() => setShowNotifications(false)} />

      {/* Cart Page */}
      <CartPage isOpen={showCart} onClose={() => setShowCart(false)} />

      <ReferralModal isOpen={showReferral} onClose={() => setShowReferral(false)} />
      <ShareModal isOpen={showShare} onClose={() => setShowShare(false)} />
    </div>
  )
}
