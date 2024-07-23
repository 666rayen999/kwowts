import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Error from "./Error";
import Messages from "./Message";
import Loading from "./Loading";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Quote } from "@/utils/types";

import { initSync, is_similar, has_bad_word } from "@/public/pkg/chatting_app";

const Chat = () => {
  const msgsRef = collection(db, "quotes");
  const q = query(msgsRef, orderBy("date", "desc"));
  const [value, loading, error] = useCollectionData<Quote>(q as any);
  const [quote, setQuote] = useState<string>("");
  const [cant, setCant] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [value]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuote(e.currentTarget.value);
  };

  const handleSend = useCallback(async () => {
    if (quote.length > 0) {
      const quotes = value?.map((x) => x.quote);
      if (quotes) {
        fetch("pkg/chatting_app_bg.wasm")
          .then((res) => res.arrayBuffer())
          .then((bytes) => {
            initSync(bytes);
            setCant(is_similar(quote, quotes, 12) || has_bad_word(quote));
            if (!is_similar(quote, quotes, 12) && !has_bad_word(quote)) {
              addDoc(collection(db, "quotes"), {
                quote: quote,
                date: serverTimestamp(),
              });
              setQuote("");
            }
          })
          .catch((error) => {
            console.error("Error fething wasm: ", error);
          });
      }
    }
  }, [value, quote]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleSend();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSend]);

  return error ? (
    <Error />
  ) : loading ? (
    <Loading />
  ) : (
    <section className="w-full h-full flex min-h-screen max-w-[512pt] flex-col items-center justify-end">
      <Logo />
      <div
        ref={scrollRef}
        className="w-full h-full flex items-center flex-col-reverse py-20 gap-8"
      >
        <Messages msgs={value} />
      </div>
      <div className="fixed bottom-0 w-full flex flex-row gap-2 items-center justify-center p-4 dark:bg-black/75 bg-white/75 backdrop-blur-[1rem] duration-200">
        <input
          value={quote}
          onChange={handleChange}
          className={`text-black dark:text-white bg-gray5-light/50 dark:bg-gray5-dark/50 w-full max-w-[512pt] px-4 py-2 rounded-2xl outline ${cant ? "outline-red-light dark:outline-red-dark focus:outline-red-light dark:focus:outline-red-dark" : "outline-transparent focus:outline-purple-light dark:focus:outline-purple-dark"} outline-2 duration-200`}
          placeholder="write quote..."
          type="text"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 font-bold text-white dark:text-black bg-purple-light dark:bg-purple-dark rounded-2xl shrink-0 duration-200"
        >
          Publish
        </button>
      </div>
    </section>
  );
};

export default Chat;
