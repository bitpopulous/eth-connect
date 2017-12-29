import { statusMap } from '../constants';

/**
 * getValueFromTX helper function
 * This helper function gets a value from the returned
 * transaction result of a method call
 * @param   {string} eventName - The name of the event dispatched
 * @param   {object} valueName - The name of the value to retrieve
 * @returns {*}                - The value if it exists or null
 */
export default function getValueFromTX(eventName, valueName, tx) {
  if (tx.status === statusMap.fail) {
    throw new Error('Error creating transation, please try again');
  }

  // Get the event object
  const eventObj = tx.events[eventName];

  if (!eventObj) {
    return null;
  }

  // Get the value or return null
  return eventObj.returnValues[valueName] || null;
}
