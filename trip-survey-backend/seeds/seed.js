
const mongoose = require('mongoose');
const Survey = require('../models/Survey');
require('dotenv').config();

const seedData = [
    {
      name: "Kiran Sharma",
      willCome: true,
      bringingGuest: true,
      guestCount: 2,
      guestNames: ["Anjali Mehta", "Rajiv Singh"],
      reasonNotComing: null,
      additionalWants: "I would like more trekking activities.",
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Priya Nair",
      willCome: false,
      bringingGuest: false,
      guestCount: 0,
      guestNames: [],
      reasonNotComing: "I have work commitments.",
      additionalWants: null,
      wantToChangeDate: true,
      acceptDate: "20/11/2024"
    },
    {
      name: "Mahak Arora",
      willCome: true,
      bringingGuest: false,
      guestCount: 0,
      guestNames: [],
      reasonNotComing: null,
      additionalWants: "More adventurous activities, like skydiving.",
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Sakshi Verma",
      willCome: true,
      bringingGuest: true,
      guestCount: 1,
      guestNames: ["Pooja Reddy"],
      reasonNotComing: null,
      additionalWants: "A more relaxed schedule with free time.",
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Rohit Choudhary",
      willCome: false,
      bringingGuest: false,
      guestCount: 0,
      guestNames: [],
      reasonNotComing: "I have another trip planned.",
      additionalWants: null,
      wantToChangeDate: true,
      acceptDate: "22/11/2024"
    },
    {
      name: "Lata Iyer",
      willCome: true,
      bringingGuest: false,
      guestCount: 0,
      guestNames: [],
      reasonNotComing: null,
      additionalWants: "I want more cultural experiences, like visiting local villages.",
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Anil Gupta",
      willCome: true,
      bringingGuest: true,
      guestCount: 3,
      guestNames: ["Radhika Gupta", "Aryan Gupta", "Siddhi Gupta"],
      reasonNotComing: null,
      additionalWants: "More kid-friendly activities.",
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Maya Patel",
      willCome: false,
      bringingGuest: false,
      guestCount: 0,
      guestNames: [],
      reasonNotComing: "Family emergency.",
      additionalWants: null,
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Manish Malhotra",
      willCome: true,
      bringingGuest: false,
      guestCount: 0,
      guestNames: [],
      reasonNotComing: null,
      additionalWants: "Cricket match or sports event.",
      wantToChangeDate: false,
      acceptDate: null
    },
    {
      name: "Anusha Reddy",
      willCome: true,
      bringingGuest: true,
      guestCount: 1,
      guestNames: ["Rahul Reddy"],
      reasonNotComing: null,
      additionalWants: "More nature hikes and photography sessions.",
      wantToChangeDate: false,
      acceptDate: null
    }
  ];
  

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Survey.deleteMany({});
    await Survey.insertMany(seedData);
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding the database:', err);
  });
