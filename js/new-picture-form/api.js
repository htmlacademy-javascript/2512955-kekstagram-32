import { sendQuery } from '../api';
import { QueryTypes, URLS } from '../config';

export const sendNewPicture = async (pictureData) => {
  if (pictureData instanceof FormData) {
    return await sendQuery({
      url: URLS.NEW_PICTURE_POST_URL,
      method: QueryTypes.POST,
      body: pictureData
    });
  }

  throw new Error('PictureData is not FormData');
};
