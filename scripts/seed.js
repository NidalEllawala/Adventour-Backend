const { sequelize } = require('../model/index');

const {
  User,
  Tour,
  Booking,
  Character,
  Weapon,
  CharingCrossCharmer
} = require('../model/index');

const mockUsers = [
  {
    username: 'Marius',
    email: 'mariusobreja@gmail.com',
    password: 'pa55word',
    DOB: '1980-07-17'
  },
  {
    username: 'Nidal',
    email: 'nidal@gmail.com',
    password: 'pa66word',
    DOB: '1980-06-16'
  }
];

const mockTours = [
  {
    title: 'The Charing Cross Charmer',
    location: 'Central London',
    rating: 5,
    genre: 'murders mystery',
    briefDescription:
      'Would you like to explore the spectacular streets of London whilst solving a murder mystery case?',
    description:
      'Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?',
    distance: 4.1,
    price: 25.0,
    clues: 16,
    images:
      'https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg1NjI4MDA3NzUz/jack-the-ripper-2.jpg',
  },
  {
    title: 'A monopoly of murder',
    location: 'Central London',
    rating: 4,
    genre: 'murders',
    briefDescription:
      'Would you like to explore the spectacular streets of London whilst solving a murder mystery case?',
    description:
      'Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?',
    distance: 3.9,
    price: 30.0,
    images: 'https://i.ytimg.com/vi/cPWFE4o2Ao0/maxresdefault.jpg',
  },
  {
    title: 'The strangest things',
    location: 'Central London',
    rating: 3,
    genre: 'history',
    briefDescription:
      'Would you like to explore the spectacular streets of London whilst solving a murder mystery case?',
    description:
      'Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?',
    distance: 3.9,
    price: 30.0,
    images:
      'https://killertrails.co.uk/wp-content/uploads/2020/01/CityOfLondon_801x801px_x-324x324.jpg',
  },
  {
    title: 'Scotland Yard Crimes',
    location: 'Central London',
    rating: 4,
    genre: 'murders',
    briefDescription:
      'Would you like to explore the spectacular streets of London whilst solving a murder mystery case?',
    description:
      'Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?',
    distance: 3.9,
    price: 30.0,
    images:
      'https://www.mike-neville-walks-and-talks.co.uk/images/scotland-yard.jpg',
  },
  {
    title: 'Criminal women',
    location: 'Central London',
    rating: 4,
    genre: 'murders',
    briefDescription:
      'Would you like to explore the spectacular streets of London whilst solving a murder mystery case?',
    description:
      'Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?',
    distance: 4.5,
    price: 30.0,
    images:
      'https://images-na.ssl-images-amazon.com/images/I/515d6CW65tL._SX345_BO1,204,203,200_.jpg',
  },
  {
    title: 'Criminal ass',
    location: 'Central London',
    rating: 5,
    genre: 'buffalo',
    briefDescription:
      'Would you like to explore the spectacular streets of London whilst solving a murder mystery case?',
    description:
      'Agatha at The Angel Islington… Barbara on Bow Street… And now Cilla on Coventry Street. Three seduced ladies were murdered with a deliberate trail of taunting calling cards left by the cunning culprit. You face your most formidable challenge yet, with wits matched against an egotistical maniac. Can you deduce who the serial killer is and put an end to this sequence of catastrophes before they strike again?',
    distance: 3.9,
    price: 30.0,
    images:
      'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg',
  },
];

const mockBooking = {
  password: 12345,
  partySize: 2,
  joined: 0,
  date: '2021-10-19 10:23:54+02',
  UserId: 1,
  TourId: 1,
  chapter: 1,
  open: true
};

