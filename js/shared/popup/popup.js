import {
  toggleModalOpenSelector,
} from './set-open-modal-selector';
import {
  PushObject
} from '../push-object';
import { cssTools } from '../../utills';

const { toggleHiddenClassInElement } = cssTools;

export class Popup extends PushObject {
  root;
  closeElement;

  constructor({rootElement, onOpenPopupCallback, onClosePopupCallback, closeElement}) {
    super(onOpenPopupCallback, onClosePopupCallback);

    if (rootElement instanceof HTMLElement && closeElement instanceof HTMLElement) {
      this.root = rootElement;
      this.closeElement = closeElement;
      return;
    }

    throw new Error('Popup build failed');
  }

  open(data) {
    super.open(data);
    this.closeElement.addEventListener('click', this.close);
    toggleHiddenClassInElement(this.root);
    toggleModalOpenSelector(true);
  }

  close() {
    super.close();
    this.closeElement.removeEventListener('click', this.close);
    toggleHiddenClassInElement(this.root, true);
    toggleModalOpenSelector(false);
  }
}

