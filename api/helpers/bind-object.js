export default function bindObject(object) {
  const binded = {};

  for (const methodName in object) { // eslint-disable-line
    if (Object.hasOwnProperty.call(object, methodName)) {
      binded[methodName] = object[methodName].bind(this);
    }
  }

  return binded;
}
