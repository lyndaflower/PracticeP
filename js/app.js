$(document).ready(function() {
    var item, title, author,publisher, booksLink,bookImg
    var outputList = document.getElementById("list-output"); 
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    var placeHolder = '<img src="https://via.placeholder.com/150">'
    var searchData ;

    //listener for search button
    $("#search").click(function(){
        outputList.innerHTML = ""
        searchData = $("#search-box").val();
        if(searchData === "" || searchData === null){
            displayError();
        }
        else{
            $.ajax({
                url: bookUrl = searchData,
                dataType: "json",
                success: function(res){
                    console.log(res)
                    if(responce.totalItem === 0) {
                        alert("no results!...try again");
                    }
                    else{
                       $("title").anitem('margin-top: 10px');
                       $(".book-list").css('visibility: visible');
                    }
                }
                
            })
        }
        $("#search-box").val("");
    })
});