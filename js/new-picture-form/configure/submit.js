export const configureSubmitNewPictureForm = (newPictureForm, pristineValidator) => {
  const onNewPictureFormSubmit = (event) => {
    event.preventDefault();

    if (pristineValidator.validate()) {
      //TODO: Отправить форму на сервер
    }
  };

  const setSubmitEvent = () => {
    newPictureForm.addEventListener('submit', onNewPictureFormSubmit);
  };

  const removeSubmitEvent = () => {
    newPictureForm.removeEventListener('submit', onNewPictureFormSubmit);
  };

  if (newPictureForm instanceof HTMLFormElement) {
    return {
      set: setSubmitEvent,
      remove: removeSubmitEvent
    };
  }

  throw new Error('NewPictureForm is not HTML Form');
};
