// Сервіси - це функції, які виконують основну логіку функцій відображення

const posts = [
    {
        name: 'NodeJS is so cool!',
        author: 'Serjik',
        text: "Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow"
    },
    {
        name: 'How to center a div?',
        author: 'Tosha',
        text: 'Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow'
    },
    {
        name: 'What color of nail polish is in trend today?',
        author: "Kamilla",
        text: 'Lorem ipsum abv yay cool wow'
    }
]



function getAllPosts(){
    const context = {
        posts: posts
    }
    return context
}

function getPostById(id){
    const context = {
        post: posts[id-1]
    }
    
    return {
        context: context,
        length: posts.length
    }
}

function createPost(data){
    posts.push(data)
}

module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}