"use client";

import MeetingModalCard from "@/components/shared/cards/meeting-modal-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  MEETING_MODAL_CARDS,
  MeetingModalCardProps,
  MeetingModalIds,
  getMeetingModalContent,
} from "@/constants/meeting-cards";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MeetingModalCards = () => {
  const [activeModal, setActiveModal] = useState<
    MeetingModalCardProps | undefined
  >();
  const handleMeetingModalCardClick = (card: MeetingModalCardProps) => {
    if (card.id === "view-recordings") {
      router.push("/dashboard/recordings");
      return;
    }
    setActiveModal(card);
  };
  const router = useRouter();
  return (
    <section>
      <ul className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-4">
        {MEETING_MODAL_CARDS.map((card) => (
          <li key={card.id}>
            <MeetingModalCard
              {...card}
              onClick={() => {
                handleMeetingModalCardClick(card);
              }}
            />
          </li>
        ))}
      </ul>
      {!!activeModal && (
        <Dialog
          open={!!activeModal}
          onOpenChange={(e) => {
            if (!e) setActiveModal(undefined);
          }}
        >
          <DialogContent className="gap-8">
            <DialogHeader>
              <DialogTitle>{activeModal.title}</DialogTitle>
              <DialogDescription>{activeModal.description}</DialogDescription>
            </DialogHeader>
            {getMeetingModalContent(activeModal.id as MeetingModalIds)}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default MeetingModalCards;
