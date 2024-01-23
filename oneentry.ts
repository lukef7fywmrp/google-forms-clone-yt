import { defineOneEntry } from "oneentry";

const api = defineOneEntry(process.env.NEXT_PUBLIC_API_URL!, {
  token: process.env.API_TOKEN,
});

export default api;
