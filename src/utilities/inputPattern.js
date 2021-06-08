export const name = /^[A-Za-zÀ-ÖØ-öø-ÿǍ-ǜ '-]+$/i;
export const address = /^[A-Za-zÀ-ÖØ-öø-ÿǍ-ǜ0-9 .,':;()*/&_-]+$/i;
export const city = /^[A-Za-zÀ-ÖØ-öø-ÿǍ-ǜ -]+$/i;
export const phone = /^[\d ()+-]+$/;
export const email =
  /^[a-zA-Z0-9!.#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
