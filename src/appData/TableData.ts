interface Data {
  date: string;
  title: string;
  speaker: string;
}

function createData(date: string, title: string, speaker: string): Data {
  return { date, title, speaker };
}

const messageData = [
  {
    date: "2025-05-21",
    title: "Marks Of A Disciple Of Jesus",
    speaker: "Pastor Tim",
  }
];

const sortedRows = [...messageData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const tableRowData = sortedRows.map((data) =>
  createData(data.date, data.title, data.speaker)
);

export const speakers = Array.from(
  new Set(tableRowData.map((row) => row.speaker))
);
