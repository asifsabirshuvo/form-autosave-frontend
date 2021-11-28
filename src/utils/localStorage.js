const GLOBAL_KEY = "form_elements";
export function setLocalStorage(VALUE) {
  return localStorage.setItem(GLOBAL_KEY, JSON.stringify(VALUE));
}

export function getLocalStorage() {
  const valueStored = localStorage.getItem(GLOBAL_KEY);
  console.log(valueStored);
  if (valueStored) {
    return JSON.parse(valueStored);
  }
  return null;
}

export function clearLocalStorage() {
  return localStorage.removeItem(GLOBAL_KEY);
}

export function setLocalStorageElement(ELEMENT_KEY, VALUE) {
  const currentStoredValue = getLocalStorage();
  console.log(currentStoredValue);
  //also we should check for edited false if all field value are removed.
  currentStoredValue.edited = true;
  currentStoredValue.formElements = currentStoredValue.formElements.map(
    (formElement) => {
      const tempElement = Object.assign({}, formElement);
      if (tempElement._id === ELEMENT_KEY) {
        tempElement.value = VALUE;
      }
      return tempElement;
    }
  );
  setLocalStorage(currentStoredValue);
}
