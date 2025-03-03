"use client";

import React from "react";
import DOMPurify from "dompurify";
import PassageError from "./PassageError";
import { useFetchBiblePassage } from "@/hooks/useFetchBiblePassage";

const Passage = ({
  passageId,
  reading,
}: {
  passageId: string;
  reading: string;
}) => {
  const { passage, loading, error, bibleId, debouncedSetBibleId } =
    useFetchBiblePassage(passageId);

  if (error) {
    return <PassageError />;
  }

  return (
    <div className="pt-2 pr-4 pb-7 pl-4 md:pr-15 md:pb-15 md:pl-15 md:pt-7 rounded-xl shadow-2xl bg-white">
      <main className="flex justify-end p-3">
        <section className="flex items-center justify-center gap-3 bg-slate-100 shadow-md rounded-2xl p-4 max-w-md">
          <h2 className="text-sm md:text-lg">Select Bible Version:</h2>
          <select
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
            value={bibleId}
            onChange={(e) => debouncedSetBibleId(e.target.value)}
          >
            <option value="de4e12af7f28f599-02">NIV</option>
            <option value="06125adad2d5898a-01">KJV</option>
            <option value="611f8eb23aec8f13-01">Swahili</option>
            <option value="be8dc4ba39edf911-01">Gikuyu</option>
            <option value="4d4df8722134c5ee-01">Luo</option>
          </select>
        </section>
      </main>

      <h3 className="text-center font-bold md:text-xl text-orange-700">
        {reading}
      </h3>

      {loading ? (
        <p className="text-center md:text-xl p-4 text-orange-700">
          Loading passage...
        </p>
      ) : (
        <div
          className="scripture-styles p-3"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(passage) }}
        />
      )}
    </div>
  );
};

export default Passage;
