import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, X } from "lucide-react";

const STORAGE_KEY = "ww_cookie_consent_v1";

type Prefs = {
  necessary: true;
  analytics: boolean;
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

const applyConsent = (prefs: Prefs) => {
  // Non-essential scripts may only load after explicit consent.
  window.dispatchEvent(new CustomEvent("ww-cookie-consent", { detail: prefs }));
};

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [decided, setDecided] = useState(true);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    const existing = loadPrefs();
    if (existing) {
      setAnalytics(existing.analytics);
      applyConsent(existing);
      setDecided(true);
      return;
    }
    setDecided(false);
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setPanelHeight(showPrefs ? panelRef.current?.scrollHeight ?? 0 : 0);
  }, [showPrefs, analytics]);

  const commit = (a: boolean) => {
    const prefs: Prefs = {
      necessary: true,
      analytics: a,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* ignore */
    }
    applyConsent(prefs);
    setAnalytics(a);
    setDecided(true);
    setOpen(false);
    setShowPrefs(false);
  };

  if (!open) {
    if (!decided) return null;
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Cookievoorkeuren aanpassen"
        className="cookie-fab group fixed bottom-5 right-5 z-[60] w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 animate-fade-in"
      >
        <ShieldCheck size={18} className="transition-colors group-hover:text-[hsl(var(--accent-orange))]" />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookievoorkeuren"
      className="fixed z-[60] inset-x-0 bottom-0 px-[5vw] pb-5 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto sm:px-0 sm:pb-0 pointer-events-none"
    >
      <div
        className="cookie-glass pointer-events-auto w-full sm:w-[380px] mx-auto rounded-[22px] sm:rounded-2xl overflow-hidden animate-fade-up"
        style={{ animationDuration: "420ms" }}
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-full bg-[hsl(var(--accent-orange))]/12 border border-[hsl(var(--accent-orange))]/25 flex items-center justify-center">
              <ShieldCheck size={16} className="text-[hsl(var(--accent-orange))]" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-[0.95rem] font-semibold text-white">Uw privacy, uw keuze</h2>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/60">
                We gebruiken functionele cookies om de website goed te laten werken. Voor
                aanvullende cookies vragen we eerst uw toestemming.{" "}
                <Link
                  to="/privacybeleid"
                  className="text-white/80 underline decoration-[hsl(var(--accent-orange))]/50 underline-offset-2 hover:text-[hsl(var(--accent-orange-soft))] hover:decoration-[hsl(var(--accent-orange))]"
                >
                  Privacybeleid
                </Link>
              </p>
            </div>
            {decided && (
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Sluiten"
                className="shrink-0 -mr-1 -mt-1 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Preferences panel */}
          <div
            className="overflow-hidden transition-[height,opacity] duration-400 ease-out"
            style={{
              height: panelHeight,
              opacity: showPrefs ? 1 : 0,
              transitionDuration: "400ms",
            }}
            aria-hidden={!showPrefs}
          >
            <div ref={panelRef} className="pt-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] divide-y divide-white/10">
                <CookieRow
                  title="Noodzakelijk"
                  description="Altijd actief, noodzakelijk voor de werking van de website."
                  checked
                  disabled
                />
                <CookieRow
                  title="Analytisch"
                  description="Help ons begrijpen hoe bezoekers de website gebruiken."
                  checked={analytics}
                  onChange={setAnalytics}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {showPrefs ? (
              <>
                <button type="button" onClick={() => commit(false)} className="cookie-btn">
                  Weigeren
                </button>
                <button
                  type="button"
                  onClick={() => commit(analytics)}
                  className="cookie-btn col-span-2"
                >
                  Voorkeuren opslaan
                </button>
              </>
            ) : (
              <>
                <button type="button" onClick={() => commit(false)} className="cookie-btn">
                  Weigeren
                </button>
                <button
                  type="button"
                  onClick={() => setShowPrefs(true)}
                  className="cookie-btn"
                >
                  Voorkeuren
                </button>
                <button
                  type="button"
                  onClick={() => commit(true)}
                  className="cookie-btn cookie-btn-primary"
                >
                  Accepteren
                </button>
              </>
            )}
          </div>
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
      <p className="text-[0.8125rem] font-medium text-white">{title}</p>
      <p className="text-xs text-white/50 leading-relaxed mt-0.5">{description}</p>
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={title}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={`relative shrink-0 mt-0.5 w-10 h-6 rounded-full transition-colors ${
        checked ? "bg-[hsl(var(--accent-orange))]" : "bg-white/15"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);
