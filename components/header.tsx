import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <Image src="/identichat-logo.png" alt="Identichat" width={140} height={32} className="h-8 w-auto" />
          </div>
        </Link>
        {/* </CHANGE> */}

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#solution"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Solution
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link href="#team" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Team
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
          >
            <a href="mailto:gilad@daydreamnation.io">Contact Us</a>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSebSHrnnhRoXzgNJEYqN8ts7J9k9zVfGYKB22uEbjZlycHHxA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Waitlist
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
