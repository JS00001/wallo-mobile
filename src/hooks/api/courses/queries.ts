import { useQuery } from '@tanstack/react-query';

import {
  GET_COURSE_CATALOG_KEY,
  GET_COURSE_KEY,
  GET_COURSES_KEY,
} from '../keys';

import { getCourse, getCourseCatalog, getCourses } from '@/api';

export const useGetCourses = () => {
  return useQuery({
    queryKey: [GET_COURSES_KEY],
    queryFn: async () => {
      const res = await getCourses();
      if ('error' in res) throw res;
      return res.data;
    },
  });
};

export const useGetCourse = (id: string) => {
  return useQuery({
    queryKey: [GET_COURSE_KEY, id],
    queryFn: async () => {
      const res = await getCourse({ id });
      if ('error' in res) throw res;
      return res.data;
    },
  });
};

export const useGetCourseCatalog = () => {
  return useQuery({
    staleTime: Infinity,
    queryKey: [GET_COURSE_CATALOG_KEY],
    queryFn: async () => {
      const res = await getCourseCatalog();
      if ('error' in res) throw res;
      return res.data;
    },
  });
};
