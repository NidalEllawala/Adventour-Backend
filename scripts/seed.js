const { sequelize } = require("../model/index");

const {
  User,
  Tour,
  Booking,
  Character,
  Weapon,
  CharingCrossCharmer,
} = require("../model/index");

const mockUsers = [
  {
    username: "Marius",
    email: "mariusobreja@gmail.com",
    password: "pa55word",
    DOB: "1980-07-17",
  },
  {
    username: "Nidal",
    email: "nidal@gmail.com",
    password: "pa66word",
    DOB: "1980-06-16",
  },
];

const mockTours = [
  {
    title: "The Charing Cross Charmer",
    location: "Central London",
    rating: 5,
    genre: "Murder Mystery",
    briefDescription:
      "Explore the spectacular streets of London while delving into the underworld in an effort to hunt down the Charming Charing Cross killer",
    description:
      "Agatha at The Angel Islington, Barbara on Bow Street, and now Cilla on Coventry Street. Three women murdered and a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is before they strike again?",
    distance: 4.1,
    price: 25.0,
    clues: 16,
    images:
      "https://www.tate.org.uk/art/images/work/P/P13/P13539_10.jpg",
  },
  {
    title: "The Da Vinci Code",
    location: "Paris",
    rating: 4,
    genre: "Art",
    briefDescription:
      "Absorb all that the Parisian art scene has to offer!",
    description:
      "Take to the streets of Paris and follow Da Vinci's trail to find the Mona Lisa!",
    distance: 3.9,
    price: 30.0,
    images: "https://www.museumnext.com/wp-content/uploads/2019/01/louvre_popular.jpg",
  },
  {
    title: "London in Bloom",
    location: "Central London",
    rating: 3,
    genre: "Botanical",
    briefDescription:
      "Come and see the most vibrant floral displays London has to offer",
    description:
      "Take a stroll around London and be charmed by its stunning flora and fauna. Tour highlights include Columbia Flower Market and the Sky Garden.",
    distance: 3.9,
    price: 30.0,
    images:
      "https://images.squaremeal.co.uk/cloud/article/9513/images/sky-garden-venue_05122019043209.jpg?w=1000",
  },
  {
    title: "Scotland Yard Crimes",
    location: "Central London",
    rating: 4,
    genre: "murders",
    briefDescription:
      "Would you like to explore the spectacular streets of London whilst solving a murder mystery case?",
    description:
      "Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?",
    distance: 3.9,
    price: 30.0,
    images:
      "https://www.mike-neville-walks-and-talks.co.uk/images/scotland-yard.jpg",
  },
  {
    title: "The Rise of an Empire",
    location: "Rome",
    rating: 4,
    genre: "Historic",
    briefDescription:
      "Discover the Vatican City!",
    description:
      "Discover Vatican City including the Vatican Museums, St. Peter’s Basilica, and the Sistine Chapel. Home to the world’s largest private portfolio of artwork, the Vatican is a must-see for visitors to Rome!",
    distance: 4.5,
    price: 30.0,
    images:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/MSNBC/Components/Photo/_new/romanempire.jpg",
  },
  {
    title: "Thames River Sightseeing",
    location: "Central London",
    rating: 5,
    genre: "Sightseeing",
    briefDescription:
      "Sit back, relax, and take in some of the finest sights in London without having to move an inch",
    description:
      "Marrying style with insight, the Thames River Tour sails along the river on spacious boats such as the 524-seat Thomas Doggett. Soak up some history with a multilingual audio system, which delivers commentary about iconic landmarks along the leisurely route from Westminster to Greenwich.",
    distance: 3.9,
    price: 30.0,
    images:
      "https://image.shutterstock.com/image-photo/ass-hole-white-buffalo-600w-1021614685.jpg",
  },
];

const mockBooking = {
  password: 12345,
  partySize: 2,
  joined: 0,
  date: "2021-10-19 10:23:54+02",
  UserId: 1,
  TourId: 1,
  chapter: 1,
  open: true,
};

