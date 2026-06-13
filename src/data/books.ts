export interface BookTestimonial {
  quote: string;
  source: string;
  outlet: string;
}

export interface Book {
  id: string;
  number: number;
  title: string;
  year: string;
  coverImage: string;
  briefDescription: string;
  fullDescription: string;
  interstitialQuote: string;
  genre: string;
  setting: string;
  testimonials: BookTestimonial[];
}

export const books: Book[] = [
  {
    id: "the-torch-betrayal",
    number: 1,
    title: "The Torch Betrayal",
    year: "2019",
    coverImage: "/the_torch_betrayal_2d.jpg",
    briefDescription:
      "London, 1942. When Operation Torch invasion plans go missing, OSS agent Conor Thorn partners with MI6 agent Emily Bright to hunt the traitor before the Allies pay in blood.",
    fullDescription:
      "London, 1942. OSS agent Conor Thorn seeks redemption after a failed Tangier mission. When the plans for Operation Torch—the Allied invasion of North Africa—go missing, he partners with MI6 agent Emily Bright to find the traitor before it's too late. Their investigation uncovers Nazi sympathizers, Soviet double-agents, and Vatican clergy with hidden agendas. A high-stakes WWII thriller inspired by true events.",
    interstitialQuote:
      "Atmospheric and tense, with plenty of treachery and a heavy dose of history.",
    genre: "WWII Espionage Thriller",
    setting: "London & North Africa, 1942",
    testimonials: [
      {
        quote:
          "Atmospheric and tense, with plenty of treachery and a heavy dose of history.",
        source: "Steve Berry",
        outlet: "New York Times Bestselling Author",
      },
      {
        quote:
          "Suspenseful espionage thriller...Jack Higgins fans will find a lot to like.",
        source: "Publisher's Weekly",
        outlet: "Publisher's Weekly",
      },
      {
        quote:
          "A classic spy story in the vein of John Le Carré or Daniel Silva.",
        source: "BlueInk Reviews",
        outlet: "BlueInk Reviews",
      },
      {
        quote:
          "Crisp writing, plot reveals that pop like firecrackers, cinematic excitement.",
        source: "Foreword Reviews",
        outlet: "Foreword Reviews",
      },
      {
        quote:
          "Taut and terrific...a deadly cat-and-mouse game...gripping twists and explosive ending.",
        source: "James Thayer",
        outlet: "Author",
      },
      {
        quote: "A well-crafted espionage tale set during World War II.",
        source: "Kirkus Reviews",
        outlet: "Kirkus Reviews",
      },
    ],
  },
  {
    id: "the-ultra-betrayal",
    number: 2,
    title: "The Ultra Betrayal",
    year: "2020",
    coverImage: "/the_ultra_betrayal_2d.jpg",
    briefDescription:
      "Autumn 1942. Thorn investigates a vanishing Swedish cryptographer—and when his MI6 colleague disappears too, he uncovers a Nazi conspiracy that could doom the Allied war effort.",
    fullDescription:
      "Autumn 1942. OSS agent Conor Thorn investigates the disappearance of a Swedish cryptographer stationed in Britain. When his MI6 colleague also vanishes while pursuing the code-breaker to Stockholm, Thorn uncovers a Nazi conspiracy. Suspecting the cryptographer's wife and racing against time, Thorn must prevent classified intelligence from reaching enemy hands before it compromises Allied operations and costs lives.",
    interstitialQuote:
      "Brilliantly researched thriller bringing WWII espionage to life with expectations exceeded.",
    genre: "WWII Espionage Thriller",
    setting: "Britain & Stockholm, 1942",
    testimonials: [
      {
        quote:
          "Brilliantly researched thriller bringing WWII espionage to life with expectations exceeded.",
        source: "Jack Carr",
        outlet: "New York Times Bestselling Author",
      },
      {
        quote:
          "Plot twists galore set in ominous WWII atmosphere satisfy thriller readers.",
        source: "Steve Berry",
        outlet: "New York Times Bestselling Author",
      },
      {
        quote:
          "Thorn hunts a missing cryptographer in a compelling thriller with a breathtaking twist.",
        source: "Anthony Franze",
        outlet: "Author of The Outsider",
      },
      {
        quote:
          "Plot zings along like ricocheting bullets with meticulously researched characters.",
        source: "James R. Benn",
        outlet: "Billy Boyle Mystery Series",
      },
      {
        quote:
          "Classic spy thriller with adrenaline-fueled action and daring rescues throughout.",
        source: "IndieReader",
        outlet: "IndieReader",
      },
      {
        quote:
          "Detailed prose excellently evokes WWII spycraft with historical cameos included.",
        source: "Kirkus Reviews",
        outlet: "Kirkus Reviews",
      },
    ],
  },
  {
    id: "the-unquiet-genius",
    number: 3,
    title: "The Unquiet Genius",
    year: "2021",
    coverImage: "/the_unquiet_genius_2d.jpg",
    briefDescription:
      "December 1942. Thorn hunts a brilliant nuclear physicist hiding in Italy—racing against the Nazis, Russian operatives, and a Vatican monsignor, all chasing the same dangerous secret.",
    fullDescription:
      "December 1942. Elite OSS agent Conor Thorn pursues a brilliant nuclear physicist hiding in Italy whose knowledge could hand the Nazis an atomic advantage. Thorn reunites with his MI6 colleague to prevent the secret from reaching enemy hands while competing against Russian forces, a Vatican monsignor, and other rival parties. A rip-roaring, Nazi-punching World War II thriller about duty, sacrifice, and doing right regardless of cost.",
    interstitialQuote: "Not to be missed, this one will blow you away!",
    genre: "WWII Espionage Thriller",
    setting: "Italy & the Vatican, December 1942",
    testimonials: [
      {
        quote: "Not to be missed, this one will blow you away!",
        source: "Jack Carr",
        outlet: "Author of The Devil's Hand",
      },
      {
        quote: "A tantalizing premise with a plot to savor.",
        source: "Steve Berry",
        outlet: "New York Times Bestselling Author",
      },
      {
        quote:
          "This rip-roaring, Nazi-punching World War II thriller will keep spy fans engaged.",
        source: "BookLife",
        outlet: "Publishers Weekly",
      },
      {
        quote:
          "A high-stakes spy thriller about doing right regardless of cost.",
        source: "Clarion Reviews",
        outlet: "Foreword",
      },
      {
        quote: "Buckle up and get ready for the ride.",
        source: "Steven Netter",
        outlet: "Best Thriller Books",
      },
      {
        quote: "A high-stakes World War II thriller inspired by true events.",
        source: "Kirkus Reviews",
        outlet: "Kirkus Reviews",
      },
    ],
  },
  {
    id: "trust-no-one",
    number: 4,
    title: "Trust No One",
    year: "2022",
    coverImage: "/trust_no_one_2d.jpg",
    briefDescription:
      "Algiers, Winter 1942. Dismissed from their agencies, Conor and Emily Thorn are pulled back in to help Eisenhower recover an archive that could tear the Allied alliance apart.",
    fullDescription:
      "Algiers, Winter 1942. Conor and Emily Thorn, recently dismissed from the OSS and MI6 respectively, are recruited to help General Eisenhower recover a rumored archive about an assassination plot threatening Allied unity. Operating in Nazi-occupied territory, they must navigate political intrigue and treachery while recovering from a brutal assault—and they can trust no one.",
    interstitialQuote: "A propulsive, masterfully crafted WWII thriller.",
    genre: "WWII Espionage Thriller",
    setting: "Algiers & North Africa, Winter 1942",
    testimonials: [
      {
        quote: "A propulsive, masterfully crafted WWII thriller.",
        source: "Chris Wallace",
        outlet: "CNN Anchor & Bestselling Author",
      },
      {
        quote: "Gripping WWII espionage thriller rich in history and suspense.",
        source: "BookLife Reviews",
        outlet: "Publishers Weekly",
      },
      {
        quote:
          "Loyalties are tested in Trust No One—a wild, gruesome, enthralling adventure-filled WWII spy thriller.",
        source: "Clarion Reviews",
        outlet: "Foreword",
      },
      {
        quote: "The realism Dyer spins within his novels is pure genius.",
        source: "CDR J.R. Olson",
        outlet: "US Navy (Ret.)",
      },
      {
        quote: "A gritty and visceral historical thriller.",
        source: "The Independent Review of Books",
        outlet: "The Independent Review of Books",
      },
      {
        quote:
          "Dyer's latest succeeds as both a standalone and a compelling series installment.",
        source: "BlueInk Reviews",
        outlet: "BlueInk Reviews",
      },
    ],
  },
  {
    id: "nobodys-fool",
    number: 5,
    title: "Nobody's Fool",
    year: "2026",
    coverImage: "/nobodys_fool.jpg",
    briefDescription:
      "The fifth Conor Thorn novel. As the war in Europe nears its end, Thorn is drawn into the most personal and dangerous mission of his career.",
    fullDescription:
      "As the war in Europe approaches its final, desperate days, OSS agent Conor Thorn is pulled into a mission that cuts closer to home than any before it. Navigating a world of shifting allegiances, buried secrets, and old enemies, Thorn must decide how far he is willing to go—and what he is willing to sacrifice—to see justice done.",
    interstitialQuote:
      "Daring infiltrations, military secrets, dirty politics.",
    genre: "WWII Espionage Thriller",
    setting: "Europe, 1945",
    testimonials: [
      {
        quote: "Gripping WWII espionage thriller rich in history and suspense.",
        source: "BookLife Reviews",
        outlet: "Publishers Weekly",
      },
      {
        quote: "A propulsive, masterfully crafted WWII thriller.",
        source: "Chris Wallace",
        outlet: "CNN Anchor & Bestselling Author",
      },
      {
        quote: "Not to be missed, this one will blow you away!",
        source: "Jack Carr",
        outlet: "New York Times Bestselling Author",
      },
    ],
  },
];

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
