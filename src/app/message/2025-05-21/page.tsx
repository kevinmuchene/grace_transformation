import Passage from "@/components/Passage";
import React from "react";
import MarksOfDiscipleship from "./MarksOfDiscipleship.mdx"

function page() {
  return (
    <div className="p-4 max-w-[120ch] mx-auto w-full">
      {/* <Passage passageId="MRK.2.1-MRK.2.29" reading="Mark 2 : 1-29" /> */}
      <MarksOfDiscipleship/>
    </div>
  );
}

export default page;
