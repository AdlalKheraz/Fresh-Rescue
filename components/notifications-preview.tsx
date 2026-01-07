import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"
import Link from "next/link"

export function NotificationsPreview() {
  return (
    <Card className="p-4 shadow-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-foreground" />
            <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
            <Badge variant="destructive" className="h-5 min-w-5 px-1.5 text-xs font-bold">
              3
            </Badge>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary">
          <p className="text-xs text-foreground">🎉 Tes fruits préférés à -60% chez Leclerc</p>
        </div>

        <Link
          href="#"
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center justify-end gap-1"
        >
          Tout voir →
        </Link>
      </div>
    </Card>
  )
}
