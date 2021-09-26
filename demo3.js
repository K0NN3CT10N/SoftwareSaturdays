const app = new Vue({
    el: '#app',
    data: {
        message: "Testing some other v- directives:",
        toggle: true,
        image: "0",
        image1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        image2: "https://purdueieee.org/software/images/logo_white.jpg",
        change: true,
    },
    methods: {
        set_toggle: function() {
            this.toggle = !this.toggle;
        },
        toggle_image: function() {
            this.change = !this.change;
            if(this.change){
                this.image = this.image1;
            } else {
                this.image = this.image2;
            }
        },
    },
    computed: {
        otherToggle: function() {
            return !this.toggle;
        },
        different_image: function() {
            return this.image;
        }
    }
});