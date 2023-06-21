/**
 * Sync: đòng bộ vs Async: bất đồng bộ
 * Promise có liên quan đến Async(bất đồng bộ), callback hell(callback lồng callback)
 * Promise ra đời để xử lý bất đồng bộ trong javaScripts, xử lý callback hell
 */

/*
 *Giải thích callback hell là gì: 
 là một quá trình khi nhiều hàm callback lồng vào nhau để xử lý quá trình bất đồng bộ.
 Điều này xảy ra khi các  tác vụ đồng bộ phải thực hiện theo trình tự nhất định và kết quả của tác vụ sau phụ thuộc vào kết quả của tác vụ trước
 ==> khi đó mã trở nên khó đọc, khó hiểu và khó bảo trì
 *Có một số vấn đề với callback hell:
    + Khó đọc mã
    + Khó quản lý lỗi
    + Khó bảo trì
*/

/**
 * Sử dụng Promise
 */
// 1.tạo ra Promise
// 2.Tạo ra Excutor

// Nếu Promise ở trạng thái treo(Pending) sẽ xảy ra hiện tượng rò rỉ bộ nhớ(Make Memory)
// Không reslove(), hoặc reject() ==> pending
// 1.Pending
// 2.Fulfilled
// 3.Reject

var promise = new Promise(
    //Excutor
    function (resolve, reject) {
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
    }
)

// resolve() --> then
// reject() --> catch

promise
    .then(function () {
        console.log('Successully')
    })
    .catch(function () {
        console.log('Failure!')
    })
    .finally(function () {
        console.log('Done')
    });

/*
 * Trả lời câu hỏi phỏng vấn khi hỏi về Promise:
    Promise là một khái niệm sinh ra để giúp chúng ta xử lý bất đồng bộ, trước khi có Promise chúng ta thường sử dụng callback
    khi sử dụng callback chúng ta sẽ gặp một vấn đề là callback hell khi đó code sẽ trở nên khó đọc, rối rắm, khó bảo trì. Promise
    được sinh ra ở phiên bản mới hơn cự thể là ES6 và chúng ta có thể dùng nó để khắc phục tình trạng callback hell .
 */


/**
 * Nếu return trong then không phải là promise nó sẽ thực thi luôn, nếu return là một Promise thì nó sẽ đợi Promise hoàn thành thì các then sau mới chạy tiếp
 * Nếu trong then ko có return thì then sau nó sẽ nhận là undefined
 * Nếu như trong then trước return cái gì thì then sau sẽ nhận được cái data đấy
 * nếu như trong then bạn có return ra một cái Promise mà cái Promise nó bị reject thì đến then sau nó sẽ nhảy ngay vào catch
 */

// ví dụ về một bài tập: 1s in ra 1 ==> 1s sau in ra 2 ==> 1s sau in ra 3 ==> 1s sau in ra 4
function sleep(ms){
    return new Promise((reslove, reject)=>{
        setTimeout(reslove, ms);
    })
}

sleep
    .then(function(){
        console.log(1)
        sleep(1000)   
    })
    .then(function(){
        console.log(2)
        sleep(1000)   
    })
    .then(function(){
        console.log(3)
        sleep(1000)   
    })
    .then(function(){
        console.log(4)
        sleep(1000)   
    })

/**
 * Promise.reslove() ==> trả cho ta một promise ở trạng thái thành công
 * Promise.reject() ==> trả cho ta một Promise ở trạng thái thất bại
 * Promise.all() ==> giúp chúng ta chạy song song các Promise (chúng ta sử dụng cái này khi các Promise không phụ thuộc nhau, phụ thuộc nhau thì làm cách khác nhé)
 */

//Ví dụ về Promise.all()
//! nếu trong Promise.all() có một promise bị reject thì nó sẽ không quan tâm đến các promise khác nữa ==> nó sẽ nhảy ngay vào catch()
// Có callback hell thì cũng có Promise hell
let promise1 = new Promise(function(reslove){
    setTimeout(()=>{
        reslove([1]);
    }, 2000);
})

let promise2 = new Promise((reslove)=>{
    setTimeout(()=>{
        reslove([2,3]);
    },5000)
})

Promise.all([promise1, promise2])
    .then(([data1, data2])=>{
        let data = data1.concat(data2)
        console.log(data)
    }) //==> [1,2,3]

