# card_validator

[![Build status](https://ci.appveyor.com/api/projects/status/e9ln1xemqi04u9g8?svg=true)](https://ci.appveyor.com/project/Stanislavsus-edu/card-validator)

[gh-pages](https://stanislavsus-edu.github.io/card_validator/)

При введении первой цифры карты "2" - подсвечивается карта "Мир"

При введении первой цифры карты "4" - подсвечивается карта "Visa"

При введении первой цифры карты "5" - подсвечивается карта "Mastercard"

При нажатии на кнопку "click to validate" - проверяется валидность карты, результатом нажатия становится всплыв сообщения 

Используется [следующий алгоритм](https://en.wikipedia.org/wiki/Luhn_algorithm) для проверки валидности номера карты. В качестве источника номеров карт используйте [freematter](https://www.freeformatter.com/credit-card-number-generator-validator.html)

Написаны авто-тесты на функции проверки номера карты

Подключен Puppeteer, который проверяет взаимодействие для двух различных вариантов:
1. Ввод валидного номера карты
2. Ввод невалидного номера краты

