import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Kanin Sukittivarapunt — System Analyst";
const description =
  "Kanin (New) Sukittivarapunt, System Analyst at RIS Central Group. I translate business requirements into API specifications, data models, and integration designs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaninboy.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Kaninboy",
    images: ["/profile.jpg"],
    type: "website",
  },
};

// Runs before paint: saved choice, else OS preference, else dark.
const themeScript = `(function(){var t;try{t=localStorage.getItem('pf-theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
