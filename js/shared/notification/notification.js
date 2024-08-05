import { PushObject } from '../push-object';

const DEFAULT_LIFE_MILLISECONDS = 5000;

export class Notification extends PushObject {
  #timeoutId;
  #lifeMilliseconds;
  #autoClosable;

  constructor({
    onOpenCallback,
    onCloseCallback,
    closeElement = null,
    autoClosable = true,
    lifeMilliseconds = DEFAULT_LIFE_MILLISECONDS,
    useOnDocumentKeydownClose = true,
  }) {
    super(
      onOpenCallback,
      onCloseCallback,
      closeElement,
      useOnDocumentKeydownClose
    );
    this.#lifeMilliseconds = lifeMilliseconds;
    this.#autoClosable = autoClosable;
  }

  open(data) {
    super.open(data);

    if (this.#autoClosable) {
      this.#timeoutId = setTimeout(this.close, this.#lifeMilliseconds);
    }
  }

  close() {
    super.close();
    clearTimeout(this.#timeoutId);
  }
}
