import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/provider/GlobalProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
  display: "swap",
});
export const metadata = {
  title: "Role Management",
  description: "Role Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
