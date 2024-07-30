import { URLS } from '../config';
import { sendQuery } from '../api';

export const getPicturesData = async () => await sendQuery({
  url: URLS.PICTURES_LIST_GET_URL
});
