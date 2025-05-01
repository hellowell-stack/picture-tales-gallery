
export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
}

export interface Photo {
  id: string;
  albumId: string;
  title: string;
  description: string;
  story: string;
  image: string;
  date: string;
}

export const albums: Album[] = [
  {
    id: "nature-wonders",
    title: "Nature's Wonders",
    description: "Breathtaking landscapes and natural beauty from around the world",
    coverImage: "photo-1469474968028-56623f02e42e",
    date: "April 2023",
  },
  {
    id: "urban-geometry",
    title: "Urban Geometry",
    description: "Exploring shapes, patterns, and symmetry in modern architecture",
    coverImage: "photo-1486718448742-163732cd1544",
    date: "March 2023",
  },
  {
    id: "wildlife",
    title: "Wildlife Encounters",
    description: "Intimate moments with the animal kingdom",
    coverImage: "photo-1472396961693-142e6e269027",
    date: "February 2023",
  }
];

export const photos: Photo[] = [
  // Nature's Wonders Album Photos
  {
    id: "nat-1",
    albumId: "nature-wonders",
    title: "Mountain Majesty",
    description: "Alpine peaks catching the morning light",
    story: "I woke up at 4am to hike to this vantage point. The frigid air burned my lungs as I climbed, but when the first light hit these peaks, turning them gold against the cool blue shadows, every step became worth it. This moment lasted barely five minutes before clouds rolled in.",
    image: "photo-1469474968028-56623f02e42e",
    date: "April 15, 2023",
  },
  {
    id: "nat-2",
    albumId: "nature-wonders",
    title: "Forest Light",
    description: "Sunbeams cutting through morning mist",
    story: "While camping in an ancient forest, I noticed how the morning mist created these ethereal light beams through the trees. It felt like being in a cathedral made by nature, with the silence broken only by distant birdsong. I sat for nearly an hour watching the light change as the mist slowly burned away.",
    image: "photo-1513836279014-a89f7a76ae86",
    date: "April 18, 2023",
  },
  {
    id: "nat-3",
    albumId: "nature-wonders",
    title: "Ocean's Power",
    description: "Dramatic wave formations at sunset",
    story: "This was shot during a winter storm that battered the coastline for three days straight. I was nearly blown off my feet several times trying to get close enough for this shot. The raw power of the ocean both terrifies and fascinates me—there's something humbling about standing before such an elemental force.",
    image: "photo-1500375592092-40eb2168fd21",
    date: "April 20, 2023",
  },
  {
    id: "nat-4",
    albumId: "nature-wonders",
    title: "River Valley",
    description: "Serene river flowing through mountains",
    story: "I discovered this valley while getting thoroughly lost on a solo hiking trip. My phone had died, and I was following the river hoping it would lead to civilization. Instead, it led me to this peaceful scene that made me forget my worries for a moment. Sometimes getting lost leads to the best discoveries.",
    image: "photo-1504893524553-b855bce32c67",
    date: "April 25, 2023",
  },
  {
    id: "nat-5",
    albumId: "nature-wonders",
    title: "Star Trails",
    description: "Night sky over mountain peaks",
    story: "To capture these star trails, I spent a freezing night alone on this mountain peak. I set up my camera for a 3-hour exposure and huddled in my sleeping bag, occasionally checking that everything was still working. The complete silence of the night sky is something I'll never forget—it feels like you can hear the stars moving.",
    image: "photo-1470813740244-df37b8c1edcb",
    date: "April 29, 2023",
  },

  // Urban Geometry Album Photos
  {
    id: "urb-1",
    albumId: "urban-geometry",
    title: "Spiral Staircase",
    description: "Modern architectural marvel",
    story: "I discovered this staircase inside a little-known public building. What struck me was how it seemed to defy gravity—each step flowing into the next like a ribbon of concrete. I returned three times at different hours to see how the light played with its curves, finally capturing this shot in the late afternoon when the shadows were at their most dramatic.",
    image: "photo-1486718448742-163732cd1544",
    date: "March 3, 2023",
  },
  {
    id: "urb-2",
    albumId: "urban-geometry",
    title: "Glass Reflections",
    description: "Modern building facades creating abstract patterns",
    story: "While wandering downtown after a rainstorm, I noticed how the wet glass created these perfect reflections, doubling the complexity of the architecture. It was like looking at the building and its dream-version simultaneously. I waited nearly an hour for the clouds to create just the right contrast in the reflection.",
    image: "photo-1496307653780-42ee777d4833",
    date: "March 10, 2023",
  },
  {
    id: "urb-3",
    albumId: "urban-geometry",
    title: "Concrete Waves",
    description: "Bold architectural statement in the city center",
    story: "This building was controversial when first constructed—many locals considered it an eyesore. I've always been fascinated by its unconventional form, how it seems to defy the rigid grid of the surrounding city. To me, it represents the city's willingness to embrace the unusual, to allow space for creative expression in urban planning.",
    image: "photo-1460574283810-2aab119d8511",
    date: "March 15, 2023",
  },
  {
    id: "urb-4",
    albumId: "urban-geometry",
    title: "Skyward",
    description: "Looking up at skyscraper convergence",
    story: "I lay on my back on the cold concrete for this shot, drawing curious stares from passersby. Looking up made me feel both tiny and connected to these massive structures—like being at the bottom of an urban canyon. The buildings seemed to be leaning in to share secrets with each other, creating a moment of intimacy in the dense city.",
    image: "photo-1449157291145-7efd050a4d0e",
    date: "March 22, 2023",
  },
  {
    id: "urb-5",
    albumId: "urban-geometry",
    title: "Ceiling Detail",
    description: "Intricate patterns in modern architecture",
    story: "This ceiling is from our city's newest museum, and I was captivated by how traditional geometric patterns were reinterpreted in contemporary materials. The architect was inspired by ancient Islamic geometric designs but rendered them in steel and glass. I spent nearly two hours just looking up, watching how the changing light transformed the patterns throughout the afternoon.",
    image: "photo-1439337153520-7082a56a81f4",
    date: "March 28, 2023",
  },

  // Wildlife Album Photos
  {
    id: "wild-1",
    albumId: "wildlife",
    title: "Forest Deer",
    description: "Deer in morning mist",
    story: "I spent three mornings in a row hiding in a blind at the forest edge before these deer appeared. They moved so silently through the mist that they seemed like ghosts, materializing and vanishing between heartbeats. The young one looked directly at me for just a moment—curious, unafraid, as if assessing whether I belonged in its world.",
    image: "photo-1472396961693-142e6e269027",
    date: "February 5, 2023",
  },
  {
    id: "wild-2",
    albumId: "wildlife",
    title: "Curious Cat",
    description: "Tabby cat with piercing gaze",
    story: "This neighborhood cat visits my garden every afternoon, following the same route through the flower beds. He's cautious but curious, always keeping a safe distance while studying me. This day, he seemed particularly contemplative, sitting perfectly still for nearly ten minutes while watching me arrange plants. His focus was so intense it felt like being interviewed.",
    image: "photo-1582562124811-c09040d0a901",
    date: "February 12, 2023",
  },
  {
    id: "wild-3",
    albumId: "wildlife",
    title: "Mountain Goats",
    description: "Goats navigating steep terrain",
    story: "I followed these mountain goats for three hours, climbing terrain I had no business attempting in regular hiking boots. Their effortless navigation of the near-vertical rockface was humbling—what was a dangerous climb for me was a casual stroll for them. At one point, the younger one lost its footing, and my heart stopped, but it recovered with a grace that seemed impossible.",
    image: "photo-1438565434616-3ef039228b15",
    date: "February 18, 2023",
  },
  {
    id: "wild-4",
    albumId: "wildlife",
    title: "Humpback Breach",
    description: "Whale breaking the ocean surface",
    story: "Our small boat had been following this pod of whales for about an hour when this massive humpback suddenly breached just 50 yards away. The sound was like thunder, and the spray soaked us completely. I barely had time to raise my camera before it crashed back into the water. It was both terrifying and exhilarating—a reminder of how small we are compared to these magnificent creatures.",
    image: "photo-1518877593221-1f28583780b4",
    date: "February 23, 2023",
  },
  {
    id: "wild-5",
    albumId: "wildlife",
    title: "Penguin Pair",
    description: "Two penguins standing on a rocky shore",
    story: "These two seemed inseparable during my entire week observing the colony. While other penguins came and went, these two always returned to this same rock, sometimes preening each other, sometimes just standing in companionable silence. The anthropomorphic part of me imagined them as an old married couple, comfortable in their routine and each other's presence.",
    image: "photo-1441057206919-63d19fac2369",
    date: "February 28, 2023",
  }
];

export const getAlbums = (): Album[] => {
  return albums;
};

export const getAlbumById = (id: string): Album | undefined => {
  return albums.find(album => album.id === id);
};

export const getPhotosByAlbumId = (albumId: string): Photo[] => {
  return photos.filter(photo => photo.albumId === albumId);
};

export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find(photo => photo.id === id);
};
