import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Contact() {
  return (
    <section className="container-px py-14 grid lg:grid-cols-2 gap-10">
      {/* --- Colonne gauche : Formulaire de contact --- */}
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-muted-foreground">
          Écrivez-nous, nous répondons sous 24h.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Tu pourras ajouter ton handler ici (envoi email, API, etc.)
          }}
        >
          <Input name="name" label="Nom" placeholder="Votre nom" />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="you@exemple.com"
          />
          <Input
            name="message"
            label="Message"
            placeholder="Votre message"
            className="min-h-[120px]"
            as="textarea"
          />
          <Button>Envoyer</Button>
        </form>
      </div>

      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          title="Localisation SMC-Tech"
          className="w-full h-[300px] md:h-full"
          src="https://www.google.com/maps?q=14.721733,-17.459660&output=embed"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
