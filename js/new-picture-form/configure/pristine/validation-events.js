export const configureValidationEvents = (pristineValidator, newPictureForm) => {
  if (pristineValidator instanceof Pristine && newPictureForm instanceof HTMLFormElement) {
    const hashtagInput = newPictureForm.querySelector('.text__hashtags');
    const commentInput = newPictureForm.querySelector('.text__description');

    const onInputBlur = (input) => {
      pristineValidator.validate(input);
    };

    const onInputFocus = (input, ...savedInputs) => {
      const errors = pristineValidator.getErrors(input);

      if (errors) {
        pristineValidator.reset();
        savedInputs.forEach((current) => pristineValidator.validate(current));
      }
    };

    const onHashtagInputBlur = (event) => onInputBlur(event.target);

    const onCommentInputBlur = (event) => onInputBlur(event.target);

    const onHashtagInputFocus = (event) => onInputFocus(event.target, commentInput);

    const onCommentInputFocus = (event) => onInputFocus(event.target, hashtagInput);

    const setValidationEvents = () => {
      hashtagInput.addEventListener('blur', onHashtagInputBlur);
      hashtagInput.addEventListener('focus', onHashtagInputFocus);
      commentInput.addEventListener('blur', onCommentInputBlur);
      commentInput.addEventListener('focus', onCommentInputFocus);
    };

    const removeValidationEvents = () => {
      hashtagInput.removeEventListener('blur', onHashtagInputBlur);
      hashtagInput.removeEventListener('focus', onHashtagInputFocus);
      commentInput.removeEventListener('blur', onCommentInputBlur);
      commentInput.removeEventListener('focus', onCommentInputFocus);
    };
    return {
      set: setValidationEvents,
      remove: removeValidationEvents
    };
  }

  throw new Error('Invalid argiments');
};
