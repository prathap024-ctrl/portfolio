import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"


// ModeToggle component as a simple light/dark toggle switch
export function ModeToggle() {
  const { theme, setTheme } = useTheme() // Access current theme and setter

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-sm bg-settheme"
    >
      {/* Sun icon: visible in light mode, hidden in dark */}
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out scale-100 dark:scale-0" />
      {/* Moon icon: visible in dark mode, hidden in light */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out scale-0 dark:scale-100" />
    </Button>
  )
}

export default ModeToggle