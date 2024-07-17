"use client";

import { AuthContext } from "@/app/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const NewMeeting = () => {
  const [values, setValues] = useState({
    startAt: new Date(),
    description: "",
    link: "",
  });
  const [callDetials, setCallDetials] = useState<Call>();
  const { user } = useContext(AuthContext);
  const client = useStreamVideoClient();
  const router = useRouter();
  const createMeeting = async () => {
    if (!user || !client) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create call");
      const startAt =
        values.startAt.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";
      call.getOrCreate({
        data: {
          starts_at: startAt,
          custom: {
            description,
          },
        },
      });
      setCallDetials(call);
      if (!values.description) {
        router.push(`/dashboard/meeting/${call.id}`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <Button onClick={createMeeting}>Create New Meeting</Button>;
};

export default NewMeeting;
