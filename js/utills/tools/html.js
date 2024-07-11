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
