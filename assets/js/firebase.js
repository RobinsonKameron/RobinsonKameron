// // Set the configuration for your app
// // TODO: Replace with your project's config object
// var config = {
//     apiKey: "V8R7v6gYEfxGD3NAUpxOEMK6VvasCDGsJ4hTxUT1",
//     authDomain: "robinsonKameron.firebaseapp.com",
//     databaseURL: "https://robinsonKameron.firebaseio.com",
//     storageBucket: "bucket.appspot.com",
// };
// firebase.initializeApp(config);
//
// // Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage();
//
// // Create a storage reference from our storage service
// var storageRef = storage.ref();
//
// // Create a child reference
// var imagesRef = storageRef.child('images');
// // imagesRef now points to 'images'
//
// // Child references can also take paths delimited by '/'
// var spaceRef = storageRef.child('images/space.jpg');
// // spaceRef now points to "images/space.jpg"
// // imagesRef still points to "images"
//
// // Parent allows us to move to the parent of a reference
// var imagesRef = spaceRef.parent;
// // imagesRef now points to 'images'
//
// // Root allows us to move all the way back to the top of our bucket
// var rootRef = spaceRef.root;
// // rootRef now points to the root
//
// // Create a root reference
// var storageRef = firebase.storage().ref();
//
// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountain.jpg');
//
// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountain.jpg');
//
// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false
