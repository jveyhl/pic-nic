const commentFormHandler = async function (event) {
    event.preventDefault();

    const recipe_id = document.querySelector('.comment-form').dataset.recipe_id;
    const commentContentPost = document.querySelector('#comment-content-post').value.trim();

    if (commentContentPost) {
        await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({
                recipe_id,
                commentContentPost
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler)