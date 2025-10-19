import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Plateforme d'inscription",
      description: "Application web pour l'apprentissage en ligne avec cours vidéo, quiz et certificats.",
      image: "/images/projects/elearning.jpg",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "En cours",
      link: "#elearning"
    },
    {
      id: 2,
      title: "Application de Gestion Agricole",
      description: "Système de suivi des cultures et de gestion des récoltes pour les agriculteurs.",
      image: "/images/projects/agriculture.jpg",
      category: "Mobile",
      technologies: ["React Native", "Firebase"],
      status: "En cours",
      link: "#agriculture"
    },
    {
      id: 3,
      title: "Télé medecine",
      description: "Tableau de bord pour visualiser les KPIs et statistiques en temps réel.",
      image: "/images/projects/dashboard.jpg",
      category: "Web",
      technologies: ["Vue.js", "D3.js", "Express"],
      status: "En cours",
      link: "#dashboard"
    },
    {
      id: 4,
      title: "App de Livraison",
      description: "Application mobile de commande et livraison de repas avec tracking en temps réel.",
      image: "/images/projects/app.jpg",
      category: "Mobile",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      status: "En cours",
      link: "#delivery"
    },
  ];

  // 💬 Exemple de projets à rajouter plus tard :
  /*
  {
    id: 5,
    title: "Système de Paiement Mobile",
    description: "Solution de paiement mobile sécurisé pour les commerçants locaux.",
    image: "/images/projects/payment.jpg",
    category: "FinTech",
    technologies: ["React", "Stripe", "Node.js"],
    status: "Terminé",
    link: "#payment"
  },
  {
    id: 6,
    title: "Réseau Social Professionnel",
    description: "Plateforme de networking pour les professionnels de la tech en Afrique.",
    image: "/images/projects/social.jpg",
    category: "Web",
    technologies: ["Next.js", "PostgreSQL", "Redis"],
    status: "En cours",
    link: "#social"
  }
  */

  const categories = ["all", "Web", "Mobile", "FinTech"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

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
            Nos Projets
          </h1>

          <p
            className="text-xl text-muted-foreground leading-relaxed"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
            }}
          >
            Découvrez les solutions innovantes que nous somme entraint de  développées pour transformer des idées en réalité.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105'
              }`}
            >
              {cat === "all" ? "Tous" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              style={{
                animation: isVisible ? `fadeInScale 0.6s ease-out ${0.6 + idx * 0.1}s both` : 'none'
              }}
            >
              <Card className="group relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-orange-100 to-white dark:from-slate-800 dark:to-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=600&background=ff6b35&color=fff&bold=true`;
                    }}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg bg-yellow-500 text-black">
                    {project.status}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold shadow-lg">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
