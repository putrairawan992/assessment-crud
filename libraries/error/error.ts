// import { logError, config } from '../app-insights/app-insights';
import MessageHandler from '../message-handler';

const Error = () => {
  const messageHandler = MessageHandler();

  /**
   * Customized error handling object type with function and contructor name
   * @param exception
   * @param message
   */
  function handleCustomException(exception: { error: any }, message?: string) {
    // if (config.INSIGTHS.EXCEPTION) {
    //   logError(JSON.stringify(exception.error));
    //   messageHandler.handleError(exception.error, message);
    // }
    messageHandler.handleError(exception.error, message);
  }

  function handleComponentBaseError(error: any) {
    // if (config.INSIGTHS.EXCEPTION) {
    //   logError(error);
    // }
    messageHandler.handleError(error);
  }

  return {
    handleCustomException,
    handleComponentBaseError,
  };
};

export { Error };
