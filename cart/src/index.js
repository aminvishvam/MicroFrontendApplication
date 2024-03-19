import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart this commit from the VSC online</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;
