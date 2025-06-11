import ContactForm from "@/app/compo/Contactform";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen p-4">
      <Link href={"/"}>
        <Button>
          <ArrowLeftIcon />
        </Button>
      </Link>
      <div
        className="flex justify-center items-center bg-setTheme w-full h-auto"
        id="contactpage"
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
