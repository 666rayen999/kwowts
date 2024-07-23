import { QuoteIcon } from "./Icons";
import { Quote } from "@/utils/types";

const Message = ({ message }: Readonly<{ message: string }>) => (
  <h1 className="relative bg-gray-light/25 dark:bg-gray-dark/25 backdrop-blur-[1rem] text-black dark:text-white px-4 py-2 rounded-2xl w-fit">
    {message}
    <QuoteIcon className="absolute -left-1 -bottom-1 fill-purple-light dark:fill-purple-dark w-4 h-4 rotate-180" />
    <QuoteIcon className="absolute -right-1 -top-1 fill-purple-light dark:fill-purple-dark w-4 h-4" />
  </h1>
);

const Messages = ({ msgs }: Readonly<{ msgs: Quote[] | undefined }>) =>
  msgs?.map((msg, idx) => <Message key={idx} message={msg.quote} />);

export default Messages;
