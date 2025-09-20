import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PaymentSection from "@/components/PaymentSection";
import TokenInfo from "@/components/TokenInfo";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <Header />
      <main>
        <Hero />
        <div id="presale">
          <PaymentSection />
        </div>
        <div id="tokenomics">
          <TokenInfo />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 World Liberty Financial. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
