import { Scan, Eye, Globe, ShieldCheck, Link2, Lock } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">The Art of Intelligent Verification</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identity verification becomes a live dialogue—adaptive, human-like, and instantly responsive to risk cues.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Scan className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Biometrics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Captures rich facial and behavioral signals in under 3 seconds—it feels like a conversation, not a selfie.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Environmental Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyzes surroundings and context—from device and location to subtle real-world inconsistencies.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Deepfake Detection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detects micro-expression anomalies and confirms authenticity through adaptive questioning.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Link2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Modular Integration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connects with any leading KYC provider, allowing enterprises to retain their preferred vendors while
              unifying verification.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Multi-Factor Authentication</h3>
            <p className="text-muted-foreground leading-relaxed">
              Combines biometric and conversational verification with traditional MFA for layered security.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Interactive Conversation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Identity verification becomes a live dialogue—adaptive, human-like, and instantly responsive to risk cues.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
