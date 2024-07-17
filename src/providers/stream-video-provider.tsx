"use client";

import { tokenProvider } from "@/actions/stream.action";
import { AuthContext } from "@/app/contexts/auth-context";
import Loader from "@/components/shared/loader";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useContext, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { loading, user } = useContext(AuthContext);
  useEffect(() => {
    if (loading || !user) return;
    if (!apiKey) throw new Error("The Stream API key is missing");
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.fullName,
      },
      tokenProvider,
    });
    setVideoClient(client);
  }, [loading, user]);
  if (!videoClient) return <Loader />;
  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
