import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main>
      <section className="flex justify-center mb-4 mt-4">
        <SignIn />
      </section>
    </main>
  );
}
