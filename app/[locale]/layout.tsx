import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Layout } from "@/types/Layout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { SideBar } from "@/components/SideBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Elahiya Pro Language",
    default: "Elahiya Pro Language",
  },
  description:
    "Elahiya Pro Language school has been providing English languages, TOEFL, IELTS and French classes in Rudehen for 20 years.It is located at the 6th Bustan",
  alternates: {
    canonical: "https://elahiya.net",
    languages: {
      en: "https://elahiya.net/en",
      fa: "https://elahiya.net/fa",
    },
  },
};

async function RootLayout({ children, params }: Layout) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale}>
          <SideBar />
          {/* <Navbar /> */}
          <main className="h-[calc(100dvh-100px)] overflow-y-auto p-4">
            {children}
          </main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
