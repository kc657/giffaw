console.log("Sanity Check");

$(document).on('ready', function () {
  $('form').on('submit', function (doc) {
    doc.preventDefault();
    getGifs();
  })
})

function getGifs () {
  $.ajax({
    method: "GET",
    url: 'http://api.giphy.com/v1/gifs/search',
    data: $("form").serialize(),
    success: onSuccess,
  });
}


function onSuccess(gifData) {
  $(".gif-img").remove();
  gifData.data.forEach(function(v,i){
    $(".gif-gallery").append($("<img class='img-responsive img-thumbnail gif-img' src="+v.images.fixed_height.url+">"));
  })
}
