$("#searchButton").click(function(){
    
    var userSearch = $("#userInput").val()
    var url = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=dc6zaTOxFJmzC"
    
    $.getJSON(url, function(response){
        for (i = 0; i < 6; i++){
            $("#results").append("<img src='" + response.data[i].images.fixed_height.url + "'>")
        }
    })
})

