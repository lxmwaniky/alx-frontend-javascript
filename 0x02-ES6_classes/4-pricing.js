/* eslint-disable no-underscore-dangle */
// 4-pricing.js

export default class Pricing {
  constructor(amount) {
    this._amount = amount;
  }

  displayFullPrice() {
    return `${this._amount}`;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }
}
