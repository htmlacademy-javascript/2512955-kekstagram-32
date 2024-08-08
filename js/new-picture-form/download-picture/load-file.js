export const loadFile = (
  file,
  onLoadFileCallback
) => {
  onLoadFileCallback(URL.createObjectURL(file));
};
