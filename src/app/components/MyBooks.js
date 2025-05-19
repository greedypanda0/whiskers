import useStore from "@/lib/store";
import ListBooks from "./ListBooks";

const books = [
  // Original 10 books (with pages)
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

  // 40 new books with empty pages arrays
  {
    name: "Veil of Shadows",
    id: "bk011",
    author: "Kiera Fallon",
    description: "In a city where darkness hides secrets, one detective chases the truth.",
    pages: [],
  },
  {
    name: "Neon Samurai",
    id: "bk012",
    author: "Taro Zen",
    description: "A futuristic ronin battles corporate overlords in neon-lit streets.",
    pages: [],
  },
  {
    name: "Celestial Drift",
    id: "bk013",
    author: "Amina Sol",
    description: "Space explorers face an unknown cosmic phenomenon threatening the galaxy.",
    pages: [],
  },
  {
    name: "Broken Time",
    id: "bk014",
    author: "Elias Grant",
    description: "A time traveler trapped in loops tries to fix a fractured timeline.",
    pages: [],
  },
  {
    name: "The Silent Choir",
    id: "bk015",
    author: "Maya Lin",
    description: "A group of musicians discovers their melodies can alter reality.",
    pages: [],
  },
  {
    name: "Iron Wings",
    id: "bk016",
    author: "Jasper Cole",
    description: "A pilot with a mysterious past takes on a deadly sky war.",
    pages: [],
  },
  {
    name: "The Forgotten Realm",
    id: "bk017",
    author: "Selene Mora",
    description: "A portal to a lost world reveals magic and betrayal.",
    pages: [],
  },
  {
    name: "Shadow Puppets",
    id: "bk018",
    author: "Damian Cross",
    description: "Invisible forces control the fate of a bustling metropolis.",
    pages: [],
  },
  {
    name: "Crystal Nexus",
    id: "bk019",
    author: "Nina Voss",
    description: "A quest for powerful crystals uncovers ancient rivalries.",
    pages: [],
  },
  {
    name: "The Last Beacon",
    id: "bk020",
    author: "Orion Drake",
    description: "A lone survivor seeks hope in a post-apocalyptic wasteland.",
    pages: [],
  },
  {
    name: "Mind's Mirage",
    id: "bk021",
    author: "Sasha Reed",
    description: "A psychologist explores the blurry line between dreams and reality.",
    pages: [],
  },
  {
    name: "Dark Horizon",
    id: "bk022",
    author: "Leo Archer",
    description: "An expedition to a mysterious island turns into a fight for survival.",
    pages: [],
  },
  {
    name: "The Clockwork Heart",
    id: "bk023",
    author: "Isla Quinn",
    description: "In a steampunk city, a mechanical heart holds the key to revolution.",
    pages: [],
  },
  {
    name: "Frozen Embers",
    id: "bk024",
    author: "Evan Frost",
    description: "A warrior princess fights against the eternal winter consuming her land.",
    pages: [],
  },
  {
    name: "Electric Veins",
    id: "bk025",
    author: "Rhea Storm",
    description: "Cybernetic enhancements come with unexpected consequences.",
    pages: [],
  },
  {
    name: "The Last Archivist",
    id: "bk026",
    author: "Caleb Nash",
    description: "Guardians protect the last known archive of forbidden knowledge.",
    pages: [],
  },
  {
    name: "Serpent's Whisper",
    id: "bk027",
    author: "Vera Black",
    description: "A deadly secret lies beneath the city’s ancient catacombs.",
    pages: [],
  },
  {
    name: "Radiant Shadows",
    id: "bk028",
    author: "Dorian Vale",
    description: "Light and dark forces collide in an epic battle for the soul of the world.",
    pages: [],
  },
  {
    name: "Ghosts of Avalon",
    id: "bk029",
    author: "Morgana Drake",
    description: "Ancient spirits rise to reclaim a forgotten kingdom.",
    pages: [],
  },
  {
    name: "Binary Souls",
    id: "bk030",
    author: "Zane Kade",
    description: "Two AI entities struggle to find identity in a digital wasteland.",
    pages: [],
  },
  {
    name: "Whispering Pines",
    id: "bk031",
    author: "Lila Harper",
    description: "Secrets lurk in a quiet town surrounded by endless forests.",
    pages: [],
  },
  {
    name: "Steel Tempest",
    id: "bk032",
    author: "Gideon Kane",
    description: "A rebellion ignites amid raging storms and iron machines.",
    pages: [],
  },
  {
    name: "The Forgotten Signal",
    id: "bk033",
    author: "Nova Lane",
    description: "A cryptic transmission leads to an interstellar mystery.",
    pages: [],
  },
  {
    name: "Vortex Edge",
    id: "bk034",
    author: "Kai Storm",
    description: "Adventurers explore a deadly rift between dimensions.",
    pages: [],
  },
  {
    name: "Embers of Fate",
    id: "bk035",
    author: "Sienna Vale",
    description: "Destiny is forged in the fires of ancient prophecy.",
    pages: [],
  },
  {
    name: "The Silent Watcher",
    id: "bk036",
    author: "Derek Shaw",
    description: "An unseen guardian watches over a city on the brink of chaos.",
    pages: [],
  },
  {
    name: "Moonlight Masquerade",
    id: "bk037",
    author: "Elara Moon",
    description: "Under a masked ball, secrets unravel in the moonlight.",
    pages: [],
  },
  {
    name: "The Iron Labyrinth",
    id: "bk038",
    author: "Viktor Cain",
    description: "Navigating a deadly maze powered by ancient technology.",
    pages: [],
  },
  {
    name: "Crimson Tide",
    id: "bk039",
    author: "Mira Solis",
    description: "Pirates vie for control of the blood-red seas.",
    pages: [],
  },
  {
    name: "Silent Reverie",
    id: "bk040",
    author: "Felix Grey",
    description: "A dreamer trapped in a world between sleep and wakefulness.",
    pages: [],
  },
  {
    name: "The Phantom Code",
    id: "bk041",
    author: "Lena Frost",
    description: "A hacker's ghost haunts the digital realm.",
    pages: [],
  },
  {
    name: "Obsidian Crown",
    id: "bk042",
    author: "Cassian Drake",
    description: "Power struggles erupt around a mysterious black crown.",
    pages: [],
  },
  {
    name: "Starlight Runner",
    id: "bk043",
    author: "Orion Wells",
    description: "Racing through galaxies in a high-stakes chase.",
    pages: [],
  },
  {
    name: "The Last Oracle",
    id: "bk044",
    author: "Selina Cross",
    description: "A prophecy unfolds through the eyes of the last seer.",
    pages: [],
  },
  {
    name: "Neon Mirage",
    id: "bk045",
    author: "Jax Nova",
    description: "Illusions blur the line between reality and fantasy.",
    pages: [],
  },
  {
    name: "Iron Shadows",
    id: "bk046",
    author: "Tessa Vail",
    description: "A city built on steel hides deadly secrets.",
    pages: [],
  },
  {
    name: "The Echo Chamber",
    id: "bk047",
    author: "Luca Rhine",
    description: "Voices from the past echo in a futuristic prison.",
    pages: [],
  },
  {
    name: "Solar Veins",
    id: "bk048",
    author: "Nova Quinn",
    description: "Energy flows through those chosen by the sun.",
    pages: [],
  },
  {
    name: "The Glass Labyrinth",
    id: "bk049",
    author: "Dahlia Moon",
    description: "Trapped in a maze of mirrors and illusions.",
    pages: [],
  },
  {
    name: "Phantom Horizon",
    id: "bk050",
    author: "Evan Cross",
    description: "The boundary between worlds begins to fade.",
    pages: [],
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
