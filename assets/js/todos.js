$("ul").on('click', 'li', function() {
  $(this).toggleClass("completed");
})

$("ul").on('click', 'span', function(event) {
  event.stopPropagation();   //to stop event bubbling
  $(this).parent().fadeOut(500, function() { //to make sure remove is called only after the fadeout is complete
    $(this).remove();
  });  
})

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $(this).val('');
    $("ul").append(`<li><span>X </span>${todoText}</li>`);
  }
})