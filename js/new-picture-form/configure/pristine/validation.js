import { PRISTINE_CONFIG } from '../../../config';
import {
  validateCommentLength,
  validateHashtagByPattern,
  validateHashtagLength,
  validateUniqueHashtags
} from './validators';

export const configurePristineValidation = (newPictureForm) => {
  const pristine = new Pristine(newPictureForm, PRISTINE_CONFIG, true);
  const hashtagsInput = newPictureForm.querySelector('.text__hashtags');
  const commentInput = newPictureForm.querySelector('.text__description');

  pristine.addValidator(
    hashtagsInput,
    validateHashtagByPattern,
    'Хэштег не соответствует формату',
    1,
    true
  );

  pristine.addValidator(
    hashtagsInput,
    validateHashtagLength,
    'Количество введенных хэштегов превышено',
    2,
    true
  );

  pristine.addValidator(
    hashtagsInput,
    validateUniqueHashtags,
    'Введенные хэштеги не уникальны',
    3,
    true
  );

  pristine.addValidator(
    commentInput,
    validateCommentLength,
    'Максимальное количество символов превышено'
  );

  return pristine;
};