const mockCharacter = [
  {
    name: 'Penny Maroon',
    image: 'https://i.imgur.com/OmMVpo2.png',
    TourId: 1,
    description: 'Vengeful school peer bullied by Agatha Marpe 15 years ago.'
  },
  {
    name: 'Violet Jellicoe',
    image: 'https://i.imgur.com/SPqcSOS.png',
    TourId: 1,
    description: 'The envious and mistreated best friend of Barbie Dahl.'
  },
  {
    name: 'Andrew Looney',
    image: 'https://i.imgur.com/scfpRpL.png',
    TourId: 1,
    description: 'Eerie games salesman found unconscious near crime scenes.'
  },
  {
    name: 'Sara Plum',
    image: 'https://i.imgur.com/52dpDVw.png',
    TourId: 1,
    description: "Cilla's PA. Found Cilla's plans to siphon money from victims."
  },
  {
    name: 'Adelphi Darker',
    image: 'https://i.imgur.com/JqKTfnC.png',
    TourId: 1,
    description: 'Owns Darker Bros (a huge game manufacturer) with Duke.'
  },
  {
    name: 'Duke Darker',
    image: 'https://i.imgur.com/iOFGQ4l.png',
    TourId: 1,
    description:
      'Had affair with Cilla, who later blackmailed him for his wealth.'
  },
  {
    name: 'Tim Tycoon',
    image: 'https://i.imgur.com/nHk8EMi.png',
    TourId: 1,
    description:
      "Son of a senile property mogul. Saw father's wife Cilla have an affair."
  },
  {
    name: 'Henrietta Green',
    image: 'https://i.imgur.com/hJKWZA3.png',
    TourId: 1,
    description: 'Seen near crime scene with a dagger in her handbag.'
  },
  {
    name: 'Dr. Agon',
    image: 'https://i.imgur.com/eR1lOia.png',
    TourId: 1,
    description:
      'Psychiatrist. Lust for Cilla always denied as not filthy rich.'
  },
  {
    name: 'Una Well',
    image: 'https://i.imgur.com/floiGbb.png',
    TourId: 1,
    description:
      'Psychiatrist. Lust for Cilla always denied as not filthy rich.'
  },
  {
    name: 'Agret Werop',
    image: 'https://i.imgur.com/D5ITkWl.png',
    TourId: 1,
    description:
      'Psychiatrist. Lust for Cilla always denied as not filthy rich.'
  },
  {
    name: 'Sam Sacrifice',
    image: 'https://i.imgur.com/ToLNRcR.png',
    TourId: 1,
    description:
      'Psychiatrist. Lust for Cilla always denied as not filthy rich.'
  }
];

const mockWeapon = [
  {
    name: 'Dagger',
    image:
      'https://e7.pngegg.com/pngimages/871/558/png-clipart-brown-handled-knife-illustration-knife-u5200u5b50-google-s-cartoon-knife-fruit-dagger.png',
    TourId: 1,
    number: 1910,
  },
  {
    name: 'Rope',
    image:
      'https://media.istockphoto.com/vectors/rope-in-cartoon-style-vector-id1159542493?k=6&m=1159542493&s=170667a&w=0&h=wjH2ca30O3JW08j2_uytbN6uRCxwh5_4aeuPfi6Yl-U=',
    TourId: 1,
    number: 8971,
  },
  {
    name: 'Boot',
    image:
      'https://img.pixers.pics/pho_wat(s3:700/FO/59/87/11/18/700_FO59871118_ae92c5254a9cb227439de7fed6ff1bcc.jpg,700,628,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,578,jpg)/posters-old-shoe-or-boot-cartoon-clip-art.jpg.jpg',
    TourId: 1,
    number: 1853,
  },
  {
    name: 'Lead Pipe',
    image:
      'https://thumbs.dreamstime.com/b/sticker-cartoon-old-pipe-creative-illustrated-147737535.jpg',
    TourId: 1,
    number: 1642,
  },
  {
    name: 'Axe',
    image:
      'https://thumbs.dreamstime.com/b/cartoon-ax-hatchet-vector-symbol-icon-design-beautiful-illustration-isolated-white-background-91710927.jpg',
    TourId: 1,
    number: 1818,
  },
  // {
  //   name: 'Baton',
  //   image:
  //     'https://cdn2.iconfinder.com/data/icons/policeman-6/500/vab880_17_policeman_baton_isometric_cartoon_logo_hand_silhouette-512.png',
  //   TourId: 1,
  //   number: 1940
  // },
  {
    name: 'Rifle',
    image:
      'https://image.shutterstock.com/image-vector/weapon-rifle-gun-vector-military-260nw-1954604344.jpg',
    TourId: 1,
    number: 1535,
  },
];

