import { useState } from "react";

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://facebook.com/smctech",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: "https://twitter.com/smctech",
      color: "hover:bg-black dark:hover:bg-white dark:hover:text-black",
      bgColor: "bg-black/10 dark:bg-white/10"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://linkedin.com/company/smctech",
      color: "hover:bg-blue-700",
      bgColor: "bg-blue-700/10"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://www.instagram.com/smc_tech1?igsh=MXZuNWEzeGxwNmNwbg==",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: "https://youtube.com/@smctech",
      color: "hover:bg-red-600",
      bgColor: "bg-red-600/10"
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: "https://whatsapp.com/channel/0029VbBqOQPFcow2hep63Z2e",
      color: "hover:bg-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: "https://www.tiktok.com/@smc_tech?_t=ZM-90M4oSn0GFQ&_r=1",
      color: "hover:bg-black dark:hover:bg-white dark:hover:text-black",
      bgColor: "bg-black/10 dark:bg-white/10"
    }
  ];

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative container-px py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Brand section */}
        <div className="space-y-4 group">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground grid place-items-center font-bold text-lg transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
              S
            </div>
            <span className="font-bold tracking-tight text-lg">SMC TECH</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Former. Créer. Transformer. Solutions et programmes pour accélérer l'innovation.
          </p>
        </div>

        {/* Navigation section */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "À propos", url: "/about" },
              { label: "Services", url: "/services" },
              { label: "Projets", url: "/projects" },
              { label: "Blog", url: "/blog" },
              { label: "Contact", url: "/contact" }
            ].map((link) => (
              <li key={link.label}>
                <a 
                  href={link.url} 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group/link hover:translate-x-1"
                >
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social section */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Suivez-nous</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Rejoignez notre communauté et restez informé de nos dernières actualités.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`
                  relative w-11 h-11 rounded-lg border border-border
                  flex items-center justify-center
                  text-muted-foreground
                  ${social.color}
                  transition-all duration-300
                  hover:scale-110 hover:shadow-lg hover:-translate-y-1
                  hover:text-white hover:border-transparent
                  active:scale-95
                  group/social
                `}
                onMouseEnter={() => setHoveredSocial(idx)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  animation: `fadeInScale 0.4s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Background glow effect */}
                <div className={`
                  absolute inset-0 rounded-lg ${social.bgColor}
                  opacity-0 group-hover/social:opacity-100
                  transition-opacity duration-300 blur-sm
                `} />
                
                {/* Icon */}
                <div className="relative z-10 transition-transform group-hover/social:scale-110">
                  {social.icon}
                </div>

                {/* Tooltip */}
                <div className={`
                  absolute -top-10 left-1/2 -translate-x-1/2
                  px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded
                  whitespace-nowrap pointer-events-none
                  transition-all duration-300
                  ${hoveredSocial === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}>
                  {social.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-border">
        <div className="container-px py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} SMC TECH.</span>
              <span className="hidden sm:inline">•</span>
              <span>Tous droits réservés.</span>
            </div>
            <div className="flex gap-6 text-xs">
              <a href="/privacy" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </footer>
  );
}