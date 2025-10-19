import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import API_URL from "../../config/api";

export default function Profile() {
  const { user, getAuthHeaders, refreshUser } = useAuth(); // ajoute refreshUser si ton contexte le supporte
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  // Charger les infos du user au montage
  useEffect(() => {
    if (user) {
      setValues({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        bio: user.bio || "",
        location: user.location || "",
      });
    }
  }, [user]);

  // ✅ Mise à jour des infos du profil
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${API_URL}/users/update`, {
        method: "PUT",
        headers: {
          ...getAuthHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Erreur lors de la mise à jour");

      alert("Profil mis à jour avec succès !");
      setIsEditing(false);
      refreshUser && refreshUser(); // si le contexte AuthContext le gère
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Upload avatar
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Prévisualisation instantanée
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      setUploadingAvatar(true);
      const response = await fetch(`${API_URL}/users/upload-avatar`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Erreur lors de l'upload");

      alert("Avatar mis à jour !");
      refreshUser && refreshUser();
    } catch (error) {
      alert(error.message);
    } finally {
      setUploadingAvatar(false);
    }
  };

  const currentAvatar = avatarPreview || user?.avatar
    ? `${API_URL}${user?.avatar}`
    : null;

  return (
    <section className="container-px py-14 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mon Profil</h1>
          <p className="mt-2 text-muted-foreground">
            Gérez vos informations personnelles
          </p>
        </div>
        <Button
          variant={isEditing ? "outline" : "default"}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Annuler" : "Modifier"}
        </Button>
      </div>

      {/* Profile Card */}
      <Card className="p-8">
        {/* Avatar Section */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b">
          <div className="relative w-24 h-24">
            {currentAvatar ? (
              <img
                src={currentAvatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full object-cover border"
              />
            ) : (
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {values.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
              </div>
            )}
            {/* Bouton de changement d’avatar */}
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 bg-primary text-white text-xs rounded-full p-2 cursor-pointer"
              title="Changer la photo"
            >
              📷
            </label>
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{values.name || "Utilisateur"}</h2>
            <p className="text-muted-foreground">{values.email}</p>
            {uploadingAvatar && <p className="text-sm text-blue-500 mt-2">Upload en cours...</p>}
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-800 dark:text-red-200">
              {errors.general}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Nom complet"
              name="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              disabled={!isEditing}
              error={errors.name}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              disabled={!isEditing}
              error={errors.email}
            />

            <Input
              label="Téléphone"
              name="phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              disabled={!isEditing}
              placeholder="+221 XX XXX XX XX"
              error={errors.phone}
            />

            <Input
              label="Localisation"
              name="location"
              value={values.location}
              onChange={(e) => setValues({ ...values, location: e.target.value })}
              disabled={!isEditing}
              placeholder="Dakar, Sénégal"
              error={errors.location}
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium mb-2">Biographie</label>
            <textarea
              name="bio"
              value={values.bio}
              onChange={(e) => setValues({ ...values, bio: e.target.value })}
              disabled={!isEditing}
              placeholder="Parlez-nous de vous..."
              rows={4}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Boutons */}
          {isEditing && (
            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? "Enregistrement..." : "Enregistrer les modifications"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="flex-1"
              >
                Annuler
              </Button>
            </div>
          )}
        </form>
      </Card>
    </section>
  );
}
