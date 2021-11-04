import faker from 'faker';

export function createUser() {
  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: faker.address.streetAddress(),
    tel: faker.phone.phoneNumberFormat(),
    id: faker.finance.account(12),
  };
}
