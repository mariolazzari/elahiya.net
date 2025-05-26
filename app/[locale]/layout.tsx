import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Layout } from "@/types/Layout";
import { Providers } from "@/components/Providers";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { geistMono, geistSans } from "../fonts";

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
          <AppSidebar />
          <main className="w-full h-screen overscroll-x-none overflow-y-auto">
            <SidebarTrigger className="bg-transparent fixed" />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
