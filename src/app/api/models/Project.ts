import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  image: string;
  link: string;
}
  
const ProjectSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

// Use existing model if it exists or create a new one
export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);


