import { FIELDS_CONFIG } from '../settings';

const { MAX_HASHTAGS_IN_INPUT, MAX_COMMENT_LENGTH } = FIELDS_CONFIG;

const getHashtagsArray = (serializedHashtags) => String(serializedHashtags).split(' ').filter((current) => current !== '');

export const validateHashtagByPattern = (serializedHashtags) => {
  const tags = getHashtagsArray(serializedHashtags);
  const pattern = /^#(?:\d|[a-zA-Z]|[а-яёА-ЯЁ]){1,19}$/;
  return tags.every((current) => pattern.test(current.trim()));
};

export const validateHashtagLength = (serializedHashtags) => getHashtagsArray(serializedHashtags).length <= MAX_HASHTAGS_IN_INPUT;

export const validateUniqueHashtags = (serializedHashtags) => {
  const tags = getHashtagsArray(serializedHashtags).map((current) => current.toLowerCase().trim()).sort();

  for (let tagIndex = 0; tagIndex < tags.length - 1; tagIndex++) {
    if (tags[tagIndex] === tags[tagIndex + 1]) {
      return false;
    }
  }

  return true;
};

export const validateCommentLength = (comment) => String(comment).length <= MAX_COMMENT_LENGTH;
