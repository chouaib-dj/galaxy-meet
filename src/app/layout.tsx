import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Galaxy Meet",
  description:
    "Galaxy Meet is a feature-rich web application for seamless online meetings, offering robust controls and functionalities to host and join meetings, manage settings, and access past and upcoming meetings with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-poppins", poppins.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
