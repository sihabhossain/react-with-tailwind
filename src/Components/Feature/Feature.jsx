import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center ">
      <CheckCircleIcon class="h-4 w-4 text-green-400" />
      <span className="pl-2">{feature}</span>
    </div>
  );
};

export default Feature;
