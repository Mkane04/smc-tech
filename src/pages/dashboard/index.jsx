import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/Card";
import Button from "../../components/Button";
import API_URL from "../../config/api";

export default function Dashboard() {
  const { user, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer les activités récentes
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`${API_URL}/activities?limit=5`, {
          headers: getAuthHeaders(),
        });
        
        if (response.ok) {
          const data = await response.json();
          setActivities(data.activities);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des activités:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [getAuthHeaders]);

  // Fonction pour obtenir l'icône selon le type d'activité
  const getActivityIcon = (type) => {
    const icons = {
      'register': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      'login': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      ),
      'profile_update': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      'project_created': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    };
    
    return icons[type] || icons['profile_update'];
  };

  // Fonction pour obtenir la couleur selon le type
  const getActivityColor = (type) => {
    const colors = {
      'register': 'bg-green-500/10 text-green-500',
      'login': 'bg-blue-500/10 text-blue-500',
      'profile_update': 'bg-primary/10 text-primary',
      'project_created': 'bg-purple-500/10 text-purple-500',
    };
    
    return colors[type] || colors['profile_update'];
  };

  // Formater la date relative
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "À l'instant";
    if (diffMins < 60) return `Il y a ${diffMins} minute${diffMins > 1 ? 's' : ''}`;
    if (diffHours < 24) return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  };

  return (
    <section className="container-px py-14 space-y-8">
      {/* Header avec message de bienvenue */}
      <div>
        <h1 className="text-3xl font-bold">
          Bienvenue{user?.name ? `, ${user.name}` : user?.email ? `, ${user.email}` : ""} 👋
        </h1>
        <p className="mt-2 text-muted-foreground">Accès rapide à vos fonctionnalités</p>
      </div>

      {/* Cartes d'accès rapide */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Carte Profil */}
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Profil</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Gérer vos informations personnelles et paramètres de compte
          </p>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
            onClick={() => navigate("/dashboard/profile")}
          >
            Ouvrir
          </Button>
        </Card>

        {/* Carte Projets */}
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Projets</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Voir et gérer tous vos projets en cours et terminés
          </p>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
            onClick={() => navigate("/dashboard/projects")}
          >
            Ouvrir
          </Button>
        </Card>

        {/* Carte Notifications */}
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Notifications</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Consulter vos dernières notifications et mises à jour
          </p>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-green-500 group-hover:text-white transition-colors"
            onClick={() => navigate("/dashboard/notifications")}
          >
            Ouvrir
          </Button>
        </Card>
      </div>

      {/* Section activités récentes */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Activités récentes</h3>
          {activities.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/dashboard/activities")}
            >
              Voir tout
            </Button>
          )}
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : activities.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Aucune activité récente</p>
            <p className="text-sm mt-1">Vos actions seront affichées ici</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`flex items-center gap-4 ${index !== activities.length - 1 ? 'pb-4 border-b' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  {activity.description && (
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatRelativeTime(activity.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}