import { createContext, useContext, useEffect, useMemo, useState } from "react";
import API_URL from "../config/api";

const AuthContext = createContext({
  user: null,
  loading: true,
  isAuthenticated: false,
  login: async (_email, _password) => {},
  register: async (_data) => {},
  logout: () => {},
  forgotPassword: async (_email) => {},
  resetPassword: async (_token, _password) => {},
  getAuthHeaders: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérifier si l'utilisateur est connecté au chargement
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }

    // Hydrate theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark") document.documentElement.classList.add("dark");
  }, []);

  // Récupérer les infos de l'utilisateur connecté
  const fetchUser = async (token) => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        // Token invalide, déconnecter
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Fetch user error:", error);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  // Inscription
  const register = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de l'inscription");
    }

    // Sauvegarder le token
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  // Connexion
  const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de la connexion");
    }

    // Sauvegarder le token
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  // Déconnexion
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  // Mot de passe oublié
  const forgotPassword = async (email) => {
    const response = await fetch(`${API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de l'envoi de l'email");
    }

    return data;
  };

  // Réinitialiser le mot de passe
  const resetPassword = async (token, password) => {
    const response = await fetch(`${API_URL}/auth/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de la réinitialisation");
    }

    return data;
  };

  // Récupérer le token pour les requêtes API
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    };
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      forgotPassword,
      resetPassword,
      getAuthHeaders,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);