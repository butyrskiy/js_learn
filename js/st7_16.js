const telegramContacts = {
  Wife: 5053770520,
  'Father': 9050803377,
  'Mother': 9050801133,
  'Brother': 9050805599,
  'Friend 0': 9132338866,
  Barnaul: 666666,
  
  add(name, number) {
    this[name] = number;
  },
  
  del(name) {
    delete this[name];
  },
}

telegramContacts.Friend = 9134552244;
telegramContacts['Friend 1'] = 9137666600;
telegramContacts.Friend = 'not a number';

delete telegramContacts['Friend 0'];
delete telegramContacts.Barnaul;

telegramContacts.add('Evgenia', 79050803377);
telegramContacts.add('Unknown', 79502335911);

telegramContacts.del('Unknown');
telegramContacts.del('Friend 1');

console.log(telegramContacts);