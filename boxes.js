// function element(){
// $("#red").click(function(){
//     $(this).data("clicked", true);
//     console.log("I am clicked!")
// })
// }

// if ($("#red").data("clicked")){
//     console.log("I am clicked!")
// }


// function element (){
// $("red").click(function(){
//     elementClicked = true;
//  });
//  if( elementClicked != true ) {
//      alert("element not clicked");
//  }else{
//      alert("element clicked");
//  }
// }

$("#red").click(function(){
    $(this).data("clicked", true);
});

if($("#red").data('clicked')) {
    console.log("I am clicked!")
} else {
    console.log("not clicked")
}