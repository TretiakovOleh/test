function getCoupeNumber(a) {
    if(isNaN(a) || a*10%10 !== 0 || a < 0){
        return ("Ошибка. Проверьте правильность введенного номера места")
    }else if(a>0 && a<37){
        return Math.floor((a+3)/4)
    }else{return "Таких мест в вагоне не существует"}
}

console.log(getCoupeNumber(3.4))