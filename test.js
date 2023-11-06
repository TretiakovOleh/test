const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const a = [];
const b = [];

function availableCurr(arr, missingCurr) {
    let res = '';
    arr.length == 0 ? res = "Нет доступных валют" :  res = "Доступные валюты:\n";

    for (let el of arr){
        if (el !== missingCurr){
            res += `${el}\n`
        }
    }
    return res
}
console.log(availableCurr([...additionalCurrencies,...baseCurrencies],"CNY"))