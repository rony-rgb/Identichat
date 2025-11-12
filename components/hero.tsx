import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
              Revolutionizing KYC with AI-Powered Video Chats
            </h1>

            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed text-pretty">
              Identichat transforms identity verification from a frustrating bottleneck into a seamless conversation.
              Our AI-powered video chat replaces static forms with human-like interactions that verify identities in
              real-time.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSebSHrnnhRoXzgNJEYqN8ts7J9k9zVfGYKB22uEbjZlycHHxA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Waitlist
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 h-12 bg-transparent"
                asChild
              >
                <a href="mailto:gilad@daydreamnation.io">Contact Us</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/identichat-verification-demo.png"
              alt="AI-powered facial verification with multiple users and Identichat mobile interface"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
