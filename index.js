$(function(){

    //Creating a new array for storing the tasks
    let taskArray = [];
    let taskId = 0;

    //Store the task array in local storage
    localStorage.setItem("Tasks", taskArray);

    //Initialize a click function for the 'Add' button
    $("#add").on("click",function(){

        //Get the value of the input field
        var val = $("input").val();
        if (val !=='') {

            //Increment the taskId
            taskId++;

            //creating the task object
            var task = {
            id: taskId,
            task: $("input").val()
            };

            //adding the task object to the task array
            taskArray.push(task);

            /*
            //Create a new list item
            var elem = $("<li></li>").text(val);

            //Append a delete button to the list item
            $(elem).append("<button class=' rem btn btn-sm btn-danger' style='float: right;'>&times;</button>");

            //Append a click button to the list item
            $(elem).append("<button class='mark btn btn-sm btn-success' style='float: right;'>&check;</button>");

            //Append the new list item to the list
            $("#mylist").append(elem);
            */

            getTasks();

            //Clear the input field
            $("input").val("");

            //Add a click function to the new list item
            $(".rem").on("click",function(){
                //Remove the list item
                $(this).parent().remove();
            });
            
            //create a variable to store the click function
            var isMarked=false;

            //Add a click function to the new list item
            $(".mark").on("click",function(){

                //if the list item is not marked
                if (isMarked==false) {

                    //mark the list item
                    $(this).parent().css({"text-decoration":"line-through", "color": "grey"});

                    //change the variable to true
                    isMarked=true;

                    //else if the list item is marked
                }else{

                    //unmark the list item
                    $(this).parent().css({"text-decoration":"none", "color": ""});
                    //change the variable to false
                    isMarked=false;
                }
            });
        }

        //Get the stored value of the task array
        console.log(taskArray);
    });

    //Creating a funtion for retrieving the tasks from local storage
    function getTasks(){
        //Get the stored value of the task array
        //taskArray = localStorage.getItem("Tasks");

        //Loop through the task array
        for (var i = 0; i < taskArray.length; i++) {
            //Create a new list item
            var elem = $("<li></li>").text(taskArray[i].task);

            //Append a delete button to the list item
            $(elem).append("<button class=' rem btn btn-sm btn-danger' style='float: right;'>&times;</button>");

            //Append a click button to the list item
            $(elem).append("<button class='mark btn btn-sm btn-success' style='float: right;'>&check;</button>");

            //Append the new list item to the list
            $("#mylist").append(elem);
        }
    }

    getTasks();
});