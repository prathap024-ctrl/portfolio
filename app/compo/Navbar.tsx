"use client";
import ModeToggle from "../../components/Theme/mode-toggle";

const Navbar = () => {
  return (
    <div>
      <nav className="flex w-screen h-16 shadow-md bg-settheme backdrop-blur-2xl fixed top-0 z-50">
        <div className="w-full flex justify-center items-center gap-2">
          <h1 className="text-2xl font-semibold">Portfolio</h1>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
