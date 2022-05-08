// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

function validation(check_string){
    if (typeof check_string == "string")
    {   if (check_string.length > 0) 
        {
            let isValid = true
            if (/\s/.test(check_string) == true) 
            {console.log("String can't contain a space"), isValid = false;}
            if (check_string.length < 5)
            {console.log("String < 5"), isValid = false;}
            if (check_string.length > 64)
            {console.log("String > 64"), isValid = false;}
            if (check_string.includes("@") == false)
            {console.log("Add @"), isValid = false;}
            if (/[A-Za-zА-Яа-я]/.test(check_string) == false)
            {console.log("Add letters"), isValid = false;}
            if (/[A-ZА-Я]/.test(check_string) == false)
            {console.log("Add UpperCase letters"), isValid = false;}
            if (/[0-9]/.test(check_string) == false)
            {console.log("Add numbers"), isValid = false;}
            if (isValid == true) 
            {console.log("Validation passed")}
        }
        else console.log("Add any symbol")
    }
    else console.log("It is not a string")
}
validation("Sample text")