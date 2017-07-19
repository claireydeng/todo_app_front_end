$(document).ready(function(){
    $("#submit-button").click(function(){
        var todoBlock=$(this).closest("#new-todo-block");
        var description=todoBlock.find("#enter-task");
    $("ul").append("<li><input type='checkbox'> <span class='todo'><a href='show.html'>" + description.val() + "</a></span></li>")
    description.val("")
    })
})
    
    