import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-balance">
          Join Us in Revolutionizing Identity Verification
        </h2>
        <p className="text-xl opacity-90 leading-relaxed">
          This is your opportunity to invest in the future of secure digital identity. Contact us today to learn more
          about this exciting opportunity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="mailto:gilad@daydreamnation.io">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Download Pitch Deck
          </Button>
        </div>
      </div>
    </section>
  )
}
