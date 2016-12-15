$("#searchButton").click(function(){
    var userSearch = $("#userInput").val()
    
    $.getJSON(url, function(response){
        "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=dc6zaTOxFJmzC"
    })
    
    for (i = 0; i < 6; i++){
            $("#results").append("<img src=" + response.data[0].images.fixed_width.url + ">")
        }
})
