"use client";

import { ArrowLeft } from "lucide-react";
import google from "@/assets/google.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b bg-pink-900/10 h-screen w-full flex flex-col">
      <button
        onClick={() => router.push("/")}
        className="absolute px-6 pt-10 flex justify-center items-center gap-2 text-sm cursor-pointer"
      >
        <ArrowLeft color="white" />
        <span className="text-white font-medium">Back to Home</span>
      </button>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex">
            <h1 className="text-white text-xl font-medium mt-2">Welcome to</h1>
            <h2
              className="font-normal text-pink-600/90 text-4xl ml-2"
              style={{ fontFamily: "Heading" }}
            >
              PyqHub
            </h2>
          </div>

          <p className="text-secondary-foreground font-semibold text-center max-w-md">
            Sign in below to start using the app.
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center text-white font-semibold py-4 px-9 mt-4 bg-gradient-to-b from-pink-800/40 via-pink-800/60 to-pink-800/40 hover:bg-pink-900 transition cursor-pointer rounded-lg border border-pink-900/5 border-l-pink-900 border-r-pink-900"
          >
            <Image src={google} className="h-5 w-5 mr-4" alt="google" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
