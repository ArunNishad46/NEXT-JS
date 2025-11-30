import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Name is required"],
      trim: true,
      minlength:[3, "Name must be larger than 3 characters"] 
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
    },
    message: { 
      type: String, 
      required: [true, "Message is required"], 
      trim: true, 
      maxlength: 1000 
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);