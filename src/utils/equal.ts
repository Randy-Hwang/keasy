export const isObject = (a: any) => typeof a === 'object' && a !== null;

export const isEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  const prop1 = Object.getOwnPropertyNames(a);
  const prop2 = Object.getOwnPropertyNames(b);

  // if (prop1.length !== prop2.length) {
  //   return false;
  // }

  for (const prop of prop1) {
    const val1 = a[prop];
    const val2 = b[prop];

    const isObjects = isObject(val1) && isObject(val2);

    if ((isObjects && !isEqual(val1, val2)) || (!isObjects && val1 !== val2)) {
      console.log('Mismatch in prop ' + prop + ' ' + val1 + ' ' + val2);
      return false;
    }
  }
  return true;
};
