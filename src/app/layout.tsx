import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GTA Craft - GTA V Recreated in Minecraft",
  description: "Experience GTA V inside Minecraft! GTA Craft modpack features realistic weapons, fully functional vehicles, and an authentic GTA-style gameplay experience.",
  keywords: ["GTA Craft", "Minecraft", "Modpack", "GTA V", "Vehicles", "Weapons", "Modrinth"],
  authors: [{ name: "Minhero" }],
  icons: {
    icon: "/gta_craft_icon.png",
  },
  themeColor: "#4CAF50",
  openGraph: {
    title: "GTA Craft - GTA V Recreated in Minecraft",
    description: "Experience GTA V inside Minecraft with realistic weapons, vehicles, and authentic gameplay!",
    url: "https://modrinth.com/modpack/gta-craft",
    siteName: "GTA Craft",
    type: "website",
    images: ["/gta_craft_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA Craft - GTA V Recreated in Minecraft",
    description: "Experience GTA V inside Minecraft with realistic weapons, vehicles, and authentic gameplay!",
    images: ["/gta_craft_banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="system">
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
