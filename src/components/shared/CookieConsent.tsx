import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, Check, ChevronDown } from "lucide-react";

const STORAGE_KEY = "ww_cookie_consent_v1";

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const loadPrefs = (): Prefs | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Prefs;
  } catch {
    return null;
  }
};

const savePrefs = (prefs: Prefs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = loadPrefs();
    if (!existing) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const commit = (a: boolean, m: boolean) => {
    savePrefs({
      necessary: true,
      analytics: a,
      marketing: m,
      timestamp: new Date().toISOString(),
    });
    setVisible(false);
  };

  const acceptAll = () => commit(true, true);
  const rejectAll = () => commit(false, false);
  const saveChoices = () => commit(analytics, marketing);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie voorkeuren"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div
        className="pointer-events-auto mx-auto max-w-3xl rounded-2xl glass-strong overflow-hidden animate-fade-up"
        style={{ animationDuration: "500ms" }}
      >
        {/* Header row */}
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="hidden sm:flex shrink-0 w-11 h-11 rounded-full bg-[hsl(var(--accent-orange))]/12 items-center justify-center">
            <Cookie size={20} className="text-[hsl(var(--accent-orange))]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-[0.95rem] sm:text-base font-semibold text-foreground">
                Uw privacy, uw keuze
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deze website gebruikt functionele cookies om goed te werken, en
              optioneel analytische cookies om de site te verbeteren. U bepaalt
              zelf wat u toestaat. Lees meer in ons{" "}
              <Link
                to="/privacybeleid"
                className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                privacybeleid
              </Link>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={rejectAll}
            aria-label="Sluiten en alleen noodzakelijke cookies toestaan"
            className="shrink-0 -mr-1 -mt-1 w-8 h-8 rounded-full flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-black/5 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Details */}
        {showDetails && (
          <div className="px-5 sm:px-6 pb-2 animate-fade-in">
            <div className="rounded-xl bg-white/50 ring-1 ring-black/5 divide-y divide-black/5">
              <CookieRow
                title="Noodzakelijk"
                description="Vereist voor basisfunctionaliteit zoals navigatie en beveiliging. Altijd actief."
                checked
                disabled
              />
              <CookieRow
                title="Analytisch"
                description="Anonieme statistieken zodat we de website kunnen verbeteren."
                checked={analytics}
                onChange={setAnalytics}
              />
              <CookieRow
                title="Marketing"
                description="Voor gepersonaliseerde content en advertenties op andere websites."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 flex flex-col-reverse sm:flex-row sm:items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors sm:mr-auto"
          >
            {showDetails ? "Details verbergen" : "Voorkeuren instellen"}
            <ChevronDown
              size={14}
              className={`transition-transform ${showDetails ? "rotate-180" : ""}`}
            />
          </button>

          {showDetails ? (
            <button
              type="button"
              onClick={saveChoices}
              className="inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-full text-sm font-medium border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-black/[0.03] transition-colors"
            >
              Keuze opslaan
            </button>
          ) : (
            <button
              type="button"
              onClick={rejectAll}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-black/[0.03] transition-colors"
            >
              Alleen noodzakelijk
            </button>
          )}

          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-full text-sm font-semibold bg-[hsl(var(--accent-orange))] text-white shadow-[0_10px_30px_-12px_hsl(var(--accent-orange)/0.6)] hover:brightness-[1.05] transition-all"
          >
            <Check size={14} strokeWidth={3} />
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
};

const CookieRow = ({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) => (
  <div className="flex items-start gap-3 p-3.5">
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
        {description}
      </p>
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={title}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={`relative shrink-0 mt-1 w-10 h-6 rounded-full transition-colors ${
        checked
          ? "bg-[hsl(var(--accent-orange))]"
          : "bg-black/15"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);
