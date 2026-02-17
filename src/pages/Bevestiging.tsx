import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const Bevestiging = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-blue-dark/50" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-vibrant/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-electric/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-lg w-full">
        <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-10 text-center">
          {/* Success icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-electric/15 backdrop-blur-sm border border-blue-electric/20 flex items-center justify-center animate-fade-in">
              <CheckCircle className="w-10 h-10 text-blue-electric" />
            </div>
          </div>

          <h1 className="text-display-sm font-light text-foreground mb-4 animate-fade-in-up">
            Bedankt voor je{" "}
            <span className="font-display italic text-gradient">aanvraag!</span>
          </h1>

          <p className="text-body-lg text-muted-foreground mb-10 animate-fade-in-up stagger-1">
            Ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op.
            Meestal binnen 24 uur.
          </p>

          <div className="animate-fade-in-up stagger-2">
            <Link to="/">
              <LiquidButton size="xl">
                <ArrowLeft className="w-4 h-4" />
                Terug naar home
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bevestiging;
