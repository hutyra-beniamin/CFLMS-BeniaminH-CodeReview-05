//function to paste the content from json file to html
$(document).ready(function() {
    var myMovies = JSON.parse(movies);
    var content = "";
    for (let i = 0; i < myMovies.length; i++) {
        let movie = myMovies[i];
        like = Math.floor(Math.random() * 100);
        content += `
<div class="movie_wrapper">
    <div class="img_con">
        <img src="${movie.image}">
    </div>
        <div class="mov_title">
            <h3>${movie.title}</h3>
            <div class="movie_inf"> Genre ${movie.genre}</div><br>
            <div class="movie_inf"> Directed by ${movie.Directed}</div><br>
            <div class="movie_inf"> Written by ${movie.Written}</div><br>
            <div class="movie_inf"> Studio ${movie.Studio}</div><br>
            <div class="counterDiv">
                <p>Like</p>
            <span class="countBtn">
            <img class="like" src="img/thumb.png" alt="thumbs up">
            </span>
            <div class="countNum">
                <h1 class="headerCounter">${like}</h1>
            </div>
        </div>
        
    </div>
</div>
`;
    }
    $("#container").html(content); //The Like button function

    var movieLikeCounter = $('.like');
    var countNum = $('.headerCounter');
    for (let i = 0; i < movieLikeCounter.length; i++) {
        $(movieLikeCounter[i]).on('click', countUp);

        function countUp() {
            countNum[i].innerHTML++;
        }
    }
    //function for sorting 
    $("#pop").on("click", function() {
        let num_order = $(".movie_wrapper").sort(function(x, y) {
            return $(y).find("h1").text() - $(x).find("h1").text()
        })
        $("#container").html(num_order)
    })

    $("#lea").on("click", function() {
        let num_order_inverse = $(".movie_wrapper").sort(function(x, y) {
            return $(x).find("h1").text() - $(y).find("h1").text()
        })
        $("#container").html(num_order_inverse)
    })

    $("#abc").on("click", function() {
        let abc = $(".movie_wrapper").sort(function(x, y) {
            return $(x).find("h3").text() < $(y).find("h3").text() ? -1 : 1
        })
        $("#container").html(abc)
    })

});