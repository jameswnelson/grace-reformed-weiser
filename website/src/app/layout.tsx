import type { Metadata } from "next";
import { Inter, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Grace Reformed Church of Weiser",
  description: "A community of believers committed to the historic Christian faith and the Reformed tradition in Weiser, Idaho.",
  keywords: ["church", "reformed", "christian", "weiser", "idaho", "worship", "bible"],
  authors: [{ name: "Grace Reformed Church of Weiser" }],
  openGraph: {
    title: "Grace Reformed Church of Weiser",
    description: "A community of believers committed to the historic Christian faith and the Reformed tradition in Weiser, Idaho.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
