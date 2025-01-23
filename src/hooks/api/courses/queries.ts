import { useQuery } from '@tanstack/react-query';

import { GET_COURSE_CATALOG_KEY, GET_COURSES_KEY } from '../keys';

import { getCourseCatalog, getCourses } from '@/api/requests/courses';

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
