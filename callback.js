/**
 * Callbcak hiểu đơn giản là một hàm truyền qua một hàm khác như là một đói số
 * Callback là một hàm sẽ thực hiện khi hàm khác thực hiện xong
 * Callback giúp chúng ta xử ly bất đồng bộ trong JS
 */


/**
 * trong javaScript thì có value type(tham trị) and reference type(tham chiếu)
 */
Array.prototype.myMap = function (cb) {
  let arrLength = this.length;
  let output = []
  for (let i = 0; i < arrLength; i++) {
    let result = cb(this[i], i);
    output.push(result);
  }
  return output
}

Array.prototype.myForEach = function (cb) {
  for (let index in this) {
    if(this.hasOwnProperty(index)){
        cb(this[index], index, this)
    }
  }
}

Array.prototype.MyFilter = function(cb){
  let output = [];
  for (const index in this) {
    if(this.hasOwnProperty(index)){
      var result = cb(this[index], index, this);
      if(result){
        output.push(this[index]);
      }
    }
  }
  return output
}
// Expected results
const numbers = [6, 7, 8, 9];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// }))


// console.log(numbers.myForEach(function (couser, index, array) {
//   if(index % 2 == 0) console.log(index, couser)
// }))


console.log(numbers.filter(function(couser, index){
  return couser > 7
}))

console.log(numbers)
// console.log(Object.getOwnPropertyNames(Array.prototype));
