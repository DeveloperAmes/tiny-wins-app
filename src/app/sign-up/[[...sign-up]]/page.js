import { SignUp } from "@clerk/nextjs";
import signUpStyles from "@/app/styles/clerksigninup.module.css";

export default function SignUpPage() {
  return (
    <main>
      <h1>Never been here before? Sign up to start sharing your small wins!</h1>
      <section className="flex justify-center mb-4">
        <SignUp className={signUpStyles} />
      </section>
    </main>
  );
}
