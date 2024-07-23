import Image from "next/image";
import { LoadingIcon } from "./Icons";

const Loading = () => (
  <section className="w-full h-full flex flex-col items-center justify-center">
    <div className="w-12 h-12">
      <LoadingIcon className="w-full h-full stroke-purple-light-acc dark:stroke-purple-dark-acc duration-200" />
    </div>
  </section>
);

export default Loading;
