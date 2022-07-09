$(function(){
    $("#add").on("click",function(){
        var val = $("input").val();
        if (val !=='') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class=' rem btn btn-sm btn-danger' style='float: right;'>&times;</button>");
            $(elem).append("<button class='mark btn btn-sm btn-success' style='float: right;'>&check;</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".rem").on("click",function(){
                $(this).parent().remove();
            });
            $(".mark").on("click",function(){
                $(this).parent().css("text-decoration","line-through")
            })
        }
    });
});