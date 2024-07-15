import { htmlTools } from '../utills';

const {
  createHtmlElement,
  fillHtmlElement,
} = htmlTools;

export const createPictureComment = (commentData) => {
  const commentRoot = createHtmlElement('li', ['social__comment']);
  const commentAvatar = createHtmlElement('img', ['social__picture']);
  const commentText = createHtmlElement('p', ['social__text']);

  const { avatar, message, name } = commentData;

  fillHtmlElement(
    commentAvatar,
    {
      src: avatar,
      alt: name,
      width: 35,
      height: 35
    }
  );

  fillHtmlElement(
    commentText,
    {
      textContent: message
    }
  );

  commentRoot.append(commentAvatar, commentText);

  return commentRoot;
};
