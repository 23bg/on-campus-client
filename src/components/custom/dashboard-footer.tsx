import { useEffect, useState } from "react"
import { Moon, Sun, Laptop, CheckCircle } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import logo from '@/assets/favicon.ico'

type Theme = "light" | "dark" | "system"

export default function DashboardFooter() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  )

  useEffect(() => {
    const root = window.document.documentElement

    const applyTheme = (mode: Theme) => {
      if (mode === "dark") {
        root.classList.add("dark")
      } else if (mode === "light") {
        root.classList.remove("dark")
      } else {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        root.classList.toggle("dark", systemPrefersDark)
      }
    }

    applyTheme(theme)
    localStorage.setItem("theme", theme)

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)")
      const handler = () => applyTheme("system")
      media.addEventListener("change", handler)
      return () => media.removeEventListener("change", handler)
    }
  }, [theme])

  return (
    <footer className="border-t border-border py-8 px-4 md:px-10 text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">

        {/* Left: Logo & Links & Copyright */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="flex gap-4">
            <a href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <img src={logo} className="w-8 h-8" alt="OnCampus Logo" />
          </a>

          <ul className="flex flex-wrap items-center gap-4">
            <li><a href="/home" className="hover:text-foreground">Home</a></li>
            <li><a href="/docs" className="hover:text-foreground">Docs</a></li>
            <li><a href="/guides" className="hover:text-foreground">Guides</a></li>
            <li><a href="/help" className="hover:text-foreground">Help</a></li>
            <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
            <li><a href="/legal" className="hover:text-foreground">Legal</a></li>
          </ul>
          </div>

          {/* Copyright placed here */}
          <div className="text-xs pt-2 text-muted-foreground">
            © {new Date().getFullYear()}, onCampus Inc.
          </div>
        </div>

        {/* Right: System status & Theme switcher */}
        <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
          <a
            href="https://status.yourdomain.com"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <CheckCircle className="w-4 h-4 text-green-500" />
            All systems normal
          </a>

          <ToggleGroup
            type="single"
            value={theme}
            onValueChange={(val) => val && setTheme(val as Theme)}
            className="rounded border"
          >
            <ToggleGroupItem value="light" aria-label="Light theme">
              <Sun className="w-4 h-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Dark theme">
              <Moon className="w-4 h-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="system" aria-label="System theme">
              <Laptop className="w-4 h-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </footer>

  )
}
