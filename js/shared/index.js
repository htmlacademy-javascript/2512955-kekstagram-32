import {
  Popup
} from './popup';
import {
  EVENT_TYPES,
  PushEvent
} from './push-object';
import {
  Notification
} from './notification';

const popupLib = {
  Popup,
  EVENT_TYPES,
  PopupEvent: PushEvent
};

const notificationLib = {
  Notification,
  EVENT_TYPES,
  NotificationEvent: PushEvent
};

export {
  popupLib,
  notificationLib
};
