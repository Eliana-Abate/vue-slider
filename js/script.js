Vue.config.devtools = true;

console.log ('collegato', Vue);


const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
        ],
    },
    methods: {
        isCurrentImg(i) {
            return this.currentIndex === i ? 'current' : ''; 
        }

    },
});