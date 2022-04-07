new Vue({
    el:'#vue-app',
    data: {
        name:'',
        job:'Front End Developer',
        website:'https://my.uncc.edu',
        websiteTag: '<a href="https://my.uncc.edu> UNCC Website</a>',
        age: '',
        x: 0,
        y: 0,
        date: ''
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + this.name;
        },
        add: function(inc) {
            this.age+=inc;
        },
        subtract: function(dec) {
            this.age-=dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert("You clicked the link")
        },
        show: function() {
            document.getElementById('sign').style.display = "block";
            document.getElementById('buttonHide').style.display = "none";
        }
    }
});