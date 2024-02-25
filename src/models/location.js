import mongoose from 'mongoose'

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
})

const Location = mongoose.model('Location', LocationSchema)

export default Location
