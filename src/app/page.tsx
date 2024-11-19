import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { NavBar } from "./_components/nav-bar.component";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-accent-light to-accent-dark text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Welcome to <span className="text-primary">Z-Gram</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            {session && (
              <p className="text-center text-2xl text-black">
                <span>Logged in as {session.user?.name}</span>
              </p>
            )}
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-transparent px-10 py-3 font-semibold no-underline transition hover:bg-accent"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
        {session && (
          <>
          <NavBar />
          </>
        )}
        
      </div>
    </main>
  );
}
