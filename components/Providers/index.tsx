"use client";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Provider } from "@/types/Provider";

export function Providers({ children, locale }: Provider) {
  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
