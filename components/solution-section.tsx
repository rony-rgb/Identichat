import { Video, Shield, MessageSquare, Layers } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            Conversational Intelligence Meets Regulatory Compliance
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-pretty">
            Identichat is an AI-powered video chat platform that transforms KYC from a form-filling chore into a natural
            conversation. Our technology conducts intelligent interviews, analyzes documents in real-time, and ensures
            regulatory compliance—all while maintaining a human touch.
          </p>
        </div>

        {/* Large feature showcase */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="aspect-video flex items-center justify-center p-12">
            <img
              src="/identichat-mobile-verification.png"
              alt="AI Video Chat Interface"
              className="rounded-lg w-full max-w-3xl object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-8 border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Video className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Interactive Video Chat</h3>
            <p className="text-muted-foreground leading-relaxed">
              Natural language conversation that feels human. Our AI agent engages users in a friendly dialogue, making
              verification feel effortless.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Anti-Fraud</h3>
            <p className="text-muted-foreground leading-relaxed">
              Constant video stream with real-time spoof detection. Advanced deepfake detection analyzes
              micro-expressions and behavioral patterns.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Adaptive Q&A</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI resolves anomalies through intelligent questioning tailored to each situation, ensuring accuracy
              without frustration.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Intelligent Layer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seamlessly overlays existing KYC infrastructure—acting as a smart interactive layer that elevates
              verification workflows rather than replaces them.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary text-primary-foreground">
            <div className="text-4xl font-bold">95%</div>
            <div className="text-left">
              <div className="font-semibold">Completion Rate</div>
              <div className="text-sm opacity-90">Within 180 seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
