import { formatDate } from "@/utils/FormatDate";
import React from "react";

export default function PassageDay({ passageDay }: { passageDay: string }) {

    const formattedDate = formatDate(passageDay)
  return (
    <div className="flex mb-8 italic font-bold fade-in ml-3">
      {formattedDate}
    </div>
  );
}
