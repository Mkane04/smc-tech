import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projets" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    if (el.classList.contains("dark")) {
      el.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      el.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-px">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-bold shadow-sm animate-float">S</div>
            <span className="font-bold tracking-tight">SMC TECH</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Basculer le thème"
              className="btn-outline h-9 w-9 rounded-md grid place-items-center"
              onClick={toggleDark}
              title="Mode clair/sombre"
            >
              {dark ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a9 9 0 11-10.63-10.6 1 1 0 00.89 1.45 7 7 0 109.49 9.49 1 1 0 001.45.89z"/></svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.73 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
              )}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="hidden sm:block text-sm text-muted-foreground">{user?.email}</span>
                <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>Dashboard</Button>
                <Button size="sm" onClick={() => { logout(); navigate("/"); }}>Déconnexion</Button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => navigate("/auth/login")}>Connexion</Button>
                <Button size="sm" onClick={() => navigate("/auth/register")}>Inscription</Button>
              </div>
            )}

            <button className="md:hidden h-9 w-9 rounded-md border border-border" onClick={() => setOpen((o) => !o)}>
              <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border">
          <div className="container-px py-3 space-y-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => `block py-1 ${isActive ? "text-primary" : "text-foreground"}`}>
                {l.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {isAuthenticated ? (
                <>
                  <Button variant="outline" size="sm" onClick={() => { setOpen(false); navigate("/dashboard"); }}>Dashboard</Button>
                  <Button size="sm" onClick={() => { logout(); setOpen(false); navigate("/"); }}>Déconnexion</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => { setOpen(false); navigate("/auth/login"); }}>Connexion</Button>
                  <Button size="sm" onClick={() => { setOpen(false); navigate("/auth/register"); }}>Inscription</Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
