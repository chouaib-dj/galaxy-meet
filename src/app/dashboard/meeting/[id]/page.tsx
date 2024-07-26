"use client";

import { AuthContext } from "@/app/contexts/auth-context";
import Loader from "@/components/shared/loader";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useContext, useState } from "react";
import MeetingRoom from "../_components/meeting-room";
import MeetingSetup from "../_components/meeting-setup";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);
  if (loading || isCallLoading) return <Loader />;
  return (
    <StreamCall call={call}>
      <StreamTheme>
        {isSetupComplete ? (
          <MeetingRoom />
        ) : (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
        )}
      </StreamTheme>
    </StreamCall>
  );
};

export default Page;
