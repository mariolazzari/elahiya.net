import "../globals.css";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/types/Layout";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "600",
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
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId={process.env.GA_TRACKING_ID!} />
      </head>

      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex flex-col items-center p-4 h-[calc(100dvh-100px)] overflow-y-auto">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
