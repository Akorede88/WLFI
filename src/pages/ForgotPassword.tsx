import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "../lib/supabaseClient";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      // Use your local dev server URL for redirect
      redirectTo: window.location.origin + "/reset-password"
    });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset link sent! Check your email.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-ethereum rounded-full"></div>
            <span className="text-xl font-bold text-foreground">WLFI</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password</h1>
          <p className="text-muted-foreground">Enter your email to reset your password</p>
        </div>

        <Card className="bg-card/80 backdrop-blur-md border-primary/20 p-8 shadow-[var(--shadow-card)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border focus:border-primary"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-ethereum hover:shadow-[var(--shadow-neon)] h-12 text-lg font-semibold"
            >
              Send Reset Link
            </Button>
            {message && (
              <div className="mt-2 text-center text-sm text-primary">
                {message}
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Remembered your password?{' '}
              <Link to="/signin" className="text-primary hover:underline font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
