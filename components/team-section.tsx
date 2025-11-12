import { Mail } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Meet the Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by seasoned fintech and compliance experts with a track record of building scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/gilad-cohen.jpg"
                  alt="Gilad Cohen"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Gilad Cohen</h3>
                <p className="text-primary font-medium">CEO, Co-Founder</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience in fintech, regulatory compliance, and digital innovation, Gilad has led
              KYC, AML, and risk-management initiatives across multiple regulated entities. His career spans product
              management, compliance architecture, and hands-on collaboration with global verification leaders such as
              Trulioo, Onfido, and Au10tix.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As an entrepreneur, Gilad has built and launched multiple digital products at the intersection of AI,
              identity, and compliance. He founded Identichat to redefine digital identity verification—bringing human
              trust back to KYC through real-time, AI-powered face-to-face interaction.
            </p>

            <a
              href="mailto:gilad@identichat.ai"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              gilad@identichat.ai
            </a>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/rony-boter.jpg"
                  alt="Rony Boter"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rony Boter</h3>
                <p className="text-primary font-medium">CTO & Co-Founder</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Rony is a serial entrepreneur and seasoned fintech technologist with a track record of building and
              scaling startups backed by millions in investment. Before co-founding Identichat, he led core KYC platform
              initiatives at Payoneer, where he and Gilad collaborated on next-generation verification solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With deep expertise in AI infrastructure, cloud architecture, and secure financial systems, Rony drives
              Identichat's technical vision—transforming complex regulatory workflows into seamless, intelligent, and
              scalable digital experiences.
            </p>

            <a
              href="mailto:rony@identichat.ai"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              rony@identichat.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
