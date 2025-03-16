const createCommentButton = document.querySelector("#writeComment")

const titleOfPost = document.querySelector("#title")
const textOfPost = document.querySelector("#text")


const response = document.querySelector("#response")
createCommentButton.addEventListener("click", ()=>{
    const path = window.location.pathname.split('/')
    const postId = path[path.length-1]
    fetch(`/post/${postId}/create/comment`, {
        method: 'POST',
        body: JSON.stringify({
            title: titleOfPost.value,
            text: textOfPost.value,
            postId: postId
        }),
        headers: {
            "Content-Type": 'application/json'
        }
        
    })
    .then(res => res.text())
    .then((text) => {
        console.log(text)
        response.innerHTML = text
    })
})

