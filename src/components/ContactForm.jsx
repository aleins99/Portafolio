import React from "react";
import "../styles/components/ContactForm.css";

const ContactForm = () => {
  return (
    <form>
      <label>
        Nombre:
        <input type="text" name="name" />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="email" />
      </label>
      <label>
        Mensaje:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
