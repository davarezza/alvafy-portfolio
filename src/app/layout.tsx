import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/lib/fontawesome";

config.autoAddCss = false;

const montserrat = Montserrat({
subsets: ["latin"],
display: "swap",
});

export const metadata: Metadata = {
  title: "Alvafy Portfolio",
  description: "Created with ❤️ by Dava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={twMerge(
          montserrat.className,
          "bg-gray-900 text-white antialiased custom-scrollbar"
        )}
      >
        {children}
      </body>
    </html>
  );
}
