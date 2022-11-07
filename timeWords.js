// function timeWord(str) {
//     if(str === '00:00') {
//         return "midnight"
//     }
//     if(str === '12:00') {
//         return 'noon'
//     }
//     let timeSplit = str.split(':')
//     let minutes = timeSplit[1]
//     let hours = timeSplit[0]
//     let minutesSplit = minutes.split('')
//     let minutesOne = minutesSplit[0]
//     let minutesTwo = minutesSplit[1]
//     let time = []

//     if(minutesOne === '0'){
//     }else if(minutesOne === '3'){
//         return 'Thirty-'
//     }





//     // if(hours === '00') {
//     //     time.push('twelve')
//     // } else if(hours === '01') {
//     //     time.push('one')
//     // }
// }

// console.log(timeWord('12:14'))


//jared's solution
let timeObj = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty"
}

function convertNumberToString(num) {
    if (num < 20 || num % 10 === 0) {
        return timeObj[num]
    } else {
        let onesCol = num % 10
        let tensCol = num - onesCol
        return timeObj[tensCol] + ' ' + timeObj[onesCol]
    }
}

function timeWord(str) {

    if (str === "00:00") {
        return "midnight"
    }

    if (str === "12:00") {
        return "noon"
    }

    let splitStr = str.split(':')
    let minutes = +splitStr[1]
    let hours = +splitStr[0]


    let answerStr = ''
    let timeOfDayAppendage = ''
    if (hours === 0) {
        answerStr += convertNumberToString(12)
        timeOfDayAppendage = 'am'
    } else if (hours === 12) {
        answerStr += convertNumberToString(hours)
        timeOfDayAppendage = 'pm'
    } else if (hours > 12) {
        answerStr += convertNumberToString(hours - 12)
        timeOfDayAppendage = 'pm'
    } else {
        answerStr += convertNumberToString(hours)
        timeOfDayAppendage = 'am'
    }

    if (minutes === 0) {
        answerStr += ' o\'clock '
    } else if (minutes < 10) {
        answerStr += ' oh ' + convertNumberToString(minutes) + ' '
    } else {
        answerStr += ' ' + convertNumberToString(minutes) + ' '
    }

    return answerStr + timeOfDayAppendage
}

console.log(timeWord("00:00"))
console.log(timeWord("23:04"))
console.log(timeWord("01:59"))
console.log(timeWord("11:15"))
console.log(timeWord("17:21"))
console.log(timeWord("12:30"))
console.log(timeWord("12:00"))
console.log(timeWord("12:01"))
console.log(timeWord("00:40"))