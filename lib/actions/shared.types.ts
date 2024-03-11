import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}
export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}
export interface CreateCourseParams {
  course: Object[];
  title: string;
  author: Schema.Types.ObjectId;
}
export interface GetCourseByIdParams {
  courseId: string;
  userId: string;
}
export interface FindCourseByIdAndUpdateParams {
  courseId: string;
  updatedData: Object;
}
export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
