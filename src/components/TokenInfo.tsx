import { Card } from "@/components/ui/card";

const TokenInfo = () => {
  const tokenomics = [
    { label: "Total Supply", value: "1,000,000,000", color: "text-primary" },
    { label: "Presale Allocation", value: "400,000,000", color: "text-ethereum" },
    { label: "Liquidity Pool", value: "300,000,000", color: "text-bitcoin" },
    { label: "Team & Development", value: "200,000,000", color: "text-solana" },
    { label: "Marketing", value: "100,000,000", color: "text-xrp" },
  ];

  const features = [
    {
      title: "DeFi Integration",
      description: "Built for seamless integration with major DeFi protocols",
      icon: "🔗",
    },
    {
      title: "Low Fees",
      description: "Minimal transaction costs with optimized smart contracts",
      icon: "💰",
    },
    {
      title: "High Security",
      description: "Audited smart contracts with multi-sig wallet protection",
      icon: "🛡️",
    },
    {
      title: "Community Driven",
      description: "Governance token with voting rights for all holders",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Token Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about our tokenomics, features, and what makes our project unique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tokenomics */}
          <Card className="bg-card/80 backdrop-blur-md border-primary/20 p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Tokenomics
            </h3>
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className={`font-bold text-lg ${item.color}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Visual representation */}
            <div className="mt-8">
              <div className="grid grid-cols-5 gap-1 h-4 rounded-lg overflow-hidden">
                <div className="bg-primary"></div>
                <div className="bg-primary"></div>
                <div className="bg-ethereum"></div>
                <div className="bg-bitcoin"></div>
                <div className="bg-solana"></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Presale</span>
                <span>Team</span>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Key Features
            </h3>
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-primary/10 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;