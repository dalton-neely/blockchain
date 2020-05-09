const typeError = (typeName, typeExpected, variable) => new Error(`${typeName} should be of type ${typeExpected} but received type ${typeof variable}`);

const stringTypeError = (typeName, variable) => typeError(typeName, 'string', variable);
const numberTypeError = (typeName, variable) => typeError(typeName, 'number', variable);

export {
  typeError,
  stringTypeError,
  numberTypeError,
};
