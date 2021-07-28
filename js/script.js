Vue.config.devtools = true;

console.log ('collegato', Vue);


const root = new Vue({
    el: '#root',
    data: {
      images: [
        './images/image1.jpg',
        './images/image2.jpg',
        './images/image3.jpg',
        './images/image4.jpg',
      ],
    },
});