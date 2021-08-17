const { sequelize } = require('../model/index');

const { User, Tour, Booking, Character, Weapon } = require('../model/index');

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
    images:
      'https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg1NjI4MDA3NzUz/jack-the-ripper-2.jpg'
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
    images: 'https://i.ytimg.com/vi/cPWFE4o2Ao0/maxresdefault.jpg'
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
      'https://killertrails.co.uk/wp-content/uploads/2020/01/CityOfLondon_801x801px_x-324x324.jpg'
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
      'https://www.mike-neville-walks-and-talks.co.uk/images/scotland-yard.jpg'
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
      'https://images-na.ssl-images-amazon.com/images/I/515d6CW65tL._SX345_BO1,204,203,200_.jpg'
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
      'https://image.shutterstock.com/image-photo/ass-hole-white-buffalo-600w-1021614685.jpg'
  }
];

const mockBooking = {
  password: 'join my game',
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
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description: 'Vengeful school peer bullied by Agatha Marpe 15 years ago.'
  },
  {
    name: 'Violet Jellicoe',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description: 'The envious and mistreated best friend of Barbie Dahl.'
  },
  {
    name: 'Pom Looney',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description: 'Eerie games salesman found unconscious near crime scenes.'
  },
  {
    name: 'Sara Plum',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description: "Cilla's PA. Found Cilla's plans to siphon money from victims."
  },
  {
    name: 'Adelphi Darker',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description: 'Owns Darker Bros (a huge game manufacturer) with Duke.'
  },
  {
    name: 'Duke Darker',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description:
      'Had affair with Cilla, who later blackmailed him for his wealth.'
  },
  {
    name: 'Tim Tycoon',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description:
      "Son of a senile property mogul. Saw father's wife Cilla have an affair."
  },
  {
    name: 'Henrietta Green',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description: 'Seen near crime scene with a dagger in her handbag.'
  },
  {
    name: 'Dr. Agon',
    image:
      'https://randomwordgenerator.com/img/picture-generator/5ee8d04b4f54b10ff3d8992cc12c30771037dbf85254784a742e72d49345_640.jpg',
    TourId: 1,
    description:
      'Psychiatrist. Lust for Cilla always denied as not filthy rich.'
  }
];

const mockWeapon = [
  {
    weapon: 'Dagger',
    image:
      'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-military-dagger-illustration-image_1290890.jpg',
    TourId: 1,
    number: 1910
  },
  {
    weapon: 'Rope',
    image:
      'https://media.istockphoto.com/vectors/rope-in-cartoon-style-vector-id1159542493?k=6&m=1159542493&s=170667a&w=0&h=wjH2ca30O3JW08j2_uytbN6uRCxwh5_4aeuPfi6Yl-U=',
    TourId: 1,
    number: 8971
  },
  {
    weapon: 'Boot',
    image:
      'https://img.pixers.pics/pho_wat(s3:700/FO/59/87/11/18/700_FO59871118_ae92c5254a9cb227439de7fed6ff1bcc.jpg,700,628,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,578,jpg)/posters-old-shoe-or-boot-cartoon-clip-art.jpg.jpg',
    TourId: 1,
    number: 1853
  },
  {
    weapon: 'Lead Pipe',
    image:
      'https://thumbs.dreamstime.com/b/sticker-cartoon-old-pipe-creative-illustrated-147737535.jpg',
    TourId: 1,
    number: 1642
  },
  {
    weapon: 'Axe',
    image:
      'https://thumbs.dreamstime.com/b/cartoon-ax-hatchet-vector-symbol-icon-design-beautiful-illustration-isolated-white-background-91710927.jpg',
    TourId: 1,
    number: 1818
  },
  {
    weapon: 'Baton',
    image:
      'https://cdn2.iconfinder.com/data/icons/policeman-6/500/vab880_17_policeman_baton_isometric_cartoon_logo_hand_silhouette-512.png',
    TourId: 1,
    number: 1940
  },
  {
    weapon: 'Rifle',
    image:
      'https://image.shutterstock.com/image-vector/weapon-rifle-gun-vector-military-260nw-1954604344.jpg',
    TourId: 1,
    number: 1535
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
  } catch (error) {
    console.log(error);
  }
})();
