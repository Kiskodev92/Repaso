function zodiac(day, month) {
    if ((day >= 21 && month == 3) || (day <= 20 && month == 4)) {
        console.log("Esta persona es Aries");
    }
    else if ((day >= 21 && month == 4) || (day <= 20 && month == 5)) {
        console.log("Esta persona es Tauro");
    }
    else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
        console.log("Esta persona es Géminis");
    }
    else if ((day >= 21 && month == 6) || (day <= 20 && month == 7)) {
        console.log("Esta persona es Cáncer");
    }
    else if ((day >= 21 && month == 7) || (day <= 20 && month == 8)) {
        console.log("Esta persona es Leo");
    }
    else if ((day >= 21 && month == 8) || (day <= 20 && month == 9)) {
        console.log("Esta persona es Virgo");
    }
    else if ((day >= 21 && month == 9) || (day <= 20 && month == 10)) {
        console.log("Esta persona es Libra");
    }
    else if ((day >= 21 && month == 10) || (day <= 20 && month == 11)) {
        console.log("Esta persona es Escorpio");
    }
    else if ((day >= 21 && month == 11) || (day <= 20 && month == 12)) {
        console.log("Esta persona es Sagitario");
    }
    else if ((day >= 21 && month == 12) || (day <= 20 && month == 1)) {
        console.log("Esta persona es Capricornio");
    }
    else if ((day >= 21 && month == 1) || (day <= 20 && month == 2)) {
        console.log("Esta persona es Acuario");
    }
    else if ((day >= 21 && month == 2) || (day <= 20 && month == 3)) {
        console.log("Esta persona es Piscis");
    }
    return zodiac;
}
zodiac(17, 12);
