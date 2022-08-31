import {
    addBeer,
    addPepsi,
    addWine,
    balance,
    beer,
    wine,
    pepsi,
    sum
} from './shop.js'
let addOption = document.forms.form1.add;
let basket = document.querySelector('.basket');
let option = document.getElementsByName('option');
let buy = document.forms.form1.buy;
addOption.addEventListener('click', function () {
    let number = document.forms.form1.number.value;
    if (option[0].checked) {
        if (number > beer) {
            document.querySelector('.modal').style.display = "flex";
            document.querySelector('.modal').innerHTML = `Вибачте, але на складі залишилося пива ${beer} штук`;
            setTimeout(() => {
                document.querySelector('.modal').style.display = "none";
                document.forms.form1.reset();
            }, 3000);
        } else {
            addBeer(number);
            basket.insertAdjacentHTML('beforeend', `<p>${option[0].value}: ${number} шт.</p>`);
            document.forms.form1.reset();
        }

    };
    if (option[1].checked) {
        if (number > wine) {
            document.querySelector('.modal').style.display = "flex";
            document.querySelector('.modal').innerHTML = `Вибачте, але на складі залишилося вина ${wine} штук`;
            setTimeout(() => {
                document.querySelector('.modal').style.display = "none";
                document.forms.form1.reset();
            }, 3000);
        } else {
            addWine(number);
            basket.insertAdjacentHTML('beforeend', `<p>${option[1].value}: ${number} шт.</p>`);
            document.forms.form1.reset();
        }
    };
    if (option[2].checked) {
        if (number > pepsi) {
            document.querySelector('.modal').style.display = "flex";
            document.querySelector('.modal').innerHTML = `Вибачте, але на складі залишилося пепсі ${pepsi} штук`;
            setTimeout(() => {
                document.querySelector('.modal').style.display = "none";
                document.forms.form1.reset();
            }, 3000);
        } else {
            addPepsi(number);
            basket.insertAdjacentHTML('beforeend', `<p>${option[2].value}: ${number} шт.</p>`);
            document.forms.form1.reset();
        }
    }
})

buy.addEventListener('click', function () {
    document.querySelector('.bought').innerHTML = `${basket.innerHTML} <p> Всього: ${sum} грн</p>`;
    basket.innerHTML = '';
    document.querySelector('.balance').textContent = `${balance} грн`;
    document.querySelector('.beer_number').textContent = `${beer} шт.`;
    document.querySelector('.wine_number').textContent = `${wine} шт.`;
    document.querySelector('.pepsi_number').textContent = `${pepsi} шт.`;
})