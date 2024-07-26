"use server";

import { createClient } from "@/utils/supabase/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const secretKey = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  if (!apiKey || !secretKey) throw Error("API keys are missing");
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session?.user) throw Error("User is not logged in");
  const issued = Math.round(new Date().getTime() / 1000);
  const exp = issued + 60 * 60;
  const client = new StreamClient(apiKey, secretKey);
  const token = client.createToken(data.session.user.id, exp, issued);
  return token;
};
