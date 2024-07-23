import { Timestamp } from "firebase/firestore";

interface Quote {
  quote: string;
  date: Timestamp;
}

export type { Quote };
