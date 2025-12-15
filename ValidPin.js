function validatePIN(pin) {
  const regex = /[0-9]/;
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (!regex.test(pin[i])) return false;
  }
  return true;
}

// return /^(\d{4}|\d{6})$/.test(pin);
