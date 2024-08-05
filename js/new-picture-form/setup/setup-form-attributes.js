import { formTools } from '../../utills';
import { URLS, QueryTypes } from '../../config';

const {
  Enctypes,
  setFormAttributes
} = formTools;

export const setupNewPictureFormAttributes = (newPictureForm) => {
  if (newPictureForm instanceof HTMLFormElement) {
    setFormAttributes(
      newPictureForm,
      QueryTypes.POST,
      Enctypes.MULTIPART,
      URLS.NEW_PICTURE_POST_URL
    );
    return;
  }

  throw new Error('newPictureForm argument is not form');
};
