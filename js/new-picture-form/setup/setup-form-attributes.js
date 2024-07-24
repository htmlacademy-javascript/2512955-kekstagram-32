import { formTools } from '../../utills';
import { URLS } from '../../config';

const {
  ENCTYPES,
  QUERY_TYPES,
  setFormAttributes
} = formTools;

export const setupNewPictureFormAttributes = (newPictureForm) => {
  if (newPictureForm instanceof HTMLFormElement) {
    setFormAttributes(
      newPictureForm,
      QUERY_TYPES.POST,
      ENCTYPES.MULTIPART,
      URLS.NEW_PICTURE_POST_URL
    );
    return;
  }

  throw new Error('newPictureForm argument is not form');
};
