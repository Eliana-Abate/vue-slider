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
            return (this.currentIndex === i) ? 'current' : ''; 
        },

        increaseIndex() {
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
                console.log(this.currentIndex);
            }  
        },

        decreaseIndex() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
                console.log(this.currentIndex);
            }
        },

        selectDot(i) {
            this.currentIndex = i; 
        }
    },
});