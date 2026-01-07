"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  TrendingUp,
  Euro,
  Globe,
  UtensilsCrossed,
  Trophy,
  Flame,
  Users,
  Share2,
  Gift,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react"

interface UserStats {
  points: number
  totalSpent: number
  co2Saved: number
  mealsSaved: number
  currentStreak: number
  referrals: number
  socialShares: number
  seasonStartDate: Date
}

interface Level {
  name: string
  minPoints: number
  maxPoints: number
  color: string
  bgColor: string
  gradientClass: string
  reward: string
  icon: typeof Trophy
}

const LEVELS: Level[] = [
  {
    name: "Rookie",
    minPoints: 0,
    maxPoints: 100,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    gradientClass: "from-zinc-400 to-zinc-500",
    reward: "Bons d'achat valables sur tout le magasin",
    icon: Leaf,
  },
  {
    name: "Hero",
    minPoints: 100,
    maxPoints: 350,
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradientClass: "from-primary to-emerald-600",
    reward: "25% de reduction sur tous les paniers",
    icon: TrendingUp,
  },
  {
    name: "Legend",
    minPoints: 350,
    maxPoints: 600,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradientClass: "from-secondary to-amber-600",
    reward: "75% de reduction sur 3 paniers par saison",
    icon: Trophy,
  },
  {
    name: "Planet Saver",
    minPoints: 600,
    maxPoints: 999999,
    color: "text-accent",
    bgColor: "bg-accent/10",
    gradientClass: "from-accent to-purple-600",
    reward: "1 panier gratuit (10 EUR max) par saison",
    icon: Globe,
  },
]

function getCurrentLevel(points: number): Level {
  return LEVELS.find((l) => points >= l.minPoints && points < l.maxPoints) || LEVELS[LEVELS.length - 1]
}

function getNextLevel(points: number): Level | null {
  const currentIndex = LEVELS.findIndex((l) => points >= l.minPoints && points < l.maxPoints)
  return currentIndex < LEVELS.length - 1 ? LEVELS[currentIndex + 1] : null
}

function getDaysUntilReset(seasonStart: Date): number {
  const seasonEnd = new Date(seasonStart)
  seasonEnd.setMonth(seasonEnd.getMonth() + 3)
  const now = new Date()
  const diffTime = seasonEnd.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)))
}

interface ImpactScoreProps {
  stats: UserStats
  onReferralClick?: () => void
  onShareClick?: () => void
}

