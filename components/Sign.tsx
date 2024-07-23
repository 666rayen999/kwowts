import { auth, provider } from "@/utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleIcon } from "./Icons";

const Sign = () => {
  const sign = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <section className="w-full max-w-[512pt] h-full inset-0 flex flex-col justify-center items-center gap-12 sm:gap-16 p-4">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-5xl sm:text-6xl text-left sm:text-center font-black w-full text-black dark:text-white duration-200">
          Explore Quotes.
        </h1>
        <h1 className="text-5xl sm:text-6xl text-left sm:text-center font-black w-full text-black dark:text-white duration-200">
          Get Inspired.
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-left sm:text-center text-lg sm:text-xl text-black/80 dark:text-white/80 font-bold duration-200">
          Welcome to{" "}
          <a
            href="https://github.com/666rayen999/kwowts"
            className="font-black gradient-text duration-200"
          >
            Kwowts
          </a>{" "}
          where you&#39;ll find a collection of inspiring quotes to uplift your
          day and fuel your motivation.{" "}
          <span className="font-extrabold">
            Start exploring and discover the wisdom that resonates with you.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="flex flex-row items-center gap-2 text-xl text-white dark:text-black bg-purple-light dark:bg-purple-dark active:bg-purple-light-acc hover:bg-purple-light-acc px-6 py-2 rounded-2xl duration-200"
          onClick={sign}
        >
          <GoogleIcon className="w-4 h-4 fill-white dark:fill-black duration-200" />
          Sign in
        </button>
      </div>
    </section>
  );
};

export default Sign;
