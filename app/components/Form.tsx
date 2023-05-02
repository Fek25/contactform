'use client'
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { email, name, message } = Object.fromEntries(formData.entries());
    console.log(email, name, message);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[400px] p-8 space-y-8 border rounded border-white/10"
    >
      <Input
        name="email"
        id="email"
        label="Tu email"
        type="email"
        placeholder="miemail@gmail.com"
      />

      <Input
        name="name"
        id="text"
        label="Tu nombre"
        type="text"
        placeholder="Mateo Mejía Arias"
      />

      <Input
        name="message"
        id="message"
        label="Tu mensaje"
        type="text"
        placeholder="Aquí puedes poner tu mensaje el cual me vas a enviar"
      />
      <Button>Enviar mensaje</Button>
    </form>
  );
};
