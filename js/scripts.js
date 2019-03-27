$(document).ready(function() {
  $("#appointmentForm").submit(function(event) {

    var nameInput = $("input#name").val();
    var describeInput = $("input#describe").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").text(nameInput);
    $(".describe").text(describeInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#appointmentForm").click(function() {
      $("myModal").submit()
    });
    event.preventDefault();
  });
});
