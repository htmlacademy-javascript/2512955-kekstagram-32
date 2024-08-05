import {
  toggleModalOpenSelector,
} from './set-open-modal-selector';
import {
  PushObject
} from '../push-object';
import { cssTools } from '../../utills';

const { toggleHiddenClassInElement } = cssTools;

export class Popup extends PushObject {
  #root;

  constructor({rootElement, onOpenPopupCallback, onClosePopupCallback, closeElement}) {
    if (rootElement instanceof HTMLElement && closeElement instanceof HTMLElement) {
      super(onOpenPopupCallback, onClosePopupCallback, closeElement);
      this.#root = rootElement;
      return;
    }

    throw new Error('Popup build failed');
  }

  open(data) {
    super.open(data);
    toggleHiddenClassInElement(this.#root);
    toggleModalOpenSelector(true);
  }

  close() {
    super.close();
    toggleHiddenClassInElement(this.#root, true);
    toggleModalOpenSelector(false);
  }
}

