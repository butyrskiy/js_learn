const telegramContacts = {
  list: {
    Wife: 5053770520,
    'Father': 9050803377,
    'Mother': 9050801133,
    'Brother': 9050805599,
    'Auto Service': 9132338866,
    Barnaul: 666666,
  }, 

  add(name, number) {
    this.list[name] = number;
  },
  
  del(name) {
    delete this.list[name];
  },
}
//add new contact
telegramContacts.list.Airport = 3852337755;

//add new contact #2
telegramContacts.list['Bus station'] = 3852357593;

// delete contact
delete telegramContacts.list.Barnaul;


// add new contact using method 'add'
telegramContacts.add('Evgenia', 79050803377);
telegramContacts.add('Unknown', 79502335911);

// delete contact using method 'del'
telegramContacts.del('Unknown');


// вывод всем свойств (ключей и значений) объекта «list»
for(const key in telegramContacts.list) {
  console.log(`${key} - ${telegramContacts.list[key]}`);
}