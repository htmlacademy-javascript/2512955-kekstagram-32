import { Popup } from '../../shared/popup';

export const configureSubmitNewPictureForm = (newPictureForm, pristineValidator, newPicturePopup) => {
  const onNewPictureFormSubmit = (event) => {
    event.preventDefault();

    if (pristineValidator.validate()) {
      //TODO: Отправить форму на сервер
      //ЗАКРЫТЬ ЧЕРТОВУ МОДАЛКУ!!!!!
      newPicturePopup.close();
      newPictureForm.removeEventListener('submit', onNewPictureFormSubmit);
    }
  };

  if (newPictureForm instanceof HTMLFormElement && newPicturePopup instanceof Popup) {
    return {
      set: () => newPictureForm.addEventListener('submit', onNewPictureFormSubmit),
      remove: () => newPictureForm.removeEventListener('submit', onNewPictureFormSubmit)
    };
  }

  throw new Error('Invalid arguments');
};