export function ImpactScore({ stats, onReferralClick, onShareClick }: ImpactScoreProps) {
  const currentLevel = getCurrentLevel(stats.points)
  const nextLevel = getNextLevel(stats.points)
  const LevelIcon = currentLevel.icon

  const progressPercent = nextLevel
    ? ((stats.points - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100
    : 100

  const pointsToNext = nextLevel ? nextLevel.minPoints - stats.points : 0
  const daysLeft = getDaysUntilReset(stats.seasonStartDate)

  const hasStreakBonus = stats.currentStreak >= 7
  const canRefer = stats.referrals < 5
  const canShare = stats.socialShares < 1

  return (
    <div className="space-y-4">
      {/* Main Impact Card */}
      <Card className="relative overflow-hidden border-0 shadow-xl animate-slide-up">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentLevel.gradientClass} opacity-10`} />

        <div className="relative p-5">
          {/* Season Timer */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-muted-foreground glass rounded-full px-3 py-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-medium">{daysLeft}j avant reset</span>
          </div>

          <div className="flex flex-col gap-5">
            {/* Level Badge & Score */}
            <div className="flex items-start justify-between">
              <div>
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${currentLevel.gradientClass} mb-3 shadow-lg`}
                >
                  <LevelIcon className="h-5 w-5 text-white" />
                  <span className="text-sm font-bold text-white">{currentLevel.name}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-foreground">{stats.points}</span>
                  <span className="text-sm text-muted-foreground font-medium">points</span>
                </div>
              </div>

              {/* Streak Badge */}
              {stats.currentStreak > 0 && (
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg ${
                    hasStreakBonus ? "bg-gradient-secondary" : "bg-muted"
                  }`}
                >
                  <Flame
                    className={`h-5 w-5 ${hasStreakBonus ? "text-white animate-pulse" : "text-muted-foreground"}`}
                  />
                  <div className="flex flex-col">
                    <span className={`text-lg font-bold ${hasStreakBonus ? "text-white" : "text-foreground"}`}>
                      {stats.currentStreak}j
                    </span>
                    {hasStreakBonus && <span className="text-[10px] text-white/80">x2 actif</span>}
                  </div>
                </div>
              )}
            </div>

            {/* Current Reward */}
            <div className={`flex items-center gap-3 p-4 rounded-xl ${currentLevel.bgColor} border border-border/50`}>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${currentLevel.gradientClass}`}>
                <Gift className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">Ta recompense actuelle</p>
                <p className="text-sm font-semibold text-foreground">{currentLevel.reward}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Euro, label: "depenses", value: `${stats.totalSpent.toFixed(0)} EUR`, color: "text-secondary" },
                { icon: Globe, label: "CO2 evites", value: `${stats.co2Saved}kg`, color: "text-primary" },
                {
                  icon: UtensilsCrossed,
                  label: "repas sauves",
                  value: stats.mealsSaved.toString(),
                  color: "text-accent",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-card rounded-xl p-4 shadow-sm card-hover border border-border/50"
                >
                  <stat.icon className={`h-6 w-6 ${stat.color} mb-2`} />
                  <span className="text-xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground text-center">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Progress to Next Level */}
            {nextLevel && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Prochain: <span className={`font-semibold ${nextLevel.color}`}>{nextLevel.name}</span>
                  </span>
                  <span className="font-bold text-foreground">{pointsToNext} pts</span>
                </div>
                <div className="relative">
                  <Progress value={progressPercent} className="h-3 bg-muted" />
                  <div
                    className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Points Earning Options */}
      <Card className="p-5 shadow-lg border-0 animate-slide-up">
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-secondary" />
          Gagne plus de points
        </h3>

        <div className="space-y-3">
          {/* Referral */}
          <button
            onClick={onReferralClick}
            disabled={!canRefer}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all card-hover ${
              canRefer
                ? "bg-primary/5 hover:bg-primary/10 border border-primary/20"
                : "bg-muted/50 opacity-60 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-primary shadow-md">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Parraine un ami</p>
                <p className="text-xs text-muted-foreground">+20 pts ({stats.referrals}/5 cette saison)</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Social Share */}
          <button
            onClick={onShareClick}
            disabled={!canShare}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all card-hover ${
              canShare
                ? "bg-secondary/5 hover:bg-secondary/10 border border-secondary/20"
                : "bg-muted/50 opacity-60 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-secondary shadow-md">
                <Share2 className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Partage sur les reseaux</p>
                <p className="text-xs text-muted-foreground">+10 pts ({stats.socialShares}/1 cette saison)</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Streak Info */}
          <div
            className={`flex items-center justify-between p-4 rounded-xl border ${
              hasStreakBonus ? "bg-secondary/10 border-secondary/30" : "bg-muted/30 border-border/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${hasStreakBonus ? "bg-gradient-secondary" : "bg-muted"} shadow-md`}>
                <Flame className={`h-5 w-5 ${hasStreakBonus ? "text-white" : "text-muted-foreground"}`} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Serie de 7 jours</p>
                <p className="text-xs text-muted-foreground">
                  {hasStreakBonus
                    ? "Bonus x2 actif! 1 EUR = 2 pts"
                    : `Encore ${7 - stats.currentStreak} jours pour le bonus x2`}
                </p>
              </div>
            </div>
            {hasStreakBonus && (
              <span className="text-xs font-bold text-white bg-gradient-secondary px-3 py-1.5 rounded-full shadow-md">
                ACTIF
              </span>
            )}
          </div>
        </div>
      </Card>

      {/* Levels Overview */}
      <Card className="p-5 shadow-lg border-0 animate-slide-up">
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-secondary" />
          Niveaux et recompenses
        </h3>

        <div className="space-y-3">
          {LEVELS.map((level) => {
            const isCurrentLevel = level.name === currentLevel.name
            const isUnlocked = stats.points >= level.minPoints
            const LIcon = level.icon

            return (
              <div
                key={level.name}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  isCurrentLevel
                    ? `${level.bgColor} border-2 border-primary/30 shadow-md`
                    : isUnlocked
                      ? "bg-muted/30 border border-border/50"
                      : "bg-muted/10 border border-border/30 opacity-50"
                }`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${level.gradientClass} shadow-md`}>
                  <LIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className={`text-sm font-bold ${isCurrentLevel ? level.color : "text-foreground"}`}>
                      {level.name}
                    </p>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {level.minPoints}+ pts
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{level.reward}</p>
                </div>
                {isCurrentLevel && (
                  <span className="text-[10px] font-bold text-white bg-gradient-primary px-3 py-1 rounded-full shadow-md">
                    ACTUEL
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
