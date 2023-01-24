const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document
    .querySelector('#project-funding')
    .value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description, version, public_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

// const cloudName = 'do7uphpx7'; // replace with your own cloud name
// const uploadPreset = 'rca0nvbb'; // replace with your own upload preset

// // Remove the comments from the code below to add
// // additional functionality.
// // Note that these are only a few examples, to see
// // the full list of possible parameters that you
// // can add see:
// //   https://cloudinary.com/documentation/upload_widget_reference

// var myWidget = cloudinary.createUploadWidget(
//   {
//     cloudName: cloudName,
//     uploadPreset: uploadPreset,
//     cropping: true, //add a cropping step
//     showAdvancedOptions: true, //add advanced options (public_id and tag)
//     sources: ['local', 'url'], // restrict the upload sources to URL and local files
//     multiple: false, //restrict upload to a single file
//     folder: 'user_images', //upload files to the specified folder
//     tags: ['users', 'profile'], //add the given tags to the uploaded files
//     context: { alt: 'user_uploaded' }, //add the given context data to the uploaded files
//     clientAllowedFormats: ['images'], //restrict uploading to image files only
//     maxImageFileSize: 2000000, //restrict file size to less than 2MB
//     maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
//     theme: 'purple', //change to a purple theme
//   },
//   (error, result) => {
//     if (!error && result && result.event === 'success') {
//       console.log('Done! Here is the image info: ', result.info);
//       document
//         .getElementById('uploadedimage')
//         .setAttribute('src', result.info.secure_url);
//     }
//   }
// );

// document.getElementById('upload_widget').addEventListener(
//   'click',
//   function () {
//     myWidget.open();
//   },
//   false
// );

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
