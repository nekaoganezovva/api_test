const postListDiv = document.querySelector('#postList');

function getPostList() {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
        data.posts.forEach(post => {
            const postDiv = document.createElement('div');

            postDiv.innerHTML = (`
                <p>${post.title}</p>
                <p>${post.body}</p>
            `);
            console.log(postDiv);
            postListDiv.appendChild(postDiv); 
        });
    });
}

getPostList();
