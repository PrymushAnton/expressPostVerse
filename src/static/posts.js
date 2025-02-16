// window.addEventListener('beforeunload', function(event) {
//     event.preventDefault()
// });

const create_post_button = document.querySelector("#create_post")
const delete_post_button = document.querySelector("#delete_post")

const response = document.querySelector("#response")
create_post_button.addEventListener("click", ()=>{
    fetch('/post/create/', {
        method: 'POST',
        body: JSON.stringify({
            name: "Django framework: cons and pros",
            author: "Mykolay",
            text: "Django framework is lorem ipsum lorem ipsum!"
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


delete_post_button.addEventListener("click", ()=>{
    fetch('/post/delete/', {
        method: 'POST',
        body: JSON.stringify({
            id: 1
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