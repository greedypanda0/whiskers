import {
  Literata,
  Atkinson_Hyperlegible,
  JetBrains_Mono,
  Crimson_Pro,
} from "next/font/google";
import "@/app/css/globals.css";
import SessionWrapper from "../lib/sessionWrapper";
import Metadata from "./components/Metadata";
import Validator from "./components/Validator";

const serif = Literata({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const sans = Atkinson_Hyperlegible({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const writerSerif = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} ${writerSerif.variable} antialiased`}
      >
        <SessionWrapper>
          <Metadata />
          <Validator />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
