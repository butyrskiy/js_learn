// ? Стандартный импорт
// * import { config, myFunction } from './module1';

// ? Импорт с изменёнными именами
// * import {conf, foo} from './module1'

// Todo. Запускаем код импортированный из файла «module1»
// console.log(conf);
// foo();


// Todo. Также мы можем указать новые имена при импорте
// ? Используем ключевое слово «as»

import {conf as cfg, foo as f} from './module1'
console.log(cfg);
f();

// Todo. Можно импортировать сразу все файлы из модуля
// ? Необходимо использовать ключевое слово «as» и задать название для импорта.

// * import * as mod1 from './module1';

// * console.log(mod1.conf);
// * mod1.foo();


// Todo. Дефолтный экспорт из «module2»
// ? Когда используется «export default» при импорте не ставим фигурные скобки
// ? Так как эспортиртируется класс, то мы можем создать экземпляр этого класса
import Product from './module2'

const newProduct = new Product('Apple');
console.log(newProduct);