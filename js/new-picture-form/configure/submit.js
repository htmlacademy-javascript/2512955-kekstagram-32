export const configureSubmitNewPictureForm = (newPictureForm, sendPictureCallback) => {
  const onNewPictureFormSubmit = (event) => {
    event.preventDefault();
    sendPictureCallback();
  };

  if (newPictureForm instanceof HTMLFormElement && typeof(sendPictureCallback) === 'function') {
    return {
      set: () => newPictureForm.addEventListener('submit', onNewPictureFormSubmit),
      remove: () => newPictureForm.removeEventListener('submit', onNewPictureFormSubmit)
    };
  }

  throw new Error('Invalid arguments');
};
