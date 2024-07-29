import { PushObject } from '../push-object';

const DEFAULT_LIFE_MILLISECONDS = 5000;

export class Notification extends PushObject {
  timeoutId;
  closeElement;
  lifeMilliseconds;
  autoClosable;

  constructor({onOpenCallback, onCloseCallback, closeElement = null, autoClosable = true, lifeMilliseconds = DEFAULT_LIFE_MILLISECONDS}) {
    super(onOpenCallback, onCloseCallback);
    this.closeElement = closeElement;
    this.lifeMilliseconds = lifeMilliseconds;
    this.autoClosable = autoClosable;
  }

  open(data) {
    super.open(data);

    if (this.closeElement && this.closeElement instanceof HTMLElement) {
      this.closeElement.addEventListener('click', this.close);
    }

    if (this.autoClosable) {
      this.timeoutId = setTimeout(this.close, this.lifeMilliseconds);
    }
  }

  close() {
    super.close();
    clearTimeout(this.timeoutId);

    if (this.closeElement && this.closeElement instanceof HTMLElement) {
      this.closeElement.removeEventListener('click', this.close);
    }
  }
}
