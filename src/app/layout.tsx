import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GameProvider } from "@/context/GameContext";

export const metadata: Metadata = {
  title: "ETHICAR | Simulator Edukasi Lalu Lintas Berbasis AI",
  description: "ETHICAR adalah simulator edukasi lalu lintas berbasis AI yang dirancang untuk meningkatkan kesadaran etika berkendara di kalangan remaja melalui skenario realistis dan analisis perilaku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <GameProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </GameProvider>
      </body>
    </html>
  );
}
