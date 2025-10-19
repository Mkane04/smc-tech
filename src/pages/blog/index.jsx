import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Articles d'actualité
  const posts = [
    {
      id: 1,
      title: "🎉 SMC TECH rejoint Liberté Center !",
      excerpt: "Nous sommes fiers d'annoncer notre intégration au programme d'incubation de Liberté Center, un acteur majeur de l'écosystème tech en Afrique.",
      image: "/images/blog/liberte-center.jpg", 
      date: "26 Septembre 2025",
      category: "Annonce",
      featured: true,
      link: "https://www.facebook.com/share/p/17TBEpacGq/"
    },
    {/*pause
    {
      id: 2,
      title: "Lancement de notre programme de formation 2025",
      excerpt: "Découvrez notre nouveau programme intensif de développement web et mobile avec des experts du secteur.",
      image: "/images/blog/formation.jpg",
      date: "10 Octobre 2025",
      category: "Formation",
      featured: false,
      link: "#formation"
    },
    {
      id: 3,
      title: "Hackathon SMC TECH : Les inscriptions sont ouvertes",
      excerpt: "Participez à notre hackathon annuel et gagnez des prix incroyables tout en résolvant des défis tech.",
      image: "/images/blog/hackathon.jpg",
      date: "5 Octobre 2025",
      category: "Événement",
      featured: false,
      link: "#hackathon"
    },
    {
      id: 4,
      title: "Success Story : De l'idée au lancement en 3 mois",
      excerpt: "Rencontrez les fondateurs de StartupX qui ont transformé leur idée en application avec notre accompagnement.",
      image: "/images/blog/success.jpg",
      date: "1 Octobre 2025",
      category: "Success Story",
      featured: false,
      link: "#success"
    } */}
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
              <span className="animate-pulse">●</span>
              
            </div>
          </div>

          <h1
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
            }}
          >
            Actualités
          </h1>

          <p
            className="text-xl text-muted-foreground leading-relaxed"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
            }}
          >
            Restez informé des dernières nouvelles, événements et réussites de SMC TECH
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

        {/* Featured Article - Liberté Center */}
        <div
          className="max-w-5xl mx-auto"
          style={{
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
          }}
        >
          <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer relative">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-auto overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 dark:from-slate-800 dark:to-slate-700">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Image de secours
                    e.target.src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop';
                  }}
                />
                {/* Badge Featured */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                  🎉 NOUVEAUTÉ
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {posts[0].category}
                  </span>
                  <span className="text-muted-foreground">{posts[0].date}</span>
                </div>

                <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {posts[0].excerpt}
                </p>

                <div className="pt-4">
                  <a
                    href={posts[0].link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 group/btn"
                  >
                    Lire l'article complet
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none'
            }}
          >
            Autres actualités
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, idx) => (
              <article
                key={post.id}
                style={{
                  animation: isVisible ? `fadeInScale 0.6s ease-out ${0.7 + idx * 0.1}s both` : 'none'
                }}
              >
                <Card className="overflow-hidden group hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-orange-100 to-white dark:from-slate-800 dark:to-slate-700">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
     
                        {/*a modifier*/} e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.title)}&size=400&background=ff6b35&color=fff&bold=true`;
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col space-y-3">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>

                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <a
                      href={post.link}
                      className="text-primary text-sm font-medium inline-flex items-center gap-1 group/link hover:gap-2 transition-all"
                    >
                      Lire plus
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            animation: isVisible ? 'fadeInUp 0.8s ease-out 1s both' : 'none'
          }}
        >
          <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }} />
            </div>

            <div className="relative z-10 text-center space-y-6">
              <div className="text-4xl mb-4">📬</div>
              <h3 className="text-3xl font-bold">Restez informé !</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir nos dernières actualités, événements et opportunités.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-300 whitespace-nowrap">
                  S'abonner
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