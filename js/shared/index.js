import {
  Popup
} from './popup';
import {
  EventTypes,
  PushEvent
} from './push-object';
import {
  Notification
} from './notification';

const popupLib = {
  Popup,
  EventTypes,
  PopupEvent: PushEvent
};

const notificationLib = {
  Notification,
  EventTypes,
  NotificationEvent: PushEvent
};

export {
  popupLib,
  notificationLib
};
