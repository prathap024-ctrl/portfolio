import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ContactSec = () => {
  return (
    <div id="contact" className="h-[50vh] flex flex-col justify-center">
      <div className="w-full flex justify-center items-center md:py-24 py-10">
        <h2 className="text-4xl md:8xl">Contact</h2>
      </div>
      <div className="flex items-center w-full px-6 md:px-24">
        <ul className="md:flex flex-col flex items-center md:items-start md:flex-row md:justify-between w-full space-y-10">
          <li className="md:w-[20%] md:text-justify text-center">
            Got a question, proposal, project, or want to work together on
            something?
            <br />{" "}
            <span className="underline">
              <Link href="/contact" as="/pages/contact">
                Send me an email
              </Link>{" "}
            </span>
          </li>
          <li className="space-x-2">
            <Link href="https://github.com/prathap024-ctrl">
              <Button>Github</Button>
            </Link>
            <Link href="https://www.linkedin.com/in/prathap-l-4ab6b2296">
              <Button>LinkedIn</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSec;