const mockCharacter = [
  {
    name: "Penny Maroon",
    image: "https://i.imgur.com/OmMVpo2.png",
    TourId: 1,
    description: "Vengeful school peer bullied by Agatha Marpe 15 years ago.",
  },
  {
    name: "Violet Jellicoe",
    image: "https://i.imgur.com/SPqcSOS.png",
    TourId: 1,
    description: "The envious and mistreated best friend of Barbie Dahl.",
  },
  {
    name: "Andrew Looney",
    image: "https://i.imgur.com/scfpRpL.png",
    TourId: 1,
    description: "Eerie games salesman found unconscious near crime scenes.",
  },
  {
    name: "Sara Plum",
    image: "https://i.imgur.com/52dpDVw.png",
    TourId: 1,
    description:
      "Cilla's PA. Found Cilla's plans to siphon money from victims.",
  },
  {
    name: "Adelphi Darker",
    image: "https://i.imgur.com/JqKTfnC.png",
    TourId: 1,
    description: "Owns Darker Bros (a huge game manufacturer) with Duke.",
  },
  {
    name: "Duke Darker",
    image: "https://i.imgur.com/iOFGQ4l.png",
    TourId: 1,
    description:
      "Had affair with Cilla, who later blackmailed him for his wealth.",
  },
  {
    name: "Tim Tycoon",
    image: "https://i.imgur.com/nHk8EMi.png",
    TourId: 1,
    description:
      "Son of a senile property mogul. Saw father's wife Cilla have an affair.",
  },
  {
    name: "Henrietta Green",
    image: "https://i.imgur.com/hJKWZA3.png",
    TourId: 1,
    description: "Seen near crime scene with a dagger in her handbag.",
  },
  {
    name: "Dr. Agon",
    image: "https://i.imgur.com/eR1lOia.png",
    TourId: 1,
    description:
      "Psychiatrist. Lust for Cilla always denied as not filthy rich.",
  },
  {
    name: "Una Well",
    image: "https://i.imgur.com/floiGbb.png",
    TourId: 1,
    description:
      "Psychiatrist. Lust for Cilla always denied as not filthy rich.",
  },
  {
    name: "Agret Werop",
    image: "https://i.imgur.com/D5ITkWl.png",
    TourId: 1,
    description:
      "Psychiatrist. Lust for Cilla always denied as not filthy rich.",
  },
  {
    name: "Sam Sacrifice",
    image: "https://i.imgur.com/ToLNRcR.png",
    TourId: 1,
    description:
      "Psychiatrist. Lust for Cilla always denied as not filthy rich.",
  },
];

const mockWeapon = [
  {
    name: "Dagger",
    image:
      "https://lh3.googleusercontent.com/proxy/yPAoCbptoFcLvT_h8N34CFrpf1F02lLjuZ4WWeT8wuJsf5MG_FUMbP7Eim4o-L-nNF0b5Rno1BNXVjsev441oYOdkPczWSYsvHD0NwDh5YB2jyu_U3GCMTfbJyY81VwbdA3Wu8etyteMV9nw9sY5_XDhnYgW2XRy0uh96KPHHLxxLQgcllyhyEMcy8s",
    TourId: 1,
    number: 1910,
  },
  {
    name: "Rope",
    image:
      "https://media.istockphoto.com/vectors/rope-in-cartoon-style-vector-id1159542493?k=6&m=1159542493&s=170667a&w=0&h=wjH2ca30O3JW08j2_uytbN6uRCxwh5_4aeuPfi6Yl-U=",
    TourId: 1,
    number: 8971,
  },
  {
    name: "Boot",
    image:
      "https://lh3.googleusercontent.com/proxy/wcJTU5jAqRu70VXwJ8EZ6GYMiqZViBO7pP6g6zyLO1pU__NodHRcVAdW0TgDG_IqKMWU4tr7QUKLH7EjVnzs8VhW",
    TourId: 1,
    number: 1853,
  },
  {
    name: "Suitcase",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/04/Suitcase-PNG-Pic.png",
    TourId: 1,
    number: 1642,
  },
  {
    name: "Axe",
    image:
      "https://cdn.pixabay.com/photo/2020/01/30/00/39/axe-4804073_960_720.png",
    TourId: 1,
    number: 1818,
  },
  {
    name: "Rifle",
    image:
      "https://www.goodfreephotos.com/albums/vector-images/rifle-cartoon-vector-file.png",
    TourId: 1,
    number: 1535,
  },
];

