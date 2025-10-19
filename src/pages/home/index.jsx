import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
    
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />
        
        <div className="container-px py-20 lg:py-28 grid md:grid-cols-2 gap-10 items-center pb-8">
          <div className="space-y-6">
            <div
              className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 backdrop-blur-sm"
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none'
              }}
            >
              Startup tech • 
            </div>

            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
              }}
            >
              Former. Créer.{" "}
              <span className="text-primary inline-block hover:scale-110 transition-transform duration-300 cursor-default">
                Transformer.
              </span>
            </h1>

            <p
              className="text-muted-foreground max-w-prose text-lg"
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
              }}
            >
              SMC TECH accompagne les talents et les organisations à travers la formation,
              l'incubation et la création de projets technologiques à fort impact.
            </p>

            <div
              className="flex flex-wrap gap-3"
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.7s both' : 'none'
              }}
            >
              <Button
                onClick={() => navigate("/about")}
                className="shadow-md hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Découvrir
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>

              <Button variant="outline" className="hover:scale-105 active:scale-95 transition-all duration-300">
                Nous rejoindre
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Formation", desc: "Programmes intensifs pour accélérer votre carrière tech.", delay: "0.2s" },
                { title: "Incubation", desc: "Accompagnement de startups, mentors et réseau.", delay: "0.3s" },
                { title: "Événements", desc: "Hackathons, meetups et conférences inspirantes.", delay: "0.4s" },
                { title: "Projets", desc: "Solutions numériques et R&D pour l'innovation.", delay: "0.5s" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    animation: isVisible ? `fadeInScale 0.6s ease-out ${item.delay} both` : 'none'
                  }}
                >
                  <Card className="p-6 group hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />
                    <div className="relative z-10">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110">
                      <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">→</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Presentation / Stats Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background with gradient - adapté au mode clair/sombre */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="container-px relative z-10">
          <div 
            className="text-center mb-12"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
            }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Notre impact en chiffres
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

        
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Stat 
              kpi="+200" 
              label="Talents formés" 
              delay="0.3s" 
              isVisible={isVisible} 
            />
            <Stat 
              kpi="+10" 
              label="Etudiants accompagnées" 
              delay="0.4s" 
              isVisible={isVisible} 
            />
            <Stat 
              kpi="+2" 
              label="Événements organisés" 
              delay="0.5s" 
              isVisible={isVisible} 
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
          }
          66% {
            transform: translateY(20px) translateX(-20px) scale(0.9);
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
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

function Stat({ kpi, label, delay, isVisible }) {
  return (
    <div
      className="relative text-center group cursor-pointer"
      style={{
        animation: isVisible ? `countUp 0.8s ease-out ${delay} both` : 'none'
      }}
    >
      {/* Card background */}
      <div className="relative p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-slate-800/50 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 rounded-2xl transition-all duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 mb-3">
            {kpi}
          </div>
          <div className="text-sm lg:text-base text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors font-medium">
            {label}
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}