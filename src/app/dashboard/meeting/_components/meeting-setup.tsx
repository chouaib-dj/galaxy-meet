"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isMicCamOn, setIsMicCamOn] = useState(true);
  const call = useCall();
  useEffect(() => {
    if (!call) return;
    if (isMicCamOn) {
      call.camera.enable();
      call.microphone.enable();
    } else {
      call.camera.disable();
      call.microphone.disable();
    }
  }, [isMicCamOn, call?.camera, call?.microphone]);
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
      <h2 className="text-2xl font-semibold">Meeting Setup</h2>
      <div className="aspect-video flex bg-accent w-full max-w-3xl">
        <VideoPreview className="flex-1 min-h-full !border-none !bg-transparent flex justify-center items-center text-lg font-medium" />
      </div>
      <div className="flex items-center gap-4">
        <label className="flex gap-2">
          <Checkbox
            className="mt-0.5"
            checked={!isMicCamOn}
            onCheckedChange={(e: boolean) => {
              setIsMicCamOn(!e);
            }}
          />
          Join Without Mic or Camera
        </label>
        <DeviceSettings />
      </div>
      <Button
        onClick={() => {
          if (!call) return;
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
