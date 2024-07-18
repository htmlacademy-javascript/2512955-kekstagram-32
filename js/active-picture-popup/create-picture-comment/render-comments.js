import { createPictureComment } from './create-comment';
import { htmlTools } from '../../utills';

const { renderHtmlElement } = htmlTools;

export const MAX_COMMENTS_IN_ONE_RENDER = 5;

export const createCommentsListRenderer = (
  commentsData,
  commentsListElement,
) => {
  if (Array.isArray(commentsData)) {
    let firstCommentIndex = 0;
    let lastCommentIndex = Math.min(commentsData.length, firstCommentIndex + MAX_COMMENTS_IN_ONE_RENDER);

    return () => {
      if (firstCommentIndex < commentsData.length) {
        renderHtmlElement(
          commentsListElement,
          commentsData.slice(firstCommentIndex, lastCommentIndex).map((current) => createPictureComment(current))
        );

        firstCommentIndex = lastCommentIndex;
        lastCommentIndex = Math.min(commentsData.length, firstCommentIndex + MAX_COMMENTS_IN_ONE_RENDER);
      }
    };
  }

  throw new Error('Comments data is not array');
};
