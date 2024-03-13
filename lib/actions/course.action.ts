"use server";

import {
  CreateCourseParams,
  FindCourseByIdAndUpdateParams,
  GetAllCoursesParams,
  GetCourseByIdParams,
} from "./shared.types";
import { connectToDatabase } from "../mongoose";
import Course from "@/database/course.model";
import { revalidatePath } from "next/cache";

export async function createCourse({
  course,
  author,
  title,
}: CreateCourseParams) {
  try {
    connectToDatabase();
    console.log(title);
    const newCourse = await Course.create({ course, author, title });
    return JSON.stringify(newCourse);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getCourseById(params: GetCourseByIdParams) {
  try {
    connectToDatabase();
    const { courseId, userId } = params;
    const course = await Course.find({ _id: courseId, author: userId }).sort({
      createdAt: -1,
    });
    return course;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function findCourseByIdAndUpdate(
  params: FindCourseByIdAndUpdateParams
) {
  try {
    connectToDatabase();
    const { courseId, updatedData } = params;
    const course = await Course.findOneAndUpdate(
      { _id: courseId },
      updatedData
    );
    revalidatePath(`/courses/${courseId}`);
    return course;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getAllCourses(params: GetAllCoursesParams) {
  try {
    connectToDatabase();
    const { userId } = params;
    const courses = await Course.find({ author: userId });
    revalidatePath(`/courses`);
    return courses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
