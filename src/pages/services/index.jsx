import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const items = [
    {
      title: "Formation",
      desc: "Bootcamps et ateliers pour monter en compétence.",
      icon: "📚",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      features: ["Bootcamps intensifs", "Ateliers pratiques", "Certifications"],
      delay: "0.1s"
    },
    {
      title: "Incubation",
      desc: "Coaching, mentors et réseau pour lancer votre startup.",
      icon: "🚀",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      features: ["Mentorship", "Réseau pro", "Financement"],
      delay: "0.2s"
    },
    {
      title: "Événements",
      desc: "Hackathons, meetups et conférences inspirantes.",
      icon: "🎯",
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "orange",
      features: ["Hackathons", "Meetups", "Conférences"],
      delay: "0.3s"
    },
    {
      title: "Projets technologiques",
      desc: "Solutions logicielles sur-mesure et R&D.",
      icon: "💻",
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      features: ["Développement", "Consulting", "R&D"],
      delay: "0.4s"
    },
  ];

  return (
    <div className="relative">
      {/* Animated background */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <section className="container-px py-14 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div
            className="inline-block"
            style={{
              animation: isVisible ? 'fadeInScale 0.6s ease-out 0.1s both' : 'none'
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 backdrop-blur-sm">
              
              
            </div>
          </div>

          <h1
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
            }}
          >
            Nos services
          </h1>

          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
            }}
          >
            Des solutions complètes pour accompagner votre parcours technologique, de la formation à la réalisation de vos projets.
          </p>

          {/* Decorative line */}
          <div
            className="flex items-center justify-center gap-2"
            style={{
              animation: isVisible ? 'fadeIn 0.8s ease-out 0.4s both' : 'none'
            }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.title}
              style={{
                animation: isVisible ? `fadeInScale 0.6s ease-out ${item.delay} both` : 'none'
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer relative overflow-hidden h-full">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Animated corner decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 space-y-6">
                  {/* Icon with animation */}
                  <div className="flex items-center justify-between">
                    <div className="text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">→</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.desc}
                  </p>

                  {/* Features tags */}
                  <div className={`flex flex-wrap gap-2 transition-all duration-500 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {item.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        style={{
                          animation: hoveredIndex === idx ? `fadeInUp 0.3s ease-out ${i * 0.1}s both` : 'none'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <button className="text-sm font-medium text-primary flex items-center gap-2 group/btn">
                      <span>Découvrir</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>

                {/* Number indicator */}
                <div className="absolute bottom-4 left-4 text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  0{idx + 1}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none'
          }}
        >
          <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Animated pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }} />
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl font-bold">Prêt à démarrer votre projet ?</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner dans votre transformation digitale.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-300 group/btn">
                  <span className="flex items-center gap-2">
                    Contactez-nous
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-primary/30 rounded-lg font-medium hover:bg-primary/10 hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-300">
                  Voir nos réalisations
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

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
            transform: scale(0.9) translateY(20px);
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