new Vue({
    el:'#vue-app',
    data: {
        name:'Michael',
        job:'Front End Developer',
        website:'https://my.uncc.edu',
        websiteTag: '<a href="https://my.uncc.edu> UNCC Website</a>',
        age: 21,
        x: 0,
        y: 0
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
        }
    }
});