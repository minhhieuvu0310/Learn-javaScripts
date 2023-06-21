let coursesAPI = ' http://localhost:3000/courses';

// lấy ra tất cả khóa học
function getCourses(callback) {
  fetch(coursesAPI)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback)
}

//hiển thị ra giao diện
function renderCourses(courses) {
  let listCoursesBlock = document.getElementById('list-courses');
  let htmls = courses.map(function (course) {
    return `<li>
                <h4 id='course-item-${course.id}__name'>${course.name}</h4>
                <p id='course-item-${course.id}__description'>${course.description}</p>
                <button onclick="handleUpdateCourses(${course.id})">Update</button>
                <button onclick="handleDeleteCourses(${course.id})">DELETE</button>
            </li>`
  })

  listCoursesBlock.innerHTML = htmls.join('');
}

//Tạo một khóa học
function handleCreateForm() {
  let btn_create = document.getElementById('create-courses');
  btn_create.onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let description = document.querySelector('textarea[name="description"]').value;
    if (name.length != 0 && description.length != 0) {
      var fromData = {
        name: name,
        description: description
      }

      createCourses(fromData)
    }
  }
}

//Tạo một courses
function createCourses(data) {
  let options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  fetch(coursesAPI, options)
    .then(function (respone) {
      return respone.json();
    })
    .then(function (respone) {
      let html = `<li>
                      <h4 id='course-item-${respone.id}__name'>${respone.name}</h4>
                      <p id='course-item-${respone.id}__description'>${respone.description}</p>
                      <button onclick="handleUpdateCourses(${respone.id})">Update</button>
                      <button onclick="handleDeleteCourses(${respone.id})">DELETE</button>
                  </li>`
      let listCoursesBlock = document.getElementById('list-courses');
      listCoursesBlock.insertAdjacentHTML('beforeend', html);
      clearInput();
    })
}

//UPDATE
function updateCourses(id, data) {
  let options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  fetch(coursesAPI + '/' + id, options)
    .then(function (respone) {
      return respone.json();
    })
    .then(function (data) {
      document.getElementById(`course-item-${id}__name`).innerText = data.name;
      document.getElementById(`course-item-${id}__description`).innerText = data.description;
      clearInput();
    })
}

function handleUpdateCourses(id) {
  let name = document.getElementById(`course-item-${id}__name`).innerText;
  let description = document.getElementById(`course-item-${id}__description`).innerText

  let name_input = document.querySelector('input[name="name"]');
  let description_input = document.querySelector('textarea[name="description"]');

  name_input.value = name
  description_input.value = description

  let btn = document.getElementById('create-courses');
  btn.onclick = function () {
    let name_upadate = document.querySelector('input[name="name"]').value;
    let description_update = document.querySelector('textarea[name="description"]').value;

    if (name.length != 0 && description.length != 0) {
      let fromData = {
        name: name_upadate,
        description: description_update
      }

      updateCourses(id, fromData)
    }
  }
}

// DELETE
function deleteCourses(id) {
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  fetch(coursesAPI + '/' + id, options)
    .then(function (respone) {
      return respone.json();
    })
    .then(function (data) {
      document.getElementById(`course-item-${id}__name`).parentElement.remove();
    })
}

function handleDeleteCourses(id){
  deleteCourses(id)
}

//ClearInput
function clearInput(){
  document.querySelector('input[name="name"]').value = "";
  document.querySelector('textarea[name="description"]').value = "";

}

function start() {
  getCourses(renderCourses);

  handleCreateForm();
}

start();
