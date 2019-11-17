function bio(){
  $("#first").on("click", function(e){
    $('.herotext').html(`About Me`);
    $('.page1').show();
    $('.page2').hide();
    $('.page3').hide();
})};

function projects(){
  $('#second').click(function(e) {
    $('.herotext').html(`Project`);
    $('.page1').hide();
    $('.page2').show();
    $('.page3').hide();
})};

function contact(){
  $('#third').click(function(e) {
    $('.herotext').html(`Contact Information`);
    $('.page1').hide();
    $('.page2').hide();
    $('.page3').show();
})};

$(function(){
  bio();
  projects();
  contact();
});
