import { ThemeProvider } from "@/components/Theme/theme-provider";
import Navbar from "./compo/Navbar";
import MainLayout from "./pages/MainLayout";

export default function Home() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="mt-16">
          <Navbar />
          <MainLayout />
          <div className="w-full h-16 flex justify-center items-center">
            <p className="text-xl">Made with Next.js</p>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
