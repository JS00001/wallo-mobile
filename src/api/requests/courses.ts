import {
  GetCourseCatalogResponse,
  GetCourseRequest,
  GetCourseResponse,
  GetCoursesResponse,
} from '@/@types';

import axios from '@/lib/axios';

const PREFIX = '/courses';

/**
 * Request:     GET /api/v1/courses
 * Description: Get all courses the user has access to
 */
export const getCourses = async () => {
  const url = `${PREFIX}`;

  const response = await axios.get<GetCoursesResponse>(url);

  return response.data;
};

/**
 * Request:     GET /api/v1/courses/:id
 * Description: Get a course by its id
 */
export const getCourse = async (data: GetCourseRequest) => {
  const url = `${PREFIX}/${data.id}`;

  const response = await axios.get<GetCourseResponse>(url);

  return response.data;
};

/**
 * Request:     GET /api/v1/courses/catalog
 * Description: Get all courses in the catalog
 */
export const getCourseCatalog = async () => {
  const url = `${PREFIX}/catalog`;

  const response = await axios.get<GetCourseCatalogResponse>(url);

  return response.data;
};
