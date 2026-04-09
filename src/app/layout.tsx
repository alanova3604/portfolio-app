import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "@/components/FloatingNavbar";
import PageWrapper from "@/components/PageWrapper";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alan Alcalá | Portfolio",
  description: "UX/UI Designer and Front-End Developer focused on building clear, usable, and scalable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300 bg-background text-foreground">
        <FloatingNavbar />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
