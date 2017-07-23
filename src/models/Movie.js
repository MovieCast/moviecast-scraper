import { Schema, model } from "mongoose";

// The movie schema used by mongoose.
const MovieSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: String,
  slug: String,
  meta: {
    imdb_id: String,
    year: String,
    synopsis: String,
    duration: String,
    country: String,
    released: Number,
    certification: String,
    rating: {
      percentage: Number,
      watching: Number,
      votes: Number,
      loved: Number,
      hated: Number
    },
    trailer: String
  },
  images: {
    banner: String,
    fanart: String,
    poster: String
  },
  genres: [],
  torrents: {},
  created_at: Number,
  updated_at: Number
});

MovieSchema.index({ title: "text", _id: 1 });

export default model("Movie", MovieSchema);