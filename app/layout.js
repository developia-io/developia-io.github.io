import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developia",
  description: "Next generation code, new generation start-up",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={inter.className}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
