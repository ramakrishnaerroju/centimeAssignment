import Config from '../config/config.json';
import {DEBUG, INFO, WARN, ERROR} from './logLevel';

export default class Logger {
  static debug(message) {
    if (Config.CONSOLE_LOG_LEVEL === DEBUG) {
      console.debug(message);
    }
  }

  static info(message) {
    if (
      Config.CONSOLE_LOG_LEVEL === DEBUG ||
      Config.CONSOLE_LOG_LEVEL === INFO
    ) {
      console.info(message);
    }
  }

  static warn(message) {
    if (
      Config.CONSOLE_LOG_LEVEL === DEBUG ||
      Config.CONSOLE_LOG_LEVEL === INFO ||
      Config.CONSOLE_LOG_LEVEL === WARN
    ) {
      console.warn(message);
    }
  }

  static error(message) {
    if (
      Config.CONSOLE_LOG_LEVEL === DEBUG ||
      Config.CONSOLE_LOG_LEVEL === INFO ||
      Config.CONSOLE_LOG_LEVEL === WARN ||
      Config.CONSOLE_LOG_LEVEL === ERROR
    ) {
      console.error(message);
    }
  }
}
