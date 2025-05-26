"use client";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Provider } from "@/types/Provider";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Providers({ children, locale }: Provider) {
  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
