import { Rocket, Handshake, Users2 } from "lucide-react"

export function TractionSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Proven Traction
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Traction & Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our pilot programs show strong market validation and enterprise interest. Identichat is on track to improve
            security and efficiency for our partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border space-y-6 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Near Production-Ready MVP</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our MVP is near production-ready, featuring a live interactive demonstration that showcases its advanced
                capabilities and seamless user experience.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-6 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Strategic Enterprise Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                We have secured a pivotal joint venture with a leading KYC provider, serving high-profile customers
                including Stripe, Amazon, and others.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-6 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Users2 className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Expert & Dedicated Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced team is fully equipped and poised for rapid execution, driving product development and
                market penetration with proven expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
