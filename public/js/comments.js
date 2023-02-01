const commentFormHandler = async function (event) {
    event.preventDefault();
    console.log("button pushed")

    const recipe_id = document.querySelector('.comment-form').dataset.recipe_id;
    console.log("RECIPE ID:" + recipe_id);
    const comment_content = document.querySelector('#comment-content-post').value.trim();
    console.log("COMMENT CONTENT POST:"+comment_content);

    if (comment_content) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                recipe_id,
                comment_content
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