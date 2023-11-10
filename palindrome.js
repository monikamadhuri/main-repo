

function isPalindrome(str) {
    var rev=str.split("").reverse().join("");

    if(rev == str){
        return true
    }
    return false
}
var str1 = "racecar";
let str2 = "12321";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
//new branch changes-1
