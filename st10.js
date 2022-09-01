let login = prompt("Введите логин");

if (login == "admin") {
   let pass = prompt("Введите пароль");

   if(pass == null) {
    alert("Отменено");
   }
    else if (pass == "boss") {
    alert("Здравствуйте!")
    }
    else {
        alert("Неверный пароль")
    }
    
} else if (login == '' || login == null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}