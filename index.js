$(function(){

    //Initialize a click function for the 'Add' button
    $("#add").on("click",function(){

        //Get the value of the input field
        var val = $("input").val();
        if (val !=='') {

            //Showing the clear button
            $("#clear").show();

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
        console.log("Created a new task");

        //Call the function to store the new task
        saveTasks();
    });


    

    //Saving the tasks to local storage
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

            //show the clear button
            $("#clear").show();

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
        var isMarked = false;

        //Add a click function to the new list item
        $(".mark").on("click",function(){

            //if the list item is not marked
            if (isMarked == false) {

                //mark the list item
                $(this).parent().css({"text-decoration":"line-through", "color": "grey"});

                //change the variable to true
                isMarked = true;

            //else if the list item is marked
            }else{

                //unmark the list item
                $(this).parent().css({"text-decoration":"none", "color": ""});
                //change the variable to false
                isMarked = false;
            }

            //Save the tasks
            saveTasks();
        });
    }

    //Clear the list and local storage
    $("#clear").on("click",function(){
        //Clear the list
        $("#mylist").empty();
        $("#clear").hide();
        //clear the local storage
        localStorage.clear("TaskCont");
        console.log("Cleared the list");
    });

    //When local storage is empty, hide the clear button
    if(localStorage.getItem("TaskCont") === null){
        $("#clear").hide();
    }

getTasks();
});