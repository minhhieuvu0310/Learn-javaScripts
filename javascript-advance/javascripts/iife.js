// 1.IIFE nó trong như nào

//Expression function
(function(message){
  console.log('message: '+ message)
})('chào bạn tôi là Vũ Minh Hiếu')

// Khi viết phải dùng dấu ; trước IIFE

//IIFE nó không có tính sử dụng lại
//IIFE dùng thì không nên đặt tên lại cho nó , hoặc nếu bạn muốn đặt tên cho nó trong trường hợp muốn giải thích hàm này làm gì

// Khi nào sử dụng IIFE
/**
  Tại sao lại phải sử dụng IIFE nó chỉ là một hàm thực hiện ngay thôi mà ==> chi bằng viết thẳng code cho nhanh có phải không
  Giải Thích: trong một dự án có nhiều thành viên nếu viết thẳng code mà không dùng IIFE thì sẽ rất có thể đặt tên biến trùng nhau hoặc
  trùng tên hàm ==> nó sẽ dẫn đến việc ghi đè lẫn nhau hoặc báo lỗi hoặc cảy ra các vấn đề không mong muốn

  Khi sử dụng IIFE thì nó là private, và trong javaScripts thì mỗi hàm nó tạo ra một phạm vi của riêng nó
  Người ta muốn sử dụng nó khi muốn che giấu đi những tên hàm tên biến, hoặc không muốn nó bị ảnh hưởng bởi phạm vi bên ngoài

  Áp dụng: khi muốn đoạn mã thực hiện ngay mà phạm vi nó không ảnh hưởng đến phạm vi bên ngoài
 */

// Ví dụ sử dụng IIFE

const app = (function(){
  const cars = [];

  return {
    get(index){
      return cars[index]
    },
    add(car){
      cars.push(car)
    },
    edit(car){
      cars[index] = car
    },
    delete(index){
      cars.splice(index,1)
    }
  }
})()
