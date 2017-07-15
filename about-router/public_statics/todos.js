/**
 * Created by Pranshu Panwar on 15-07-2017.
 */

$(function(){




   $("#addtodos").click(function(){
       let newval = $('#newvalue').val();
       let todoList =$('#todolist');

       $.get('/addtodo?task='+ newval, function(){

           todoList.empty();
           for(task of todoList){
               todoList.append(`<li>${task}</li>`)
           }
       })

    })

})

