export const toggleHiddenClassInElement = (element, isHidden = false, hiddenSelector = 'hidden') => {
  if (element instanceof HTMLElement && typeof(hiddenSelector) === 'string') {
    if (isHidden) {
      element.classList.add(hiddenSelector);
      return;
    }

    element.classList.remove(hiddenSelector);
    return;
  }

  throw new Error('Invalid arguments');
};
