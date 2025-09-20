import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthSession } from "@/lib/useAuthSession";
import { supabase } from "@/lib/supabaseClient";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const session = useAuthSession();
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-ethereum rounded-full"></div>
            <span className="text-xl font-bold text-foreground">WLFI</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#presale" className="text-foreground hover:text-primary transition-colors">
              Presale
            </a>
            <a href="#tokenomics" className="text-foreground hover:text-primary transition-colors">
              Tokenomics
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground my-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {!session ? (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/signin">
                <Button variant="outline" className="text-foreground border-border hover:bg-accent">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-primary to-ethereum hover:shadow-[var(--shadow-neon)]">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button onClick={handleLogout} variant="outline" className="text-foreground border-border hover:bg-accent">
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-2 bg-background/95 rounded shadow-lg p-4 animate-fade-in-down">
            <a
              href="#presale"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Presale
            </a>
            <a
              href="#tokenomics"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Tokenomics
            </a>
            <a
              href="#faq"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </a>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            {!session ? (
              <>
                <Link to="/signin" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full mt-2 text-foreground border-border hover:bg-accent">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-ethereum hover:shadow-[var(--shadow-neon)] mt-1">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Button onClick={() => { setMobileOpen(false); handleLogout(); }} variant="outline" className="w-full mt-2 text-foreground border-border hover:bg-accent">
                Logout
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;