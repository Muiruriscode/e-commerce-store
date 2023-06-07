import { Navbar } from "./components/Navbar";
import { AppProvider } from "./context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury E-commerce store",
  description: "Luxury E-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
