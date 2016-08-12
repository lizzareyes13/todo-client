$.ajax({
  url: "http://fvi-grad.com:9991/tasks",
  success: function(resp,text, xhr){
    for (var i = 0; i < resp.length; i++){
      if(     resp[i].status == "new"            ){
        $("#new").append(`
          <div class="task">
          <h4>${resp[i].description}</h4>
          <a class= "action btn btn-default">Start</a>
          </div>
          `);
      }
      else if(resp[i].status == "started"){
        $("#started").append(`
            <div>
              <h4>${resp[i].description}</h4>
              <a class= "action btn btn-default">Complete</a>
            </div>
          `)
      }
      else {
        $("#completed").append(
          `
          <div>
            <h4>${resp[i].description}</h4>
            <a class="action btn btn-default">delete</a>
          </div>
          `
        )
      }
    }
  }
})

$("#create-task").on("click", function(e){
  e.preventDefault();
  var desc = $("#input-task").val();
  var uid = $("#input-uid").val();
  $.ajax({
    url: "http://fvi-grad.com:9991/tasks/"+desc+"/"+uid+"/new",
    method: 'POST'
  })
})

//"if" statements help make decisions//
