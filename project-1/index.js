const apiKey = "95838daedcc35e527a42c415154f5244";
const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
const divEl = document.querySelector(".container");
const imagePrefix = "https://image.tmdb.org/t/p/w500/";
// const favorites = JSON.parse(localStorage.getItem("favs")) || [];
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");





async function getMovies() {
  try {
    const response = await axios(url + apiKey); 
    const results = response.data.results;
    let allMovies = results;

    function displayMovies(movies){
      divEl.innerHTML = "";
      movies.forEach((movie) =>{
        const movieCard = `<div class="card">
        <div>
        <img src="${imagePrefix + movie.poster_path}" alt="${movie.title}" /><p class="rating">Rating:${movie.vote_average.toFixed(1)}</p></div>
        <div class=textButton>
        <button class="movie-btn" id="${movie.id}">${movie.title}</button>
        <button class="buttonAdd" data-movie-id=${movie.id}>Add to favorites</button>
        </div>
        </div>`;
  divEl.insertAdjacentHTML("afterbegin", movieCard);
      });

      const btns = document.querySelectorAll(".movie-btn");
      btns.forEach((btn) => {
        btn.addEventListener("click", function () {
          location.href = `movie.html?Id=${this.id}`;
        });
      });
    

    const addButtons = document.querySelectorAll(".buttonAdd");
    addButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const movieId = this.getAttribute("data-movie-id");
        const movie = movies.find((m) => m.id == movieId);
        addToFavorites(movie);
      });
    });
  }

    function addToFavorites(movie) {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!favorites.some((fav) => fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${movie.title} added to favorites!`);
      } else {
        alert(`${movie.title} is already in favorites!`);
      }
    }


    displayMovies(allMovies);
   
     searchInput.addEventListener("input", function(e){
      const searchQuery = e.target.value.toLowerCase();
      const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );
      displayMovies(filteredMovies);
     });

  } catch (error) {
    console.log(error);
  }
}

  getMovies();







 
  
 
    
    
 

  

