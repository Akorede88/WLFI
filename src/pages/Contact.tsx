
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";


const Contact = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-ethereum rounded-full"></div>
            <span className="text-xl font-bold text-foreground">WLFI</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Contact Us</h1>
          <p className="text-muted-foreground">For any problem or inquiry, please call us:</p>
        </div>
        <Card className="bg-card/80 backdrop-blur-md border-primary/20 p-8 shadow-[var(--shadow-card)] text-center">
          <div className="text-2xl font-semibold text-primary mb-2">Customer Support</div>
          <div className="text-3xl font-bold text-foreground select-all break-all mb-4">+1 (929) 224-5503</div>
          <div className="text-muted-foreground">Available 24/7</div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
