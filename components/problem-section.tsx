export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">The Automation Glass Ceiling</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-pretty">
            Current KYC processes are failing catastrophically, with manual intervention rates creating massive
            operational costs and customer abandonment across financial institutions. Processing delays exceed days for
            corporate KYC, while teams of KYC agents make up a significant portion of operational costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card/50 rounded-xl p-8 border-2 border-primary/30 space-y-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-primary">Manual Intervention Crisis</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              High manual intervention rates, with some complex cases requiring extensive human review. Processing
              delays of more than 30 days for corporate KYC create bottlenecks.
            </p>
          </div>

          <div className="bg-card/50 rounded-xl p-8 border-2 border-primary/30 space-y-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-primary">Customer Abandonment</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Banks lost clients due to poor KYC experiences, with abandonment rates during digital account opening
              reaching critical levels. Most institutions take longer than 5 minutes to open accounts.
            </p>
          </div>

          <div className="bg-card/50 rounded-xl p-8 border-2 border-primary/30 space-y-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-primary">Root Causes</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Cumbersome forms and unclear requirements, complex onboarding processes cause offline back-and-forth.
              Security challenges include combating synthetic identities, fraudulent documents and deepfakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
