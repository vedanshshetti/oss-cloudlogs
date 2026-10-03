import { auth } from "../auth";

export default async function Greeting() {
  const session = await auth();

  if (!session?.user) return "Welcome to OSS CloudLogs!";

  return `Welcome back to OSS CloudLogs, ${session.user.name}!`;
}
