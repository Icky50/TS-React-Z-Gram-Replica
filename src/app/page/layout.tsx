import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import { NavBar } from "../_components/nav-bar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      	<body className={inter.className}>
			<NavBar />
			{children}
		</body>
    </html>
  );
}
