// Контроллери - це функції, які виконують приймають запити та надсилають відповіді.
// Також у контроллерах викликаємо функції-сервіси, які виконують основну логіку бек-енду.


const postService = require("../services/postService")

function getAllPosts(req, res){
    const context = postService.getAllPosts()
    
    res.render('posts', context)
}

function getPostById(req, res){
    const id = req.params.id

    const data = postService.getPostById(id)
    if (id <= data.length && id > 0){
        res.render('post', data.context)
    } else{
        res.render("incorrect_post")
    }
}

function createPost(req, res){
    const data = req.body
    postService.createPost(data)
    res.send('Your post was succesfully published.')
}


module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}