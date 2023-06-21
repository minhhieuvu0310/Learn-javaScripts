/**
 ** HTML DOM là Document Object Model
 ** DOM có 3 thành phần đó là Element (là các thẻ html như a, img ...), Attribute(là các thuộc tính của thẻ), Text
 * JavaScripts giúp chúng ta truy cập vào DOM để thao tác với Element, Attribute, Text để có thể thay đổi và chỉnh sửa chúng
 */

/**
 * HTML DOM không phải là JavaSCrtipts
 * JavaScripts nó chỉ cung cấp 1 bộ công cụ để chúng ta truy cập vào DOM
 * *Note : DOM không phải là javaScripts (DOM là 1 quy chuẩn mô tả hình thành phần tài liệu trong HTML được đưa ra bởi W3C)
 * *JavaScripts : có thể chạy ở Brower || Server
 * *Brower: HTML -> DOM -> DOM API(WEB API)
 * *Tại sao trên Brower JavaScripts lại có DOM vì nó có WebAPI
 */

/**
 * document là đại diện cho cả website của bạn, khi trình duyệt đọc mã HTML -> DOM -> tất cả dữ liệu về dom được lưu trữ trong document
 */

/**
 * Get element method : Id, Class, tag, CSS selector, HTML collection
 * Collection thì khác mảng ở chỗ là nó ko có các method map(), reduce(), filter()
 */

/**
 * NodeList là một đối tượng trong JavaScripts đại diện cho một tập hợp các phần tử DOM.
 * Nó tương tự như một mảng(Nhưng nó không phải là mảng)
 * Không có các phương thức tích hợp sẵn như mảng(Nên đừng lấy method của mảng mà dùng)
 * Nó thường được trả về từ các phương thức getElement(): querySelectorAll
 */

/**
 * HTML collection và NodeList
 * HTML collection : -> getElementByClassName, getElementById, get.....
 * NodeList : -> querySellectorAll, querySellector
 * *HTML collection và NodeList chúng hoàn toàn khác nhau(nhớ kĩ chúng hoàn toàn khác nhau)
 *! HTML collection là một tập hợp document element(hiểu đơn giản nó là các element của DOM)
 * * HTML collection là một tập hợp live nó có nghĩa là nó sẽ tự động cập nhật nếu có thay đổi trong DOM(Ví dụ: Khi một phần tử được thêm mới hoặc bị xóa, HTML 
    sẽ tự động cập nhật để phán ánh các thay đổi đó)
 * * NodeList có thể là live hoặc static, tùy thuộc vào cách lấy nó. NodeList trả về từ querySelectorAll() là static không tự động câp nhật
 * NodeList có thể truy cập bằng index, HTML collection có thể truy cập bằng name, index, number
 */

/**
 * VD: <h1 class="test">Vmhieu</h1>
 * Attribute node là các attribute của element (ví dụ ở trên các class,id ... nằm trong thẻ mở của h1 được gọi là các attribute)
 * Text node ở đây là Vmhieu(hiểu đơn giản nó là nội dung giữa thẻ mờ và thẻ đóng)
 */

/**
 * DOM Attribute
 * thêm một attribute của 1 element : setAttribute(), element.attribute
 * lấy ra một attribute: getAttribute('tên attribute')
 * ! Nhớ kĩ với những cú pháp như element.attribute thì attribute phải hợp lệ với các element đó
 * Có 2 truy suất attribute cách 1 là truy suất trực tiếp qua thuộc tính, truy suất qua hàm
 */

/**
 * Inner Text vs textContent: lấy ra nội dung của Text Node và sừa text Node
 * Inner Text nó sẽ trả về cái text giống như những gì mà bạn nhìn thấy (ví dụ bạn có tag display:none thì nó không hiện text luôn)
 * textContent nó sẽ trả về cái text thực tế bên trong mã nguồn bao gồm các khoảng trắng , kể cả là code
 * innerText là thuộc tính chỉ có trên elementNode , textContent là thuộc tính có cả trên elementNode và textNode
 */

/**
 * DOM event và event Listener
 * giống nhau : cả hai cái trên đều cho phép bạn phản ứng với hành vi của người dùng trên trang Web
 * khác nhau : 
 *    1.
 *       - DOM evnet: là ám chỉ một sự kiện cụ thể
 *       - Event Listener: nó cho phép bạn đăng kí nhiều hàm xử lý cho 1 sự kiện
 *     Nghĩa là :
 *       - DOM event: Đó là nếu bạn sử dụng DOM event để kích hoạt sự kiện thì nếu bạn kích hoạt hai lần thì lần thứ hai sẽ đè lên lần thứ nhất
 *       - event Listener: nó cho phép tái kích hoạt sự kiện
 *    2.
 *       - Event Listener có tính linh hoạt hơn và phổ biến hơn trong việc xử lý sự kiện. Nó cho phép bạn thêm và gỡ bỏ hàm xử lý sự kiện dễ dàng
 *       - DOM event, bạn thường phải gán hàm xử lý trực tiếp cho sự kiện cụ thể.
 * Sử dụng:
 *   - DOM event: khi viết sự kiện cho một đối tượng cụ thể
 *   - Event Listener: dùng khi bạn muôn thêm hoặc xóa event một cách linh hoạt
 */
