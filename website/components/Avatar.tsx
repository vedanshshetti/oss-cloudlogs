import { auth } from "../auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <Image
      className="rounded-full"
      src={session.user.image!}
      alt="User Avatar"
      width={100}
      height={100}
    />
  );
}
