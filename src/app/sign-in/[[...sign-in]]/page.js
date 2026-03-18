import { SignIn } from "@clerk/nextjs";
import signInStyles from "@/app/styles/clerksigninup.module.css";

export default function SignInPage() {
  return (
    <main>
      <section className="flex justify-center mb-4">
        <SignIn className={signInStyles} />
      </section>
    </main>
  );
}
