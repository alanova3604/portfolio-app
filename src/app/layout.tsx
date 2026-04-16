import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingNavbar from "@/components/FloatingNavbar";
import SocialLinks from "@/components/SocialLinks";
import PageWrapper from "@/components/PageWrapper";
import MotionProvider from "@/components/MotionProvider";

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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300 bg-background text-foreground relative">
        <FloatingNavbar />
        <SocialLinks />
        <MotionProvider>
          <PageWrapper>
            {children}
          </PageWrapper>
          {modal}
        </MotionProvider>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
