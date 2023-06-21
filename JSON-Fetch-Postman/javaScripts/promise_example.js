/**
 * Đây là ví dụ về Promise
 */

let users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'vua ra xong em oi'
    },
]

// 1.lấy comments ra
// 2.Từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

function getComments(){
    return new Promise(function(reslove){
        setTimeout(function(reslove){
            reslove(comments)
        }, 1000)
    })
}

function getUsersById(userIds){
    return new Promise(function(reslove){
        let result = users.filter(function(user){
            return userIds.include(user.id)
        })
        setTimeout(function(){
            reslove(result);
        }, 1000)
    })
}

getComments()
    .then(function(comments){
        let userIds = comments.map(()=>{
            return comments.user_id
        })
        
        return getUsersById(userIds)
                    .then(function(users){
                        return {
                            users: users,
                            comments: comments,
                        };
                    });
    }); 


