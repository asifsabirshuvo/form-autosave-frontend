export function validateFields(formElements) {
  let success = true;
  let messages = [];
  //is it empty
  for (const formElement of formElements) {
    if (!formElement.value) {
      success = false;
      messages.push(`${formElement.fieldName} is empty.`);
    }
  }

  //check for field wise validations
  for (const formElement of formElements) {
    if (formElement.value) {
      let res = {};
      switch (formElement.constraint) {
        case "SHORT_TEXT":
          res = isShortText(formElement.value);
          break;
        case "VALID_EMAIL":
          res = isValidEmail(formElement.value);
          break;
        case "PHONE_NUMBER":
          res = isPhoneNumber(formElement.value);
          break;

        default:
          success = false;
          messages.push("Unknown validation type");
          break;
      }
      if (!res.success && success) {
        success = res.success;
      }
      if (!res.success) messages.push(res.message);
    }
  }

  return {
    success,
    messages,
  };
}

function isShortText(data) {
  const success = typeof data === "string" && data.length < 20;
  return {
    success,
    message: !success ? "Invalid string type or length more than 20" : "",
  };
}
function isValidEmail(data) {
  const success = data.match(/\S+@\S+\.\S+/) !== null;
  return {
    success,
    message: !success ? "Invalid email" : "",
  };
}
function isPhoneNumber(data) {
  const success = data.match(/^\d+$/) != null;
  return {
    success,
    message: !success ? "Invalid Phone number" : "",
  };
}
