import faker from "faker";

faker.locale = "uk";

const streetRu = [
  "Школьная",
  "Лесная",
  "Садовая",
  "Советская",
  "Новая",
  "Набережная",
  "Заречная",
  "Зеленая",
  "Центральная",
  "Молодёжная",
];
const streetUa = [
  "К. Маркса",
  "Блюхера",
  "Енгельса",
  "Чапаєва",
  "Конєва",
  "Кірова",
  "Київська",
  "Московська",
  "Сімферопорльська",
  "Морська",
  "Курортна",
];

function random() {
  const streetName = streetUa[Math.floor(Math.random() * streetUa.length)];
  const number = Math.floor(Math.random() * 250);
  const flat = Math.floor(Math.random() * 500);
  return `${streetName} ${number}-${flat}`;
}
export function createUser() {
  return {
    name: `${faker.name.firstName(2)} ${faker.name.lastName(2)}`,
    address: `${faker.address.cityName()}, ${random()}`,
    tel: faker.phone.phoneNumberFormat(),
    id: faker.finance.account(12),
  };
}
