import mongoose from 'mongoose';
const tokenSchema = new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
    },
    access_token: {
      type: String,
      required: true,
    },
    access_token_iv: {
        type: String,
        required: true,
      },
      access_secret: {
        type: String,
        required: true,
      },
      access_secret_iv: {
          type: String,
          required: true,
        },
  })
module.exports = mongoose.model('tokens',tokenSchema)