const app = {
    data() {
        return {
            tasks: [{
                    image: './images/r.jpg',
                    article: 'Rose',
                    zoom: false
                },
                {
                    image: './images/y.jpg',
                    article: 'Yellow Rose',
                    zoom: false
                },
                {
                    image: './images/b.jpg',
                    article: 'Blue Rose',
                    zoom: false
                },
                {
                    image: './images/w.jpg',
                    article: 'White Rose',
                    zoom: false
                }

            ],
            inputTask: '',
            notFound: false,
            doSearch: false,
            notFound: false
        }
    },

    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },

        cancelSeach() {
            this.inputTask = '';
            this.doSearch = false;
        },




        zoom(index) {
            this.tasks[index].zoom = !this.tasks[index].zoom;
        }
    },



    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },


        search() {
            
            this.notFound = false;
            let g;
            if (this.inputTask == '') {
                g = this.tasks;
                return g;
            } else {
                this.inputTask = this.inputTask.toLowerCase();
                g = this.tasks.filter(n => n.article.toLowerCase().includes(this.inputTask.toLowerCase()));  
                if (g == '') {
                    this.notFound = true;
                } else {
                    return g;
                }
            }
            // alert(this.notFound)
        }


    }

}
Vue.createApp(app).mount('#app')