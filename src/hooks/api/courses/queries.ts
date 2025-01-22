import { useQuery } from '@tanstack/react-query';

import { GET_COURSE_CATALOG_KEY } from '../keys';

import { getCourseCatalog } from '@/api/requests/courses';

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
