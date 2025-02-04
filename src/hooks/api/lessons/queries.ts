import { useQuery } from '@tanstack/react-query';

import { GET_LESSON_KEY } from '../keys';

import { getLesson } from '@/api';

export const useGetLesson = (id: string) => {
  return useQuery({
    queryKey: [GET_LESSON_KEY, id],
    queryFn: async () => {
      const res = await getLesson({ id });
      if ('error' in res) throw res;
      return res.data;
    },
  });
};
