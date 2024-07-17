import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
};

export default Loader;
