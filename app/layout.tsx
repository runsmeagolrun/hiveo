import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hiveo",
  description:
    "A note-taking web application for task management, project tracking, to-do lists, and bookmarking.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.svg",
      href: "/logo.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-dark.svg",
      href: "/logo-dark.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="hiveo-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