const mockCharingCrossCharmer = [
  {
    clue: "Between Cunnigham and Beatty you’ll discover the surname of a suspect who can be removed from your inquiries. Stay in Trafalgar Square for your next clue.",
    charImage: "",
    direction:
      "Welcome detective, thanks for joining me here in the lovely Trafalgar Square. Time is of the essence, you had better get started! Press the clue icon to see your first clue, then, when you're ready, click on the remaining tabs and eliminate suspects and weapons from your inquiries!",
    hint: "Spot 3 statues in a row",
    answer: "Violet Jellicoe",
  },
  {
    clue: "The year Charles James Napier died is an important number and matches up with a weapon that can be eliminated.",
    charImage: "",
    direction: "Stay where you are, there's more to be found here!",
    hint: "Find the statue of Napier! Fun fact: The National Gallery was founded in 1824 and houses over 2,300 paintings (and entry to the popular, main collection is free).",
    answer: "Boot",
  },
  {
    clue: "With your back to Macaroni House, spot a sequence of windows and Corinthian columns. Above them, is an attic with carved figures, oval windows and swags. The four figures are carrying a weapon that can be removed from your investigation.",
    charImage: "",
    direction:
      "Now, go directly to Sir Henry Havelock. Facing away from the National Portrait Gallery, turn left and safely hop across the pedestrian crossing. Continue striaght along the Strand for approximately 1km until you reach Macaroni House.",
    hint: "Weapon rhymes with tax.",
    answer: "Axe",
  },
  {
    clue: "Spot the statue in honour of the freedom fighter who died in 1964. Take the 3rd, 8th, and 10th letters from his first name and the 1st, 2nd, and 5th from his surname. Rearrange these letters to form a synonym for 'impaired', eliminate the suspect that shares a similar name.",
    charImage: "",
    direction:
      "Turn left by Macaroni House onto Montreal Place for your next Clue.",
    hint: "Statue of Jawaharlal Nehru",
    answer: "Una Well",
  },
  {
    clue: "At the end of Russell Street is Covent Garden. Find the family motto of the Dukes of Bedford inscribed somewhere around the market. The motto contains the first name of an innocent suspect twice.",
    charImage: "",
    direction:
      "Exit India Place and turn left onto Aldwych. At the end of Aldwych turn right to cross the pedestrian crossing. Then take your first right onto Wellington Street. Using the left hand pavement follow Wellington street until you reach Russell Street.",
    hint: "Outside of the market building. Look up high for family crest with inscription underneath. Don't panic, after all, Whatever Will Be, Will Be.",
    answer: "Sara Plum",
  },
  {
    clue: "Between King and Southampton is a passage that shares its name with an innocent suspect.",
    charImage: "",
    direction: "Stay where you are, but keep your eyes peeled!",
    hint: "What street is between King St. and Southampton St.?",
    answer: "Henrietta Green",
  },
  {
    clue: "Hunt for an anecdote honouring a man who met his untimely death outside a theatre. This theatre shares it’s name with an innocent suspect whose alibi has been verified. This suspect can be removed from your investigation.",
    charImage: "",
    direction:
      "Exit Covent Garden via Southampton Street using the right-hand pavement. Then turn right onto Maiden Lane where you'll find your next clue.",
    hint: "Look for a green circular plaque in honour of William Terris",
    answer: "Adelphi Darker",
  },
  {
    clue: "Welcome to St. Martin's Place. Spot the missing word from the following list: fortitude, devotion, humanity. Coincidentally, the missing word is the surname of an innocent suspect that can be eliminated from your inquiries.",
    charImage: "",
    direction:
      "At the end of Maiden Lane, cross over onto Chandos Place. Follow Chandos Place to the end, and turn right onto William IV Street. At the end, cross to the left-hand pavement for your next clue.",
    hint: "Look up at large memorial",
    answer: "Sam Sacrifice",
  },
  {
    clue: "Find the building that was once the site of a postal office (even once the price of postage had doubled). The name of this postal service matches up to the first name of an innocent suspect. At the end of Gerrard St turn left onto Wardour St for your next clue.",
    charImage: "",
    direction:
      "Cross over to the National Portrait Gallery and turn right. Follow the Charing Cross road and take the first left onto Irving Street. At the end of Irvihng Street turn slightly right and walk along the edge of Leicester Court. At the end of Leicester Court cross over the road onto Newport Place. At the end of the road turn left onto Gerrard Street. Your next clue can be found on Gerrard Street.",
    hint: "Find the correct green circular plaque (there are a few).",
    answer: "Penny Maroon",
  },
  {
    clue: 'A suspect comes rushing towards you, they appear well dressed but flustered - "First of all, I did not kill those women - I have an alibi for each of those dreadful nights with eye witness accounts. I wanted to discuss with you another suspect - Andrew Looney. He is a patient of mine. Andrew suffers from severe memory blackouts as a result of a head injury from the war. Now I`m not necessarily accussing him, but he may not remember the incidents even if he was involved. Andrew`s mind is becoming increasingly fragile and he could potentially be a target of manipulation". The Chinatown Gate on Wardour Street features many ancient motifs. A popular Chinese symbol featured on the gate is also the name of the suspect who just met you. Can you figure out who? They have a watertight alibi and can be removed from your inquiries.',
    charImage: "",
    direction: "Don't rush off too fast! There's someone here to see you...",
    hint: "A mythical beast.",
    answer: "Dr. Agon",
  },
  {
    clue: "A number on the Old Exchange & Bullion Office matches up to a weapon that can be removed from your investigation. You're getting close detective, keep it up!",
    charImage: "",
    direction: "Don't wander too far",
    hint: "Just past the Chinatown Gate. Number in reverse",
    answer: "Rope",
  },
  {
    clue: "Their heart has strong sympathies, but what does their mind have? Remove the 's' and remove the suspect who's name is an anagram of the clue.",
    charImage: "",
    direction:
      "Turn right onto Coventry Street after the crossing. Follow Coventry Street until you reach Picadilly Circus. Stop by the Shaftesbury Memorial Fountain for your next clue.",
    hint: "Look closely at the inscriptions on the fountain.",
    answer: "Agret Werop",
  },
  {
    clue: "To my left is Caduceus, and a bundle of crops. To my right is a wood stock. What weapon am I? The answer can be removed from your inquiries.",
    charImage: "",
    direction:
      "Walk down Regent Street St. James', using the left-hand pavement. Your next clue can be found somewhere along this street.",
    hint: "Look up high at the symbols on No. 1 Regent Street St. James`s building.",
    answer: "Rifle",
  },
  {
    clue: "Discover the name of the second son of George III. Solve this clue correctly and the answer will match up to the first name of an innocent supect. Now walk down to the bottom of the steps.",
    charImage: "",
    direction:
      "Continue down Regent Street St. James' which leads onto Waterloo Place, crossing over Pall Mall. At the end of Waterloo Place, forss over Carlton Terrace and onto the large set of steps.",
    hint: "Look for a plaque. What was Frederick`s title?",
    answer: "Duke Darker",
  },
  {
    clue: "But what year is it? The date matches up to weapon that can be eliminated. Congratulations! You've almost cracked the case!",
    charImage: "",
    direction:
      "Turn left onto The Mall. Walk until you reach the edge of the steps before the Admiralty Arch landmark. The latin inscription at the top of the arch translates to: `In the tenth year of King Edward VII, to Queen Victoria from most grateful citizens...` followed by an important year...",
    hint: "You're on your own now Detective, you've got this!",
    answer: "Dagger",
  },
  {
    clue: "You meet the last innocent suspect under the Admiralty Arch, he tips his hat, and drew his name. Who is our final innocent suspect?",
    charImage: "",
    direction: "We're so close to the end, get your thinking cap on detective!",
    hint: "... well, whodunit??",
    answer: "Andrew Looney",
  },
];

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced!");
    await User.bulkCreate(mockUsers);
    console.log("Users created!");
    await Tour.bulkCreate(mockTours);
    console.log("Tour created!");
    await Booking.create(mockBooking);
    console.log("Booking created!");
    await Character.bulkCreate(mockCharacter);
    console.log("Character created!");
    await Weapon.bulkCreate(mockWeapon);
    console.log("Weapon created!");
    await CharingCrossCharmer.bulkCreate(mockCharingCrossCharmer);
    console.log("CharingCrossCharmer created!");
  } catch (error) {
    console.log(error);
  }
})();
