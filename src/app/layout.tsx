import { Toaster } from "sonner";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeaderProvider from "@/components/general/header/HeaderProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderProvider/>
        {children}
        <Footer/>
          <Toaster position="bottom-right" richColors />
          
      </body>
    </html>
  );
}