import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const JoinMeeting = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2.5">
        <Label className="flex flex-col gap-2 w-fit" htmlFor="invitation-link">
          Invitaion Link
        </Label>
        <Input placeholder="Enter Invitation Link" id="invitation-link" />
      </div>
      <Button className="w-full">Join Meeting</Button>
    </div>
  );
};

export default JoinMeeting;
