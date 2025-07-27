/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
function concatenation(n) {
    if (n>=1 && n<=9){
        let result;
        result = (Number(`${n}`))+(Number(`${n}${n}`))+(Number(`${n}${n}${n}`));
        console.log(result);
    }else{
        console.log ("Error, input range should be between 1 and 9, please try again");
    }
}



