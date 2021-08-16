const { sequelize } = require('../model/index');

const { User, Tour, Booking, Player } = require('../model/index');

const mockUsers = [
  {
    username: 'Marius',
    email: 'mariusobreja@gamil.com',
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

const mockTour = {
  title: 'Jack the ripper',
  location: 'London',
  rating: 5,
  genre: 'history',
  briefDescription: 'Solve famous murders while exploring london',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia lorem neque, iaculis lobortis urna gravida non. Phasellus id consectetur felis, vitae porttitor massa. Suspendisse pellentesque gravida sem, et fermentum dolor efficitur non. Suspendisse sollicitudin mi iaculis felis elementum, non venenatis ex tristique. Etiam quis diam sit amet nisi suscipit aliquam. Maecenas ante tortor, bibendum sed tellus ac, suscipit dignissim odio. Sed et convallis dui, in lacinia dolor. Mauris non tortor non sem porttitor mollis sed non tortor. Duis vitae venenatis eros, quis semper enim. Fusce nec pellentesque ante. Aliquam ac augue in turpis laoreet iaculis. Vivamus ac ex arcu.',
  distance: 5.36,
  price: 54.95,
  images:
    'https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg1NjI4MDA3NzUz/jack-the-ripper-2.jpg'
};

const mockBooking = {
  password: 'join my game',
  partySize: 2,
  date: '2021-10-19 10:23:54+02',
  UserId: 1,
  TourId: 1,
  chapter: 1,
  open: true
};

(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  User.bulkCreate(mockUsers);
  Tour.create(mockTour);
  Booking.create(mockBooking);
})();

// const mockBooking = {

// }
