import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconTerminal2 } from "@tabler/icons-react";
import { Contact, InfoIcon } from "lucide-react";

export function MobileDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About",
      icon: (
        <InfoIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#objective",
    },
    {
      title: "Work",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <Contact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full z-50 sticky bottom-10">
      <FloatingDock mobileClassName="translate-y-0 inset-x-30" items={links} />
    </div>
  );
}
