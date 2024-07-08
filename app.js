  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestionsList");
  // showProfile();

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
  ];

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Horror",
      rating: "8.8",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription: "A mind-bending thriller...",
      videoUrl: "https://www.youtube.com/embed/51EN2VrdpAo?si=i2JBFuPQCI2Vk19S",
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      rating: "9.0",
      image: "https://cdn.movieguide.org/wp-content/uploads/2012/08/5800.jpg",
      fullDescription: "A dark and gripping tale...",
      videoUrl: "https://www.youtube.com/embed/51EN2VrdpAo?si=i2JBFuPQCI2Vk19S",
    },
    {
      id: 3,
      title: "Titanic",
      genre: "Romance",
      rating: "7.8",
      image: "https://i3.wp.com/b1.filmpro.ru/c/15564.jpg",
      fullDescription: "A tragic love story...",
      videoUrl: "https://www.youtube.com/embed/51EN2VrdpAo?si=i2JBFuPQCI2Vk19S",
    },
    {
      id: 4,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: "8.6",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription:
        "A team of explorers travel through a wormhole in space...",
      videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 5,
      title: "The Avengers",
      genre: "Action",
      rating: "8.0",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription: "Earth's mightiest heroes must come together...",
      videoUrl: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      id: 6,
      title: "The Hangover",
      genre: "Comedy",
      rating: "7.7",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription: "Three buddies wake up from a bachelor party...",
      videoUrl: "https://www.youtube.com/embed/tcdUhdOlz9M",
    },
    {
      id: 7,
      title: "Step Brothers",
      genre: "Comedy",
      rating: "6.9",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription: "Two aimless middle-aged losers still living at home...",
      videoUrl: "https://www.youtube.com/embed/CewglxElBK0",
    },
    {
      id: 8,
      title: "Forrest Gump",
      genre: "Drama",
      rating: "8.8",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription:
        "The presidencies of Kennedy and Johnson, the Vietnam War...",
      videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
    },
    {
      id: 9,
      title: "The Shawshank Redemption",
      genre: "Thriller",
      rating: "9.3",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription: "Two imprisoned men bond over a number of years...",
      videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      id: 10,
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      rating: "7.6",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      fullDescription: "An orphaned boy enrolls in a school of wizardry...",
      videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
    },
  ];

  sessionStorage.setItem("movies", JSON.stringify(movies));

  searchInput.addEventListener("focus", () => {
    suggestionsList.innerHTML = genres
      .map(
        (genre) =>
          `<li class="suggestion-item genre" data-genre="${genre}">${genre}</li>`
      )
      .join("");
    suggestionsList.classList.add("visible");
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    // Sort the filtered movies by rating in descending order
    filteredMovies = filteredMovies.sort((a, b) => b.rating - a.rating);

    suggestionsList.innerHTML = filteredMovies
      .map(
        (movie) => `
            <li class="suggestion-item movie" data-id="${movie.id}">
              <img src="${movie.image}" alt="${movie.title}" class="suggestion-image" />
              <div class="suggestion-details">
                <strong>${movie.title}</strong> (${movie.genre}) - Rating: ${movie.rating}
              </div>
            </li>
          `
          
      )
      .join("");

    if (query === "") {
      suggestionsList.innerHTML = genres
        .map(
          (genre) =>
            `<li class="suggestion-item genre" data-genre="${genre}">${genre}</li>`
        )
        .join("");
    }

    suggestionsList.classList.add("visible");
  });

  searchInput.addEventListener("blur", () => {
    setTimeout(() => suggestionsList.classList.remove("visible"), 200);
  });

  suggestionsList.addEventListener("click", (event) => {
    const target = event.target.closest(".suggestion-item");
    if (target) {
      if (target.classList.contains("genre")) {
        const genre = target.dataset.genre;
                window.location.href = `genre.html?genre=${genre}`;
        // document
        //   .getElementById(`${genre.toLowerCase()}-movies`)
        //   .scrollIntoView({ behavior: "smooth" });
      } else if (target.classList.contains("movie")) {
        const movieId = target.dataset.id;
        const movie = movies.find((m) => m.id == movieId);
        sessionStorage.setItem("movie", JSON.stringify(movie));
        window.location.href = `movie.html?movie=${movieId}`;
      }
    }
  });

  const signupModal = document.getElementById("signupModal");
  const loginModal = document.getElementById("loginModal");
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const profileImageInput = document.getElementById("profileImage");

  // Show signup modal
  document.getElementById("signupBtn").addEventListener("click", () => {
    signupModal.style.display = "block";
  });

  // Show login modal
  document.getElementById("loginBtn").addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  // Handle signup form submission
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
      profileImage: await convertImageToBase64(profileImageInput.files[0]),
      firstName: document.getElementById("firstName").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.username === user.username);

    if (existingUser) {
      alert("Username already taken. Please choose another username.");
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));
    signupModal.style.display = "none";
    // showProfile();
    location.reload();
  });

  // Handle login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      loginModal.style.display = "none";
      // showProfile();
      location.reload();
    } else {
      alert("Invalid username or password");
    }
  });

  // Utility function to convert image to base64
  async function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Show profile section if logged in
  function showProfile() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      document.getElementById("authButtons").style.display = "none";
      const profileSection = document.getElementById("profileSection");
      profileSection.style.display = "flex";
      document.getElementById("userImg").src = user.profileImage;
      document.getElementById(
        "userName"
      ).textContent = `${user.firstName} ${user.lastName}`;
    } else {
      document.getElementById("authButtons").style.display = "flex";

    }
  }


  // Close modal functionality
  document.querySelectorAll(".modal .close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeBtn.parentElement.parentElement.style.display = "none";
    });
  });

  // Handle read more button
  document.querySelectorAll(".read-more-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const movieId = event.currentTarget.getAttribute("data-id");
      const movie = movies.find((m) => m.id == movieId);
      sessionStorage.setItem("movie", JSON.stringify(movie));
      window.location.href = `movie.html?movie=${movieId}`;
    });
  });

  // Render movies dynamically
  function renderMovies() {
    const genres = {
      Action: document.getElementById("action-movies"),
      Comedy: document.getElementById("comedy-movies"),
      Drama: document.getElementById("drama-movies"),
      Fantasy: document.getElementById("fantasy-movies"),
      "Sci-Fi": document.getElementById("sci-fi-movies"),
      Romance: document.getElementById("romance-movies"),
      Horror: document.getElementById("horror-movies"),
      Thriller: document.getElementById("thriller-movies"),
    };

    movies.forEach((movie) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("card");
      wrapper.style.backgroundImage = `url(${movie.image})`;

      const content = document.createElement("div");
      content.classList.add("content");

      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = movie.title;

      const copy = document.createElement("p");
      copy.classList.add("copy");
      copy.textContent = movie.fullDescription;

      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.textContent = "Play Trailer";
      btn.dataset.video = movie.videoUrl;

      const btn2 = document.createElement("button");
      btn2.classList.add("read-more-btn");
      btn2.textContent = "Read More";
      btn2.dataset.id = movie.id;

      content.appendChild(title);
      content.appendChild(copy);
      content.appendChild(btn);
      content.appendChild(btn2);

      btn2.addEventListener("click", () => {
        sessionStorage.setItem("movie", JSON.stringify(movie));
        window.location.href = `movie.html?movie=${movie.id}`;
      });

      btn.addEventListener("click", () => {
        const videoUrl = btn.dataset.video;
        const videoModal = document.getElementById("videoModal");
        const videoFrame = document.getElementById("videoFrame");
        videoFrame.src = videoUrl;
        videoModal.style.display = "block";
      });

      wrapper.appendChild(content);
      genres[movie.genre].appendChild(wrapper);
    });
  }

  renderMovies();

