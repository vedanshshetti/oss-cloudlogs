import { signIn } from "@/auth";

export default function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="rounded-md p-1.5 hover:p-2.5 bg-green-700 transition-all duration-500"
      >
        Sign-in with GitHub
      </button>
    </form>
  );
}
