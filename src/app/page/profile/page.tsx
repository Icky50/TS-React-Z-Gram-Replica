import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function Page() {
  const session = await getServerAuthSession();

  session
    ? redirect(`/page/profile/${session.user.name}`)
    : redirect("/api/auth/signin");
}
