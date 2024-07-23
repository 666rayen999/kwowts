"use client";

import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Theme from "@/components/Theme";
import Loading from "@/components/Loading";
import Chat from "@/components/Chat";
import Sign from "@/components/Sign";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <main className="relative flex min-h-dvh sm:min-h-screen flex-col items-center justify-center p-4 bg-white dark:bg-black duration-200">
      <div className="absolute right-0 bottom-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-light dark:bg-purple-dark blur-[100px] duration-200 opacity-10" />
      <div className="absolute left-0 top-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-light dark:bg-purple-dark blur-[100px] duration-200 opacity-10" />
      <div className="hidden sm:flex absolute w-32 h-32 bg-purple-light dark:bg-purple-dark blur-[100px] duration-200 opacity-10" />
      <div className="z-10 w-full h-full flex flex-col items-center justify-center">
        {loading ? <Loading /> : user ? <Chat /> : <Sign />}
        <Theme />
      </div>
    </main>
  );
};

export default Home;
