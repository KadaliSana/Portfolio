import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Background3D from "@/components/graphics/Background3D";
import TargetCursor from '@/components/graphics/Cursor';
import { PortfolioProvider } from "@/context/PortfolioContext";
import ModeToggle from "@/components/ModeToggle";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <PortfolioProvider>
          <TargetCursor 
            targetSelector="a, button, .cursor-target"
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
          />
          <Background3D
            speed={0.3}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0.1}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#ffffff"
            color2="#ffffff"
            color3="#ffffff"
            enableMouseInteraction
            mouseInfluence={2}
          />
          <ModeToggle />
          <Sidebar />
          {children}
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
