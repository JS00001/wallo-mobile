import { GetLessonRequest, GetLessonResponse } from '@/@types';

import axios from '@/lib/axios';

const PREFIX = '/courses';

/**
 * Request:     GET /api/v1/lessons/:id
 * Description: Get a lesson by its id
 */
export const getLesson = async (data: GetLessonRequest) => {
  const url = `${PREFIX}/${data.id}`;

  const response = await axios.get<GetLessonResponse>(url);

  return response.data;
};
