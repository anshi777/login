import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  role:{type:String,require:true},
  status: { 
    type: String, 
    enum: ['active', 'inactive', 'suspended'], 
    default: 'active' ,
  },},
{ timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
