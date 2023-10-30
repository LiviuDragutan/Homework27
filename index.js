const list = document.getElementById('list')
const getPost = (limit) => {
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`) 

.then ( (response) =>{
    return response.json()
}) .then ((data) => {
    data.forEach((item) => {
        const listItem = document.createElement ('li')
        listItem.innerText = item.body
                list.appendChild(listItem)
    })
})
}

getPost(15)

const list = document.getElementById('list2')
const getPost = (limit) => {
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`) 

.then ( (response) =>{
    return response.json()
}) .then ((data) => {
    data.forEach((item) => {
        const listItem = document.createElement ('li2')
        listItem.innerText = item.title
                list.appendChild(listItem)
    })
})
}

getPost(15)