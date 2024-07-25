export const getHtmlTemplate = (templateId) => {
  const isCorrectTemplateId = typeof(templateId) === 'string' && templateId !== '';

  if (isCorrectTemplateId) {
    const template = document.querySelector(`#${templateId}`);

    if (template) {
      return template.content;
    }

    throw new Error(`Template not found by Id = ${templateId}`);
  }

  throw new Error('Invalid argument "templateId"');
};

export const fillHtmlElement = (element, data) => {
  const isCorrectParams = element instanceof HTMLElement && typeof(data) === 'object' && Object.keys(data).length > 0;

  if (isCorrectParams) {
    Object.keys(data).forEach((current) => {
      element[current] = data[current];
    });

    return;
  }

  throw new Error('Invalid arguments');
};

export const renderHtmlElement = (root, childElements) => {
  const isDOMElementsInChilds = Array.isArray(childElements) && childElements.every((current) => current instanceof HTMLElement);
  const isCurrentRoot = root instanceof HTMLElement || root instanceof DocumentFragment;
  const isCorrectParams = isCurrentRoot && isDOMElementsInChilds;

  if (isCorrectParams) {
    const childsContainerFragment = document.createDocumentFragment();
    childsContainerFragment.append(...childElements);
    root.appendChild(childsContainerFragment);

    return;
  }

  throw new Error('Invalid arguments');
};

export const createHtmlElement = (tagName, classList) => {
  if (typeof(tagName) === 'string' && tagName) {
    const element = document.createElement(tagName);

    if (Array.isArray(classList) && classList.every((current) => typeof(current) === 'string')) {
      classList.forEach((current) => {
        element.classList.add(current);
      });
    }

    return element;
  }

  throw new Error('Invalid arguments');
};

export const setInputValue = (input, value) => {
  if (input instanceof HTMLInputElement) {
    input.value = value;
    input.setAttribute('value', value);
  }
};