const mockCharingCrossCharmer = [
  {
    clue: 'Between Cunnigham and Beatty you’ll discover the surname of a suspect who can be removed from your inquiries. Stay in Trafalgar Square for your next clue.',
    charImage: '',
    direction: 'No other direction hints',
    hint: 'Spot 3 statues in a row',
    answer: 'Violet Jellicoe'
  },
  {
    clue: 'The year Charles James Napier died is an important number and matches up to a weapon that can be eliminated. Factoid: The National Gallery was founded in 1824 and houses over 2,300 paintings. Entry to the popular main collection is free of charge.',
    charImage: '',
    direction: 'No other direction hints',
    hint: 'Find satue of Napier: Use decoder in detective notebook',
    answer: 'Boot'
  },
  {
    clue: 'Stand outside Marconi House and spot a sequence of windows and Corinthian columns. Above them is an attic with carved figures, oval windows and swags. The four figures are carrying a weapon that can be removed from your investigation',
    charImage: '',
    direction:
      'Go to the statue of Sir Henry Havelock. Facing away from The National Gallery, turn left and safely cross the pedestrian crossing. Continue straight to walk along Strand. Follow busy Strand for approx. 1km until you reach 335 Marconi House (ensureroads are safe to cross, use available pedestrian crossings).',
    hint: 'Weapon rhymes with tax.',
    answer: 'Axe'
  },
  {
    clue: 'Spot the statue in honour of the freedom fighter who died in 1964. Take the 3rd 8th and 10th letters from his first name, and the 1st, 2nd and 5th letters from his surname. Rearrange these letters to create a synonym for ‘impaired’. Enter this word into the Cryptic Crossword.',
    charImage: '',
    direction:
      'After Marconi House turn left onto Montreal Place for your next clue.',
    hint: 'Statue of Jawaharlal Nehru',
    answer: 'Una Well'
  },
  {
    clue: 'At the end of Russell St is Covent Garden. Find the family motto of the Dukes of Bedford inscribed somewhere around the market. The motto contains the first name of an innocent suspect twice. Factoid: The motto translates to ‘Whatever Will Be, Will Be',
    charImage: '',
    direction:
      'Exit India Place and turn left onto Aldwych. At the end of Aldwych turn right to cross over the pedestrian crossing. Then take your first right onto Wellington St. Using the left-hand pavement follow Wellington St until you reach Russell St (3rd left), safely crossing any roads as you go.',
    hint: 'Outside of the market building. Look up high for family crest with inscription underneath',
    answer: 'Sara Plum'
  },
  {
    clue: 'This clue should also be answered in Covent Garden. Between King and Southampton is a passage that shares its name with an innocent suspect.',
    charImage: '',
    direction: 'No other direction hints',
    hint: 'What street is between King St. and Southampton St.?',
    answer: 'Henrietta Green'
  },
  {
    clue: 'Hunt for an anecdote honouring a man who met his untimely death outside a theatre. This theatre shares it’s name with an innocent suspect whose alibi has been verified. This suspect can be removed from your investigation.',
    charImage: '',
    direction:
      'Exit Covent Garden via Southampton St using the right-hand pavement. Then turn right onto Maiden Lane where you’ll find your next clue.',
    hint: 'Look for a green circular plaque in honour of William Terris',
    answer: 'Adelphi Darker'
  },
  {
    clue: 'You are now in St. Martin’s Place. Spot the missing word from the following list: fortitude, devotion, humanity. You don’t need to cross any roads to solve this clue. Press on the missing word.',
    charImage: '',
    direction:
      'At the end of Maiden Lane safely cross over the road onto Chandos Place. Follow Chandos Place to the end (safely crossing any roads) and turn right onto William IV St. At the end, cross to the left-hand pavement using the zebra crossing for your next clue.',
    hint: 'Look up at large memorial',
    answer: 'Sam Sacrifice'
  },
  {
    clue: 'Find the building that was once the site of a postal office (even once the price of postage had doubled). The name of this postal service matches up to the first name of an innocent suspect. At the end of Gerrard St turn left onto Wardour St for your next clue.',
    charImage: '',
    direction:
      'Cross over St. Martin’s Place (to be on the same side as the National Portrait Gallery) using the pedestrian crossing, then turn right. Follow Charing Cross Rd and take the first left onto Irving St. At the end of Irving St turn slightly right and walk along the edge of Leicester Square to the next corner. Turn right onto Cranbourn St, then left onto Leicester Court. At the end of Leicester Court safely cross over the road onto Newport Place. At the end of the road turn left onto Gerrard St. Your next clue can be found on Gerrard St.',
    hint: 'Find the correct green circular plaque (there are a few).',
    answer: 'Penny Maroon'
  },
  {
    clue: 'A suspect meets with you and says “First of all, I did not kill any of the victims. I have an alibi for each of those dreadful nights with eye witness accounts. I wanted to discuss with you another suspect - Pom Flipper. He is a patient of mine. Pom suffers from severe memory blackouts as the result of a head injury from the war. That’s where he picked up the nickname Pom. Now, I’m not necessarily accusing him, but he may not remember the incidents even if he was involved. Pom’s mind is becoming increasingly fragile and he could potentially be a target of manipulation. Also, something I noticed - take a look at the letters which make up the name on the calling card and Pom’s name!” The Chinatown Gate on Wardour St features many ancient motifs. A popular Chinese symbol featured on the gate is also the name of the suspect who just met you. Can you figure out who? They have a watertight alibi and can be removed from your inquiries.',
    charImage: '',
    direction: 'The next clue can also be discovered in Chinatown.',
    hint: 'Mythical beast is a dragon.',
    answer: 'Dr. Agon'
  },
  {
    clue: 'EaSy theRE. a number on the old exchange and bullion office matches up to a weapon that can be remoVEd from youR inquiries. you`re gettiNg close detectIve. keep it up!',
    charImage: '',
    direction: 'Stay on Wardour St for your next clue',
    hint: 'Just past the Chinatown Gate. Number in reverse',
    answer: 'Rope'
  },
  {
    clue: 'His heart has strong sympathies, but what does his mind have? Remove the `s` and then choose your answer.',
    charImage: '',
    direction:
      'At the pedestrian crossing in front turn right onto Coventry St. Follow Coventry St until you reach Piccadilly Circus (safely crossing any roads as you go and use pedestrian crossings where available). Walk over to the Shaftesbury Memorial Fountain for your next clue.',
    hint: 'Look closely at the inscriptions on the fountain.',
    answer: 'Agret Werop'
  },
  {
    clue: 'To my left is Caduceus, and a bundle of crops. To my right is a wood stock. What weapon am I? The answer can be removed from your inquiries.',
    charImage: '',
    direction:
      'Walk down Regent Street St. James`s (not Regent Street) using the left-hand pavement. Your next clue can be found somewhere along this street. This is a busy area, so take care when crossing any roads and only try to solve the following clue once stationary on a path.',
    hint: 'Look up high at the symbols on No. 1 Regent Street St. James`s building.',
    answer: 'Rifle'
  },
  {
    clue: 'Look around to discover WHo wAs The second son of George III. Solve thIS clue correctly and tHe answer will match up to the fIrSt name of an innocenT suspect wIth a waTertight aLibi. Now walk down to thE bottom of the steps.',
    charImage: '',
    direction:
      'Continue down Regent Street St. James’s which leads onto Waterloo Place. Walk to the end of Waterloo Place, safely crossing over Pall Mall using the pedestrian crossing. At the end of Waterloo Place cross over Carlton House Terrace and onto the large set of steps.',
    hint: 'Look for a plaque. What was Frederick`s title?',
    answer: 'Duke Darker'
  },
  {
    clue: '...but what year is this? The date matches up to a weapon that can be eliminated. Congratulations! Make sure you also solve the `Breaking Clues` to crack the case!',
    charImage: '',
    direction:
      'Turn left onto The Mall. Keep walking until you reach the edge of the steps just before Admiralty Arch landmark. The latin inscription at the top of the arch translates to: `In the tenth year of King Edward VII, to Queen Victoria from most grateful citizens...`followed by an important year...',
    hint: 'Use the detective notebook',
    answer: 'Dagger'
  },
  {
    clue: 'I met a man on the London Bridge. He tipped his hat and drew his name. In this riddle I told you his name.',
    charImage: '',
    direction:
      'In order to find out the name of the murderer you will have to solve a riddle and the answer will rhyme with the surname of the last suspect that is not guilty.',
    hint: 'You can wear it at the sea.',
    answer: 'Andrew Looney'
  }
];

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced!');
    await User.bulkCreate(mockUsers);
    console.log('Users created!');
    await Tour.bulkCreate(mockTours);
    console.log('Tour created!');
    await Booking.create(mockBooking);
    console.log('Booking created!');
    await Character.bulkCreate(mockCharacter);
    console.log('Character created!');
    await Weapon.bulkCreate(mockWeapon);
    console.log('Weapon created!');
    await CharingCrossCharmer.bulkCreate(mockCharingCrossCharmer);
    console.log('CharingCrossCharmer created!');
  } catch (error) {
    console.log(error);
  }
})();
