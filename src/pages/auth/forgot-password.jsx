import { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      return setError("Email requis");
    }

    setError(null);
    setLoading(true);

    try {
      await forgotPassword(email);
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background particles */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Main container */}
      <div className="w-full max-w-md">
        {/* Logo/Brand section */}
        <div 
          className="text-center mb-8"
          style={{
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none'
          }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300">
              S
            </div>
            <span className="text-2xl font-bold">SMC TECH</span>
          </div>
          <p className="text-muted-foreground">
            Réinitialisez votre mot de passe en quelques clics
          </p>
        </div>

        {/* Forgot Password Card */}
        <div
          className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 overflow-hidden"
          style={{
            animation: isVisible ? 'fadeInScale 0.6s ease-out 0.3s both' : 'none'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            {!sent ? (
              <>
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>

                <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Mot de passe oublié ?
                </h1>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div
                    style={{
                      animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
                    }}
                  >
                    <Input
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="vous@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={error}
                      className="transition-all duration-300 focus-within:scale-[1.02]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div
                    style={{
                      animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none'
                    }}
                  >
                    <Button 
                      disabled={loading}
                      className="w-full shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le lien de réinitialisation
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </>
                        )}
                      </span>
                    </Button>
                  </div>

                  {/* Back to login link */}
                  <div
                    className="text-center pt-4 border-t border-slate-200 dark:border-slate-800"
                    style={{
                      animation: isVisible ? 'fadeIn 0.6s ease-out 0.7s both' : 'none'
                    }}
                  >
                    <a 
                      className="text-sm text-primary font-semibold hover:underline hover:text-primary/80 transition-colors inline-flex items-center gap-1 group" 
                      href="/auth/login"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform">←</span>
                      Retour à la connexion
                    </a>
                  </div>
                </form>
              </>
            ) : (
              // Success message
              <div
                className="text-center"
                style={{
                  animation: 'fadeInScale 0.6s ease-out both'
                }}
              >
                {/* Success Icon */}
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  Email envoyé ! 📧
                </h2>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Si un compte existe avec l'adresse <span className="font-semibold text-foreground">{email}</span>, vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">💡</span>
                    <span>Vérifiez votre dossier spam si vous ne voyez pas l'email.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">⏱️</span>
                    <span>Le lien sera valide pendant 1 heure.</span>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <a 
                    className="text-sm text-primary font-semibold hover:underline hover:text-primary/80 transition-colors inline-flex items-center gap-1 group" 
                    href="/auth/login"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Retour à la connexion
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional help */}
        {!sent && (
          <div
            className="text-center mt-6 text-xs text-muted-foreground"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 0.8s both' : 'none'
            }}
          >
            <p>
              Besoin d'aide ?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contactez notre support
              </a>
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-25px) translateX(15px) scale(1.05);
          }
          66% {
            transform: translateY(15px) translateX(-15px) scale(0.95);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}