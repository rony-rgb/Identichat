import { TrendingUp, Target, DollarSign } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Key Market Opportunity</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The RegTech market is experiencing explosive growth as regulatory requirements tighten and fraud incidents
            surge across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div className="text-5xl font-bold text-primary">$6.73B</div>
            <div className="text-lg font-semibold">Total Addressable Market</div>
            <div className="text-sm text-muted-foreground">Current market size</div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-5xl font-bold text-primary">$14.39B</div>
            <div className="text-lg font-semibold">Projected Growth by 2030</div>
            <div className="text-sm text-muted-foreground">Expected market expansion</div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div className="text-5xl font-bold text-primary">$2.0B</div>
            <div className="text-lg font-semibold">Serviceable Addressable Market</div>
            <div className="text-sm text-muted-foreground">Video-based KYC segment</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border space-y-3">
            <h3 className="text-xl font-bold">Financial Services</h3>
            <p className="text-muted-foreground">Banks, fintechs, payment processors, and financial institutions</p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-3">
            <h3 className="text-xl font-bold">Government</h3>
            <p className="text-muted-foreground">Public sector agencies, IRS, Immigration, and regulatory bodies</p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-3">
            <h3 className="text-xl font-bold">Healthcare</h3>
            <p className="text-muted-foreground">
              Medical providers, hospitals, insurance companies, and healthcare systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
