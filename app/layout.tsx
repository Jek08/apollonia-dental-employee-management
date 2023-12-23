import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import NavigationBar from "@/app/ui/NavigationBar";
import SideBar from "@/app/ui/SideBar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="flex bg-slate-200">
          <SideBar />
          <div className="w-full z-0">
            <NavigationBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
