import ContactForm from "@/app/compo/Contactform";
import React from "react";

const page = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-setTheme"
      id="contactpage"
    >
      <ContactForm />
    </div>
  );
};

export default page;
