import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const BDSPaymentSection = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const MIN_AMOUNT = 500; // $500 minimum
  const SESSIONS_PER_PASS = 10;

  const cryptoOptions = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      color: "bitcoin",
      icon: "₿",
      address: "1KpVE5RxQtCbE5NbCYSRdPTtYmurYDCHZi",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      color: "ethereum",
      icon: "Ξ",
      address: "0xe84636db9e149ad5c0322107825976b1d969206e",
    },
  ];

  const getButtonColorClass = (color: string) => {
    switch (color) {
      case "bitcoin":
        return "bg-bitcoin hover:bg-bitcoin/80 text-bitcoin-foreground";
      case "ethereum":
        return "bg-ethereum hover:bg-ethereum/80 text-ethereum-foreground";
      default:
        return "bg-primary hover:bg-primary/80";
    }
  };

  const isValidAmount = () => {
    const val = parseFloat(amount);
    return !isNaN(val) && val >= MIN_AMOUNT;
  };

  return (
    <section id="dungeon-pass" className="py-20 px-4 bg-gradient-to-b from-background via-card to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            BDSM Payments for Dungeon Sessions Pass
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Purchase your exclusive dungeon entry tokens. After payment, you will receive tokens for entering private sessions.
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-md border-primary/20 p-8 shadow-[var(--shadow-card)]">
          {/* Pass Info Banner */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {SESSIONS_PER_PASS} Sessions Pass
            </h3>
            <p className="text-foreground text-lg">
              Minimum Payment: <span className="font-bold text-primary">${MIN_AMOUNT} USD</span>
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              You will receive entry tokens after payment confirmation
            </p>
          </div>

          {/* Crypto Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
            {cryptoOptions.map((crypto) => (
              <Button
                key={crypto.symbol}
                variant={selectedCrypto === crypto.symbol ? "default" : "outline"}
                className={`h-20 flex-col gap-2 ${
                  selectedCrypto === crypto.symbol
                    ? getButtonColorClass(crypto.color)
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedCrypto(crypto.symbol)}
              >
                <span className="text-2xl">{crypto.icon}</span>
                <span className="text-sm font-semibold">{crypto.symbol}</span>
              </Button>
            ))}
          </div>

          {/* Payment Form */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Amount in USD (Minimum ${MIN_AMOUNT})
              </label>
              <Input
                type="number"
                placeholder={`Enter amount (min $${MIN_AMOUNT})`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg h-12 bg-input border-border focus:border-primary"
              />
              {amount && !isValidAmount() && (
                <p className="text-red-500 text-sm mt-2">
                  Minimum payment is ${MIN_AMOUNT} USD
                </p>
              )}
            </div>

            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Pass Type:</span>
                <span className="font-bold text-foreground">
                  {SESSIONS_PER_PASS} Sessions Pass
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Entry Tokens You Will Receive:</span>
                <span className="font-bold text-primary">
                  {isValidAmount() ? SESSIONS_PER_PASS : "0"} Tokens
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Status:</span>
                <span
                  className={`font-bold ${
                    isValidAmount() ? "text-green-500" : "text-muted-foreground"
                  }`}
                >
                  {isValidAmount() ? "Valid for Processing" : "Awaiting Valid Payment"}
                </span>
              </div>
            </div>

            {/* Wallet Address Display */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Send {selectedCrypto} to:
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      cryptoOptions.find((c) => c.symbol === selectedCrypto)?.address || ""
                    );
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                >
                  {copied ? "Copied" : "Copy Address"}
                </Button>
              </div>
              <div className="bg-background p-3 rounded border break-all font-mono text-sm">
                {cryptoOptions.find((c) => c.symbol === selectedCrypto)?.address}
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Send your {selectedCrypto} to the address above. Tokens will be credited after confirmation.
              </p>

              <div className="bg-red-100 border border-red-400 text-red-700 rounded p-3 font-semibold">
                IMPORTANT: After making your payment, please email your payment receipt to{" "}
                <a
                  href="mailto:overturfzmichael@gmail.com"
                  className="underline"
                >
                  overturfzmichael@gmail.com
                </a>{" "}
                and{" "}
                <a href="mailto:Smke5211@gmail.com" className="underline">
                  Smke5211@gmail.com
                </a>{" "}
                for verification and token crediting.
              </div>

              {/* Contact Admin CTA */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-foreground mb-2">
                  Need more clarification or have questions?
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Message Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BDSPaymentSection;

