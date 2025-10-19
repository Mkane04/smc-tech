import "../src/styles/global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Layout & Pages from new /src structure
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Services from "../src/pages/services";
import Projects from "../src/pages/projects";
import Blog from "../src/pages/blog";
import Contact from "../src/pages/contact";
import Login from "../src/pages/auth/login";
import Register from "../src/pages/auth/register";
import ForgotPassword from "../src/pages/auth/forgot-password";
import Dashboard from "../src/pages/dashboard";
import Profile from "../src/pages/profil/profil"; // ✅ Import de la page Profile
import { AuthProvider, useAuth } from "../src/context/AuthContext";

const queryClient = new QueryClient();

// ✅ PrivateRoute mis à jour avec gestion du loading
function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, loading } = useAuth();
  
  // Afficher un loader pendant la vérification de l'authentification
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Rediriger vers login si pas authentifié
  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
  
  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                
                {/* Dashboard principal */}
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                
                {/* ✅ Route Profile ajoutée */}
                <Route
                  path="/dashboard/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);