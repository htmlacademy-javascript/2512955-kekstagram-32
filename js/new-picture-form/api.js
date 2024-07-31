import { sendQuery } from '../api';
import { QUERY_TYPES, URLS } from '../config';

export const sendNewPicture = async (pictureData) => {
  if (pictureData instanceof FormData) {
    return await sendQuery({
      url: URLS.NEW_PICTURE_POST_URL,
      method: QUERY_TYPES.POST,
      body: pictureData
    });
  }

  throw new Error('PictureData is not FormData');
};
