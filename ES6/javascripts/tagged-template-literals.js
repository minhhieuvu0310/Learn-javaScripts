function highlight([first, ...string], ...values){
  let html = values.reduce((accumulator, currentvalue) => [...accumulator, currentvalue, string.shift()] ,[first])
  console.log(html.join(''))
}

let brand = 'F8'
let coures = 'JavaScripts'

highlight`học lập trình ${coures} tại ${brand} !`

/**
 * Note: khi sử dụng  tagged template literals thì ta nhận được các tham số
 * 1 mảng [học lập trình, tại, !], 2 tham số F8, JavaScript
 * nó sẽ gom các phần tử mà ta ko truyền template string vào thành một mảng, các tham số còn lại là các tham số mà ta truyền bằng template literals
 */