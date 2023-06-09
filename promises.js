const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout( () => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something Went Wrong!')
            }
        }, 2000)
    });
}

// createPost({ title: 'Post Three', body: 'This is post Three'}).then(getPosts);

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise( (resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    .then(json => console.log(json))
    );

Promise.all([promise1, promise2, promise3]).then( (values) => console.log(values));
