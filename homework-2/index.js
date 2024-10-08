const movies = [
    {
      adult: false,
      backdrop_path: "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
      genre_ids: [16, 10751, 35, 28],
      id: 519182,
      original_language: "en",
      original_title: "Despicable Me 4",
      overview:
        "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
      popularity: 2783.962,
      poster_path:
        "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
      release_date: "2024-06-20",
      title: "Despicable Me 4",
      video: false,
      vote_average: 7.352,
      vote_count: 995,
    },
    {
      adult: false,
      backdrop_path: "/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg",
      genre_ids: [18, 10749],
      id: 1079091,
      original_language: "en",
      original_title: "It Ends with Us",
      overview:
        "Lily Bloom overcomes a traumatic childhood to embark on a new life in Boston and chase a lifelong dream of opening her own business. A chance meeting with charming neurosurgeon Ryle Kincaid sparks an intense connection, but as the two fall deeply in love, Lily begins to see sides of Ryle that remind her of her parents' relationship.",
      popularity: 1449.093,
      poster_path:
        "https://image.tmdb.org/t/p/w500/tJSbiu7S5pqDnzH9weTW82bYbWu.jpg",
      release_date: "2024-08-07",
      title: "It Ends with Us",
      video: false,
      vote_average: 7.194,
      vote_count: 67,
    },
    {
      adult: false,
      backdrop_path: "/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
      genre_ids: [28, 53, 18, 80],
      id: 1160018,
      original_language: "hi",
      original_title: "किल Kill",
      overview:
        "When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train.",
      popularity: 956.574,
      poster_path:
        "https://image.tmdb.org/t/p/w500/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
      release_date: "2024-07-03",
      title: "Kill",
      video: false,
      vote_average: 7.315,
      vote_count: 62,
    },
    {
      adult: false,
      backdrop_path: "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
      genre_ids: [878, 27, 53],
      id: 945961,
      original_language: "en",
      original_title: "Alien: Romulus",
      overview:
        "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
      popularity: 757.184,
      poster_path:
        "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
      release_date: "2024-08-13",
      title: "Alien: Romulus",
      video: false,
      vote_average: 7.3,
      vote_count: 52,
    },
    {
      adult: false,
      backdrop_path: "/viKEEaaCaZ0hZ2nGuvIEozlLooL.jpg",
      genre_ids: [27, 80, 9648],
      id: 1023922,
      original_language: "en",
      original_title: "MaXXXine",
      overview:
        "In 1980s Hollywood, adult film star and aspiring actress Maxine Minx finally gets her big break. But as a mysterious killer stalks the starlets of Hollywood, a trail of blood threatens to reveal her sinister past.",
      popularity: 620.936,
      poster_path:
        "https://image.tmdb.org/t/p/w500/ArvoFK6nlouZRxYmtIOUzKIrg90.jpg",
      release_date: "2024-07-04",
      title: "MaXXXine",
      video: false,
      vote_average: 6.308,
      vote_count: 302,
    },
    {
      adult: false,
      backdrop_path: "/wkPPRIducGfsbaUPsWfw0MCQdX7.jpg",
      genre_ids: [28, 35, 12],
      id: 1051891,
      original_language: "en",
      original_title: "Thelma",
      overview:
        "When 93-year-old Thelma Post gets duped by a phone scammer pretending to be her grandson, she sets out on a treacherous quest across the city to reclaim what was taken from her.",
      popularity: 550.516,
      poster_path:
        "https://image.tmdb.org/t/p/w500/rUcuageYgv9SsJoWuc0seRWG6JC.jpg",
      release_date: "2024-06-21",
      title: "Thelma",
      video: false,
      vote_average: 7,
      vote_count: 62,
    },
    {
      adult: false,
      backdrop_path: "/7ks7A3mAO7twDOvBVE4cR8LaIM8.jpg",
      genre_ids: [16, 28, 18],
      id: 1104844,
      original_language: "ja",
      original_title: "劇場版ブルーロック -EPISODE 凪-",
      overview:
        "One day, Nagi Seishiro receives an invitation to the mysterious BLUE LOCK Project. What awaits him there is an encounter with the finest strikers assembled from across the country. Nagi's dream of becoming the best, alongside Mikage Reo, will take this prodigy to a world he's never known.",
      popularity: 477.655,
      poster_path:
        "https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg",
      release_date: "2024-04-19",
      title: "Blue lock the movie",
      video: false,
      vote_average: 8.3,
      vote_count: 30,
    },
    {
      adult: false,
      backdrop_path: "/8fNBsXpgMvqk75SPsZzTmIqSRxY.jpg",
      genre_ids: [27, 53],
      id: 646683,
      original_language: "en",
      original_title: "The Exorcism",
      overview:
        "A troubled actor begins to unravel while shooting a supernatural horror film, leading his estranged daughter to wonder if he's slipping back into his past addictions or if there's something more sinister at play.",
      popularity: 443.021,
      poster_path:
        "https://image.tmdb.org/t/p/w500/ar2h87jlTfMlrDZefR3VFz1SfgH.jpg",
      release_date: "2024-05-30",
      title: "The Exorcism",
      video: false,
      vote_average: 4.57,
      vote_count: 115,
    },
    {
      adult: false,
      backdrop_path: "/59AJ2w9tKRSbBpnxKfB5UyIg6Jf.jpg",
      genre_ids: [27, 53],
      id: 1010605,
      original_language: "en",
      original_title: "The Devil's Spawn",
      overview:
        "A struggling author, who has recently moved to a small town for a fresh start, discovers a cursed book that begins to bring his darkest fears to life, leading him into a horrifying battle for survival.",
      popularity: 393.456,
      poster_path:
        "https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg",
      release_date: "2024-08-02",
      title: "The Devil's Spawn",
      video: false,
      vote_average: 5.9,
      vote_count: 92,
    },
    {
      adult: false,
      backdrop_path: "/kqMZ8XBqIrAoFdItJ3N0bLVry8H.jpg",
      genre_ids: [28, 53],
      id: 975542,
      original_language: "en",
      original_title: "Infiltrator",
      overview:
        "A former black-ops operative turned undercover FBI agent is thrust into a high-stakes mission to dismantle a notorious crime syndicate from within, risking everything to stop a major arms deal.",
      popularity: 393.401,
      poster_path:
        "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
      release_date: "2024-06-28",
      title: "Infiltrator",
      video: false,
      vote_average: 6.4,
      vote_count: 78,
    },
  ];

  const divElement = document.querySelector("div");
  function renderingMovies(){
    movies.forEach(movie => {
        const block = `<div class="blocks">
        <div id="headerButton"><h1>${movie.title}</h1>
        <i class="fa-solid fa-star star"></i></div>
        <p>Release date:${movie.release_date}</p>
        <p>Rating: ${movie.vote_average}</p>
        <img src="${movie.poster_path}"/>
            </div>
        </div>`
        
        divElement.insertAdjacentHTML("afterbegin", block);
        
    });
    const addButtons = document.querySelectorAll(".star");
  addButtons.forEach(button => {
    button.addEventListener("click", function() {
        // (here I used gpt)
        const movieTitle = this.closest(".blocks").querySelector("h1").textContent;
        addToFavorites(movieTitle);
        
    });
});
  }
  renderingMovies()

  function addToFavorites(movieTitle) {
    const favoritesList = document.querySelector("#favoritesList"); //(GPT)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function(){
      listItem.style.display = "none";
    })
    const listItem = document.createElement("li");
    listItem.textContent = movieTitle;
    favoritesList.appendChild(listItem);
    listItem.appendChild(deleteButton);
    

}
