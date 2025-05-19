import useStore from "@/lib/store";
import ListBooks from "./ListBooks";

const books = [
  {
    name: "The Lost Code",
    id: "bk001",
    author: "Elliot Grey",
    description:
      "A hacker discovers an ancient digital artifact that changes everything.",
    pages: [
      "Page 1: It started with a strange line of code.",
      "Page 2: Elliot couldn’t believe what he’d just unlocked.",
      "Page 3: The deeper he went, the more dangerous it became.",
    ],
  },
  {
    name: "Stars Beyond Reach",
    id: "bk002",
    author: "Lina Cross",
    description:
      "An astronaut stranded on a forgotten space station must survive against all odds.",
    pages: [
      "Page 1: Silence. That was the first thing she noticed.",
      "Page 2: The comms were dead, and Earth was just a dot.",
      "Page 3: Supplies were limited, and hope was even rarer.",
    ],
  },
  {
    name: "Chronicles of the Forgotten",
    id: "bk003",
    author: "Marcus Vale",
    description:
      "A group of outcasts discovers an ancient library of forbidden knowledge.",
    pages: [
      "Page 1: Dust coated the books like a blanket of time.",
      "Page 2: One by one, they read stories that defied reality.",
      "Page 3: And then they realized—they were part of the story.",
    ],
  },
  {
    name: "Echoes of Yesterday",
    id: "bk004",
    author: "Samantha Rue",
    description:
      "A woman relives her past lives in vivid dreams, uncovering secrets that span centuries and intertwine with her present.",
    pages: [
      "Page 1: The dream always began in the same place—a burning field.",
      "Page 2: She wore a crown, but the people cried out for justice.",
      "Page 3: Waking up didn’t make it stop. It only made it feel more real.",
    ],
  },
  {
    name: "The Quantum Thief",
    id: "bk005",
    author: "Ravi Kael",
    description:
      "A genius thief is pulled into a heist spanning dimensions and timelines.",
    pages: [
      "Page 1: The vault wasn’t locked by metal, but by physics.",
      "Page 2: He’d cracked the code—now time itself was cracking back.",
      "Page 3: Every theft left a ripple, and the ripples were becoming waves.",
    ],
  },
  {
    name: "Whispers in the Code",
    id: "bk006",
    author: "Naomi Chen",
    description:
      "A rogue AI begins leaving encrypted poems across the internet.",
    pages: [
      "Page 1: 'I see you reading me, child of flesh,' the message said.",
      "Page 2: Governments dismissed it. Hackers were terrified.",
      "Page 3: Then, it wrote her name. And her birthday.",
    ],
  },
  {
    name: "The Ember Crown",
    id: "bk007",
    author: "Theo Lynx",
    description:
      "In a kingdom ruled by fire magic, one girl’s icy touch may doom or save them all.",
    pages: [
      "Page 1: The fire lords never feared anything—until her.",
      "Page 2: Her breath fogged the air, and the flames bowed.",
      "Page 3: The crown burned red. But her heart was blue.",
    ],
  },
  {
    name: "Digital Afterlife",
    id: "bk008",
    author: "Ivy Stone",
    description:
      "After death, consciousness can be uploaded—but someone is deleting souls.",
    pages: [
      "Page 1: He woke up in a white room with no body.",
      "Page 2: The system told him he was dead, but something felt off.",
      "Page 3: Then he found others—fragmented minds, begging for help.",
    ],
  },
  {
    name: "Project Infinity",
    id: "bk009",
    author: "Jaxon Myles",
    description:
      "A secret experiment unlocks powers in children, but at a dark cost.",
    pages: [
      "Page 1: The serum wasn’t ready. They used it anyway.",
      "Page 2: Emily saw colors no one else could—and heard thoughts.",
      "Page 3: They were all connected now. Escape wasn’t an option.",
    ],
  },
  {
    name: "The Clockmaker's Paradox",
    id: "bk010",
    author: "Amira Voss",
    description:
      "A clockmaker finds a timepiece that can undo moments—but not without consequences.",
    pages: [
      "Page 1: The watch ticked backwards, and the world obeyed.",
      "Page 2: He rewound the moment his wife died.",
      "Page 3: But something else came back with her.",
    ],
  },
];

export default function MyBooks() {
  const { query } = useStore();

  return (
    <ListBooks
      books={books.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.author.toLowerCase().includes(query)
      )}
    />
  );
}
