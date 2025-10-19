import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Mission",
      desc: "Former et connecter des talents aux projets d'avenir.",
      icon: "🎯",
      color: "from-blue-500/20 to-blue-600/20",
      delay: "0.2s",
    },
    {
      title: "Vision",
      desc: "Un écosystème où l'innovation est inclusive et durable.",
      icon: "🚀",
      color: "from-purple-500/20 to-purple-600/20",
      delay: "0.3s",
    },
    {
      title: "Valeurs",
      desc: "Excellence, collaboration, impact.",
      icon: "⭐",
      color: "from-orange-500/20 to-orange-600/20",
      delay: "0.4s",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Amadou Diallo",
      role: "CEO & Fondateur",
      image: "/images/team/membre1.jpg",
    },
    {
      id: 2,
      name: "Fatou Sall",
      role: "CTO",
      image: "/images/team/membre2.jpg",
    },
    {
      id: 3,
      name: "Moussa Kane",
      role: "Lead Developer",
      image: "/images/team/membre3.jpg",
    },
    {
      id: 4,
      name: "Aïssatou Ndiaye",
      role: "Head of Design",
      image: "/images/team/membre4.jpg",
    },
    {
      id: 5,
      name: "Ibrahima Sarr",
      role: "Marketing Manager",
      image: "/images/team/membre5.jpg",
    },
    {
      id: 6,
      name: "Marième Sy",
      role: "Community Manager",
      image: "/images/team/membre6.jpg",
    },
  ];

  const duplicatedTeam = [...teamMembers, ...teamMembers];

  return (
    <div className="relative">
      {/* Animated background */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
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
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-px py-14 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div
            className="inline-block"
            style={{
              animation: isVisible
                ? "fadeInScale 0.6s ease-out 0.1s both"
                : "none",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 backdrop-blur-sm">
              <span className="animate-pulse">●</span>
              
            </div>
          </div>

          <h1
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              animation: isVisible
                ? "fadeInUp 0.6s ease-out 0.2s both"
                : "none",
            }}
          >
            À propos
          </h1>

          <p
            className="text-xl text-muted-foreground leading-relaxed"
            style={{
              animation: isVisible
                ? "fadeInUp 0.6s ease-out 0.3s both"
                : "none",
            }}
          >
            Notre mission : rendre la technologie accessible et créatrice
            d'opportunités.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((item, idx) => (
            <div
              key={idx}
              style={{
                animation: isVisible
                  ? `fadeInScale 0.6s ease-out ${item.delay} both`
                  : "none",
              }}
            >
              <Card className="p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer relative overflow-hidden h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* === SECTION ÉQUIPE (TEMPORAIREMENT MASQUÉE) === */}
        {/*
        <div
          className="space-y-8"
          style={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.5s both" : "none",
          }}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Notre équipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des talents passionnés qui travaillent ensemble pour construire l'avenir de la tech
            </p>
          </div>

          <div className="relative overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex gap-8 animate-scroll-left items-center">
              {duplicatedTeam.map((member, idx) => (
                <div key={`${member.id}-${idx}`} className="flex-shrink-0 group">
                  <div className="flex flex-col items-center gap-4 cursor-pointer">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 group-hover:from-primary/50 group-hover:to-primary/30 transition-all duration-500 animate-pulse-slow" />
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white/20 dark:border-slate-700/50 shadow-2xl group-hover:border-primary/50 transition-all duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=ff6b35&color=fff&bold=true`;
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-center space-y-1 group-hover:scale-105 transition-transform duration-300">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary/80 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}

        {/* CTA */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.6s both" : "none",
          }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 relative overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-2xl font-bold">Rejoignez notre communauté</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ensemble, construisons l'avenir de la technologie en Afrique et
                au-delà. Que vous soyez développeur, entrepreneur ou passionné
                de tech, il y a une place pour vous.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300"
                >
                  Nous contacter →
                </button>

                <button
                  onClick={() => navigate("/projects")}
                  className="px-6 py-3 border border-primary/30 rounded-lg font-medium hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Voir nos projets
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
