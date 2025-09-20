import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

const PaymentSection = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const cryptoOptions = [
    { 
      symbol: "BTC", 
      name: "Bitcoin", 
      color: "bitcoin", 
      icon: "₿",
      address: "1KpVE5RxQtCbE5NbCYSRdPTtYmurYDCHZi"
    },
    { 
      symbol: "ETH(ERC20)", 
      name: "ETH (ERC20)", 
      color: "ethereum", 
      icon: "Ξ",
      address: "0xe84636db9e149ad5c0322107825976b1d969206e"
    },
    { 
      symbol: "XRP", 
      name: "XRP", 
      color: "xrp", 
      icon: "◊",
      address: "rJn2zAPdFA193sixJwuFixRkYDUtx3apQh"
    },
    { 
      symbol: "SOL", 
      name: "Solana", 
      color: "solana", 
      icon: "◉",
      address: "FvFtAmTRtSEFkbDbqUpuU1oGHEye4T241V26bpoRZ7qo"
    },
  ];

  const getButtonColorClass = (color: string) => {
    switch (color) {
      case "bitcoin":
        return "bg-bitcoin hover:bg-bitcoin/80 text-bitcoin-foreground";
      case "ethereum":
        return "bg-ethereum hover:bg-ethereum/80 text-ethereum-foreground";
      case "xrp":
        return "bg-xrp hover:bg-xrp/80 text-xrp-foreground";
      case "solana":
        return "bg-solana hover:bg-solana/80 text-solana-foreground";
      default:
        return "bg-primary hover:bg-primary/80";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Choose Your Payment Method
          </h2>
          <p className="text-xl text-muted-foreground">
            Multiple cryptocurrencies accepted for maximum convenience
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-md border-primary/20 p-8 shadow-[var(--shadow-card)]">
          {/* Crypto Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Amount in {selectedCrypto}
              </label>
              <Input
                type="number"
                placeholder={`Enter ${selectedCrypto} amount`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg h-12 bg-input border-border focus:border-primary"
              />
            </div>

            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Token Price:</span>
                <span className="font-bold text-foreground">$0.50 per WLFI</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">You will receive:</span>
                <span className="font-bold text-foreground">
                  {amount ? (parseFloat(amount) / 0.50).toLocaleString() : "0"} WLFI
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Bonus ({amount && parseFloat(amount) >= 500 ? "70%" : "20%"}):
                </span>
                <span className="font-bold text-primary">
                  {amount
                    ? (
                        (parseFloat(amount) / 0.50) * (parseFloat(amount) >= 500 ? 0.7 : 0.2)
                      ).toLocaleString()
                    : "0"} WLFI
                </span>
              </div>
            </div>

            {/* Wallet Address Display */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Send {selectedCrypto} to:</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={async () => {
                    await navigator.clipboard.writeText(cryptoOptions.find(c => c.symbol === selectedCrypto)?.address || "");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                >
                  {copied ? "Copied" : "Copy Address"}
                </Button>
              </div>
              <div className="bg-background p-3 rounded border break-all font-mono text-sm">
                {cryptoOptions.find(c => c.symbol === selectedCrypto)?.address}
              </div>
                {selectedCrypto === "XRP" && (
                  <div className="mt-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded p-2 text-sm">
                    <strong>Tag/memo:</strong> 501220717
                  </div>
                )}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Send your {selectedCrypto} to the address above
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                * Tokens will be credited to your account after payment confirmation
              </p>
              <div className="bg-red-100 border border-red-400 text-red-700 rounded p-3 mb-2 font-semibold">
                IMPORTANT: After making your payment, please email your payment receipt to <a href="mailto:overturfzmichael@gmail.com" className="underline">overturfzmichael@gmail.com</a> and <a href="mailto:Smke5211@gmail.com" className="underline">Smke5211@gmail.com</a> for verification and token crediting.
              </div>
            </div>
          </div>
  </Card>

      </div>
    </section>
  );
};

export default PaymentSection;