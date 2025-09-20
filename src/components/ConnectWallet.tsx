import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";


function ConnectWallet() {
  const [wallet, setWallet] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Save to Supabase
    const { error } = await supabase
      .from("withdrawals")
      .insert([{ wallet_address: wallet }]);
    if (error) {
      setError("Failed to save wallet address. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Card className="max-w-md mx-auto my-8 p-6">
      <h3 className="text-2xl font-bold mb-4">Connect Your Wallet</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your wallet address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Submit Wallet
        </Button>
        {submitted && (
          <div className="text-green-600 mt-2">
            Wallet address submitted! You will receive your coins here.
          </div>
        )}
        {error && (
          <div className="text-red-600 mt-2">
            {error}
          </div>
        )}
      </form>
    </Card>
  );
}

export default ConnectWallet;
