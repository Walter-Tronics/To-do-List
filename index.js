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


            //Create a new list item
            var elem = $("<li></li>").text(val);

            //Append a delete button to the list item
            $(elem).append("<button class='rem btn btn-sm btn-danger' style='float: right;'>&times;</button>");

            //Append a click button to the list item
            $(elem).append("<button class='mark btn btn-sm btn-success' style='float: right;'>&check;</button>");

            //Append the new list item to the list
            $("#mylist").append(elem);



            //Clear the input field
            $("input").val("");

            //Calling the delete and mark functions
            DeleteMark();

        }


        //Get the stored value of the task array
        console.log(taskArray);
        //console.log(JSON.parse(localStorage.getItem("TaskCont")));

        saveTasks();
    });


    


    function saveTasks(){
        localStorage.setItem("TaskCont", JSON.stringify($('#mylist').html()));
    }

    //Creating a funtion for retrieving the tasks from local storage
    function getTasks(){
        var storedTasks = JSON.parse(localStorage.getItem("TaskCont"));
        //If the stored value is not null
        if (storedTasks !== null) {
            //Append the stored value to the list
            $('#mylist').html(storedTasks);

            //calling the delete and mark functions
            DeleteMark();
        }
    }


    //The delete and mark click function
    function DeleteMark(){

        //Add a delete function to the new list item
        $(".rem").on("click",function(){
            //Remove the list item
            $(this).parent().remove();
            saveTasks();
        });

        //create a variable to store the click function
        var isMarked1 = false;

        //Add a click function to the new list item
        $(".mark").on("click",function(){

            //if the list item is not marked
            if (isMarked1 == false) {

                //mark the list item
                $(this).parent().css({"text-decoration":"line-through", "color": "grey"});

                //change the variable to true
                isMarked1 = true;

            //else if the list item is marked
            }else{

                //unmark the list item
                $(this).parent().css({"text-decoration":"none", "color": ""});
                //change the variable to false
                isMarked1 = false;
            }

            //Save the tasks
            saveTasks();
        });
    }

getTasks();
});