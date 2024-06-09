import "./globals.css";
import "@/public/fonts/Space/stylesheet.css";
import "@/public/fonts/overused/stylesheet.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Lenis1 from "@/components/lenis1";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="  w-full relative bg-black">
        <Lenis1>{children}</Lenis1>
        <Footer />
      </body>
    </html>
  );
}
