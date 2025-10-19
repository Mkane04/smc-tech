import { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";
import { email as emailRule, required } from "../../utils/validators";

export default function Login() {
  const { login } = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validate = () => {
    const errs = {};
    const emailErr = emailRule()(values.email);
    if (emailErr) errs.email = emailErr;
    const passErr = required("Mot de passe requis")(values.password);
    if (passErr) errs.password = passErr;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await login(values.email, values.password);
      window.location.assign("/dashboard");
    } catch (e) {
      alert(e.message);
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
            Bienvenue ! Connectez-vous à votre compte
          </p>
        </div>

        {/* Login Card */}
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
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Connexion
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              Accédez à votre espace personnel
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
                }}
              >
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="vous@exemple.com"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  error={errors.email}
                  className="transition-all duration-300 focus-within:scale-[1.02]"
                />
              </div>

              {/* Password Input */}
              <div
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
                }}
              >
                <Input
                  name="password"
                  type="password"
                  label="Mot de passe"
                  placeholder="••••••••"
                  value={values.password}
                  onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
                  error={errors.password}
                  className="transition-all duration-300 focus-within:scale-[1.02]"
                />
              </div>

              {/* Forgot Password Link */}
              <div
                className="flex items-center justify-between"
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none'
                }}
              >
                <a 
                  className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors inline-flex items-center gap-1 group" 
                  href="/auth/forgot-password"
                >
                  Mot de passe oublié ?
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Submit Button */}
              <div
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 0.7s both' : 'none'
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
                        Connexion en cours...
                      </>
                    ) : (
                      <>
                        Se connecter
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </span>
                </Button>
              </div>

              {/* Register Link */}
              <div
                className="text-center pt-4 border-t border-slate-200 dark:border-slate-800"
                style={{
                  animation: isVisible ? 'fadeIn 0.6s ease-out 0.8s both' : 'none'
                }}
              >
                <p className="text-sm text-muted-foreground">
                  Pas encore de compte ?{" "}
                  <a 
                    className="text-primary font-semibold hover:underline hover:text-primary/80 transition-colors" 
                    href="/auth/register"
                  >
                    Inscrivez-vous gratuitement
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Additional info */}
        <div
          className="text-center mt-6 text-xs text-muted-foreground"
          style={{
            animation: isVisible ? 'fadeIn 0.6s ease-out 0.9s both' : 'none'
          }}
        >
          <p>
            En vous connectant, vous acceptez nos{" "}
            <a href="/terms" className="text-primary hover:underline">
              conditions d'utilisation
            </a>
          </p>
        </div>
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