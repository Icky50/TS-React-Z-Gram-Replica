import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession();

  const links = [
    { href: "/", label: "Home" },
    { href: "/page/search", label: "Search" },
    { href: "/page/explore", label: "Explore" },
    { href: "/page/feed", label: "Feed" },
    { href: "/page/profile", label: "Profile" },
  ];

  const buttons = [{ text: session ? "Logout" : "Login" }, { text: "Theme" },];

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="from-accent-light to-accent-dark flex justify-between border-b-2 border-black bg-gradient-to-r p-2">
          <div className="flex items-center gap-2">
            {links.map(({ href, label }, index) => (
              <Link key={index} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {buttons.map(({ text }, index) => (
              <button
                className=""
                key={index}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
