export const loadFile = (
  file,
  onLoadFileCallback
) => {
  const fileReader = new FileReader();
  fileReader.onload = onLoadFileCallback;
  fileReader.readAsDataURL(file);
};
