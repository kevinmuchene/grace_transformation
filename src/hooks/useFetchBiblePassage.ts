import axios from "axios";
import { debounce, throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_BIBLE_API_KEY;

export const useFetchBiblePassage = (passageId: string) => {
  // Load Bible version from localStorage (default to NIV)
  const [bibleId, setBibleId] = useState(
    localStorage.getItem("bibleVersion") || "de4e12af7f28f599-02"
  );

  const [passage, setPassage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copyrightContent, setCopyrightContent] = useState("");

  const fetchPassage = (bibleId: string) => {
    setLoading(true);

    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passageId}`,
        {
          headers: {
            "api-key": API_KEY,
          },
        }
      )
      .then((data) => {
        setCopyrightContent(data.data.data.copyright);
        setPassage(data.data.data.content);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  // (1 request per 4 seconds)
  const throttledFetch = useCallback(throttle(fetchPassage, 4000), []);

  // Debounce user selection change (wait 500ms before updating state)
  const debouncedSetBibleId = useCallback(
    debounce((newVersion: string) => {
      localStorage.setItem("bibleVersion", newVersion); // Save to localStorage
      setBibleId(newVersion);
    }, 500),
    []
  );

  // Fetch passage when Bible version changes (with throttling)
  useEffect(() => {
    if (bibleId) {
      throttledFetch(bibleId);
    }
  }, [bibleId, throttledFetch]);

  return {
    passage,
    copyrightContent,
    loading,
    error,
    bibleId,
    debouncedSetBibleId,
  };
};
