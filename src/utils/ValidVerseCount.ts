export function isValidVerseCount(passage: string) {
  const regex = /(\d+)$/;
  const parts = passage.split("-");

  if (parts.length !== 2) {
    throw new Error(
      "Invalid passage format. Expected format: 'BOOK.CHAPTER.VERSE-BOOK.CHAPTER.VERSE'"
    );
  }

  const startMatch = parts[0].match(regex);
  const endMatch = parts[1].match(regex);

  if (!startMatch || !endMatch) {
    throw new Error(
      "Could not extract verse numbers. Check the passage format."
    );
  }

  const startVerse = parseInt(startMatch[1], 10);
  const endVerse = parseInt(endMatch[1], 10);

  const verseCount = endVerse - startVerse + 1;

  return verseCount <= 500;
}
