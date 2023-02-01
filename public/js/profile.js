const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const description = document.querySelector('#recipe-desc').value.trim();

  const has_nuts = document.querySelector('#nuts').checked
  const has_gluten = document.querySelector('#gluten').checked;
  const has_eggs = document.querySelector('#eggs').checked;
  const has_dairy = document.querySelector('#dairy').checked;
  const has_shellfish = document.querySelector('#shellfish').checked;
  console.log("NUTS"+has_nuts);
  console.log('GLUTEN: '+has_gluten);


  document.querySelector('textarea').addEventListener('focus', function() {
    this.selectionStart = 0;
    this.selectionEnd = 0;
  });
  
  

  if (name && description) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        version,
        public_id,
        has_nuts,
        has_dairy,
        has_gluten,
        has_shellfish,
        has_eggs
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete recipe');
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

var version;
var public_id;

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'do7uphpx7',
    uploadPreset: 'rca0nvbb',
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info);
      var results = result.info;
      version = results.version;
      public_id = results.public_id;
    }
  }
);

document.getElementById('upload_widget').addEventListener(
  'click',
  function () {
    myWidget.open();
  },
  false
);

document
  .getElementById('create_recipes')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.recipe-list')
  .addEventListener('click', delButtonHandler);
