import UserAvatar from "@/components/Avatar";
import Greeting from "@/components/Greeting";
import SignInWithGithub from "@/components/SignInWithGithub";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav className="flex flex-row gap-2 p-2 mb-2 justify-start">
        <UserAvatar/>
      </nav>
      <h1 className="text-xl font-semibold mb-5"><Greeting/></h1>
      <SignInWithGithub/>
    </div>
  );
}
