import { Schema, models, model, Document } from "mongoose";

export interface ICourse extends Document {
  course: Object[];
  author: Schema;
  title: string;
  createdAt: Date;
}
const CourseSchema = new Schema({
  course: { type: Object, required: true },
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
