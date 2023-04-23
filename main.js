new Vue({
    el: '#tasklist',
    data: {
        title:'to do list',
        tasks: [
            { name: 'today: Internal meeting'},
            { name: 'tomorrow: read a book'},
            { name: 'daily: event joins'}


        ]
    },
    methods:{
        newItem: function(){
            if(!this.task.name){
                return
            }
            this.task.push(
                {
                    name:this.tasks.name,
                    del:''
                }
            )
                this.tasks.name="";

            
        },
        delItem:function(task){
            this.task.splice(this.task.indexof(task),1)
        }
    }
})/**
 * 
 */