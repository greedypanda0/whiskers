"use client";

import { signIn, signOut } from "next-auth/react";
import Footer from "./components/Footer";
import Top from "./components/Top";

export default function Home() {
  return (
    <main className="fixed flex flex-col md:flex-row w-full h-full ">
      <div className="flex flex-col w-full h-full">
        <Top />
        <div className="w-full h-full flex flex-col">
          <div onClick={() => signIn()}>SignIn</div>
          <div onClick={() => signOut()}>Sign OUT</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
