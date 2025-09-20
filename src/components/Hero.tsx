import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/crypto-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-16 md:mt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-ethereum bg-clip-text text-transparent">
            WORLD LIBERTY FINANCIAL
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            WLFI PRESALE IS LIVE
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            In 2023 and 2024, coins like $PEPE, $WIF, and $VIRTUAL launched with zero fanfare and turned early buyers into millionaires practically overnight. In 2025, Bitcoin's hitting new all-time highs and the appetite for gains is bigger than ever. If you want a shot at 100x, you need more than just hype, you need a gem the market hasn't fully priced in.
          </p>
          
          {/* Presale Stats */}
          <Card className="bg-card/80 backdrop-blur-md border-primary/20 p-8 mb-8 shadow-[var(--shadow-neon)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-3">
                <p className="text-sm text-muted-foreground mb-2">TIME LEFT</p>
                <p className="text-2xl font-bold text-accent">3 weeks 4 days</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-gradient-to-r from-primary to-ethereum h-3 rounded-full w-[48%] shadow-[var(--shadow-neon)]"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">48% Complete</p>
            </div>
          </Card>
          
          {/* <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-ethereum hover:shadow-[var(--shadow-neon)] text-lg px-12 py-6 h-auto font-semibold"
          >
            BUY TOKENS NOW
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;