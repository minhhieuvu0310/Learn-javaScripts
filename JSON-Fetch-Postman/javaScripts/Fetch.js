/**
 * Fetch dùng để lấy dữ liệu
 */

//Cách sử dụng fetch
// ở then đầu tiên dữ liệu chưa được trả về khi gọi respone.json() nó mới bắt đầu trả về một promise và bắt đầu đọc nội dung của phản hồi
let postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function(respone){
        return respone.json();
    })
    .then(function(posts){
        let htmls = posts.map(function(post){
            return `<li>
                <h2>title: ${post.title}</h2>
                <p>body: ${post.body}</p>
            </li>`
        })
        let  html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })
