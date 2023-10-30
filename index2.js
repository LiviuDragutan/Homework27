fetch('https://jsonplaceholder.typicode.com/posts?_id=101', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 1,
        title: 'new post',
        body: 'new body'
    }),
    headers: {
        'Content-type' : 'application/json; charset=UTF-8',
    }
})
.then ( (response) =>{
    return response.json()
}) .then ((data) => {
    console.log(data)
})

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: 'new post',
        body: 'new body'
    }),
    headers: {
        'Content-type' : 'application/json; charset=UTF-8',
    }
})
.then ( (response) =>{
    return response.json()
}) .then ((data) => {
    console.log(data)
})


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'DELETE',
    
})
.then ( (response) =>{
    return response.json()
}) .then ((data) => {
    console.log(data)
})