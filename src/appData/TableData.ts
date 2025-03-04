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
    date: "2025-03-10",
    title: "Sunday Service: The Power of Prayer",
    speaker: "Pastor John Smith",
  },
  {
    date: "2025-03-17",
    title: "Bible Study: The Book of Psalms",
    speaker: "Elder Mary Johnson",
  },
  {
    date: "2025-03-24",
    title: "Youth Fellowship Night",
    speaker: "Minister David Williams",
  },
  {
    date: "2025-03-31",
    title: "Worship Night: Songs of Revival",
    speaker: "Worship Leader Sarah Brown",
  },
  {
    date: "2025-04-07",
    title: "Men's Ministry: Walking in Faith",
    speaker: "Deacon James Miller",
  },
  {
    date: "2025-04-14",
    title: "Women's Bible Study: Proverbs 31",
    speaker: "Sister Angela Davis",
  },
  {
    date: "2025-04-21",
    title: "Easter Sunday: He is Risen!",
    speaker: "Bishop Robert White",
  },
  {
    date: "2025-05-12",
    title: "Missionary Testimony Night",
    speaker: "Missionary Thomas Lee",
  },
  {
    date: "2025-04-28",
    title: "Guest Speaker: The Grace of God",
    speaker: "Reverend Paul Green",
  },
  {
    date: "2025-05-05",
    title: "Family Prayer Night",
    speaker: "Pastor Emily Adams",
  },

  {
    date: "2025-05-21",
    title: "Missiodnary Testimony Night",
    speaker: "Missiondary Thomas Lee",
  },
  {
    date: "2025-05-29",
    title: "Missiodnary Testimony Night",
    speaker: "Missiondary Thomas Lee",
  },
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
