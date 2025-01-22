import { GetCourseCatalogResponse } from '@/@types';

import axios from '@/lib/axios';

const PREFIX = '/courses';

/**
 * Request:     GET /api/v1/courses/catalog
 * Description: Get all courses in the catalog
 */
export const getCourseCatalog = async () => {
  const url = `${PREFIX}/catalog`;

  const response = await axios.get<GetCourseCatalogResponse>(url);

  return response.data;
};
