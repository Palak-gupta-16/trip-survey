const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  willCome: { type: Boolean, required: true },
  bringingGuest: { type: Boolean, required: true },
  guestCount: { type: Number, default: 0 },
  guestNames: { type: [String], default: [] },
  reasonNotComing: { type: String, default: null },
  additionalWants: { type: String, default: null },
  wantToChangeDate: { type: Boolean, default: false },
  acceptDate: { type: String, default: null }
});

module.exports = mongoose.model('Survey', SurveySchema);