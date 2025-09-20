import ConnectWallet from "@/components/ConnectWallet";

const Withdraw = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-foreground">Withdraw</h1>
        <p className="text-center text-muted-foreground mb-6">Connect your wallet to withdraw your WLFI tokens.</p>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Withdraw;