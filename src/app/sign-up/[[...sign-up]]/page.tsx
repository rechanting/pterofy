import Image from "next/image";
import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClerkProvider>
        <SignUp />
      </ClerkProvider>
    </main>
  );
}
