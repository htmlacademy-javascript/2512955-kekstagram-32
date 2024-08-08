import {
  MAX_FILE_SIZE_BYTES,
  SUPPORTED_EXTENSIONS,
  BYTES_IN_ONE_MEGABYTE
} from './constants';

export const checkFile = (file) => {
  if (file instanceof File) {
    const fileName = file.name.toLowerCase();

    if (file.size > MAX_FILE_SIZE_BYTES) {
      throw new Error(`Превышен максимальный размер файла ${Math.round(MAX_FILE_SIZE_BYTES / BYTES_IN_ONE_MEGABYTE)} МВ`);
    }

    if (!SUPPORTED_EXTENSIONS.some((extension) => fileName.endsWith(extension))) {
      throw new Error('Неверное расширение файла');
    }

    return;
  }

  throw new Error('File is not File instance');
};
