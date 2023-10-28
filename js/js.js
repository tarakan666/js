// let item = 0 
// while (item < 100) {
//     console.log(item);
//     item += 1
// }

// do {
//     document.write(`<h1>${item}</h1>`)
//     item += 1
// } while (item < 100)

// // 

// while (true) {
//     let ask = +prompt('число')
//     if (ask == 13) {
//         break
//     }
// }

// 

// let n = 0 
// while (n < 100) {
//     n = n +3 
//     console.log(n);
// }

// 

// let num = 1025
// let sh = 0
//     while (num > 30) {
//         console.log(num); 
//         num = num  / 5 
//         console.log(sh);
//         sh = sh += 1
//     }


// let ran = Math.floor(Math.random() * 10);
// console.log(ran);
// let ok = 0
// while (true) { 
//     let ask = +prompt('угодай число ' + ran )

//     ok = ok += 1
//     console.log(ok);
//     if (ask == ran) {
//         break
//     }
// }


let hg = Math.floor(Math.random() * 100) + 1
let sumpop = 0
console.log(hg);
while (true) {
    let ask = +prompt(`угодай число ${hg}`)
    sumpop++
    if (hg == ask) {
        console.log("угодал");
        console.log(sumpop);
        if (sumpop >= 1 && sumpop <= 3) {
            console.log("молодец");
        } else if (sumpop >= 4 && sumpop <= 8) {
            console.log("лошара");
        } else {
            console.log("ливай");
        }
        break
    } else if (hg + 5 >= ask && hg - 5 <= ask) {
        console.log('очень хорячо');
    } else if (hg + 10 >= ask && hg - 10 <= ask) {
        console.log('хорячо');
    } else {
        console.log('холодно');
    }
}