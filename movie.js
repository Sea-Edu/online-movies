document.addEventListener("DOMContentLoaded", () => {
  const movieDetails = document.getElementById("movieDetails");
  const commentForm = document.getElementById("commentForm");
  const commentText = document.getElementById("commentText");
  const commentsList = document.getElementById("commentsList");
  const ratingStars = document.getElementById("ratingStars");

  const registerModal = document.createElement("div");
  registerModal.id = "registerModal";
  registerModal.className = "modal";
  registerModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Please register to post a comment.</p>
      <button id="registerBtn" class="primary__button">Register</button>
    </div>
  `;
  document.body.appendChild(registerModal);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const currentUserName = currentUser ? currentUser.username : "";
  const currentUserPicture = currentUser
    ? currentUser.profileImage
    : "path/to/default/picture.jpg";
  const movieId = new URL(window.location.href).searchParams.get("movie");
  const movie = movies.find((movie) => movie.id == movieId);

  if (movie) {
    movieDetails.innerHTML = `
      <div class="movie-detail-content">
        <img src="${movie.image}" alt="${movie.title}">
        <div>
          <h1>${movie.title}</h1>
          <p><strong>Genre:</strong> ${movie.genre}</p>
          <p><strong>About:</strong> ${movie.fullDescription}</p>
          <p><strong>Rating:</strong> ${movie.rating}</p>
          <button onclick="playMovie('${movie.videoUrl}')">Watch</button>
        </div>
      </div>
    `;
    loadComments(movie.id);
  }

  // Generate star rating options
  ratingStars.innerHTML = createStarRatingOptions();

  commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) {
      showRegisterModal();
      return;
    }
    const comment = commentText.value.trim();
    const rating = document.querySelector('input[name="rating"]:checked').value;
    if (comment) {
      await addComment(movie.id, comment, rating);
      commentText.value = "";
      document.querySelector('input[name="rating"]:checked').checked = false;
      location.reload(); // Reload the page after submitting a comment
    }
  });

  function showRegisterModal() {
    registerModal.style.display = "block";
  }

  function closeRegisterModal() {
    registerModal.style.display = "none";
  }

  registerModal
    .querySelector(".close")
    .addEventListener("click", closeRegisterModal);
  document.getElementById("registerBtn").addEventListener("click", () => {
    signupModal.style.display = "block";
    registerModal.style.display = "none";
  });

  document.getElementById("signupBtn").addEventListener("click", () => {
    signupModal.style.display = "block";
  });

  document.getElementById("loginBtn").addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
      profileImage: await convertImageToBase64(profileImageInput.files[0]),
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      middleName: document.getElementById("middleName").value || "",
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
    showProfile();
    location.reload();
  });

  async function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function loadComments(movieId) {
    const comments =
      JSON.parse(localStorage.getItem(`comments-${movieId}`)) || [];
    commentsList.innerHTML = "";
    for (const comment of comments) {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      let authorName;
      let authorPicture;

      if (comment.author === currentUserName) {
        authorName = "Me";
        authorPicture = currentUserPicture;
      } else {
        authorName = comment.author;
        authorPicture = comment.picture || "path/to/default/picture.jpg";
      }

      commentDiv.innerHTML = `
        <div class="author">
          <img src="${authorPicture}" alt="${authorName}'s picture" class="profile-img">
          ${authorName}
        </div>
        <div class="text">${comment.text}</div>
        <div class="rating">${createStarRating(comment.rating)}</div>
        <div class="date">${new Date(comment.date).toLocaleString()}</div>
      `;
      commentsList.appendChild(commentDiv);
    }
  }

  async function addComment(movieId, commentText, rating) {
    const comment = {
      author: currentUserName,
      picture: currentUserPicture,
      text: commentText,
      rating: rating,
      date: new Date().toISOString(),
    };
    const comments =
      JSON.parse(localStorage.getItem(`comments-${movieId}`)) || [];
    comments.push(comment);
    localStorage.setItem(`comments-${movieId}`, JSON.stringify(comments));
    loadComments(movieId);
  }

  function createStarRatingOptions() {
    let starOptions = "";
    for (let i = 1; i <= 10; i++) {
      starOptions += `
        <input type="radio" style="display:none" id="rating-${i}" name="rating" value="${i}" />
        <label for="rating-${i}" class="star">&#9733;</label>
      `;
    }
    return starOptions;
  }

  function createStarRating(rating) {
    let stars = "";
    for (let i = 1; i <= 10; i++) {
      stars += `<span class="star${
        i <= rating ? " filled" : ""
      }">&#9733;</span>`;
    }
    return stars;
  }

  document.addEventListener("change", (event) => {
    if (event.target.name === "rating") {
      const rating = event.target.value;
      updateStarRatings(rating);
    }
  });

  function updateStarRatings(rating) {
    const stars = document.querySelectorAll(".rating-stars .star");
    stars.forEach((star, index) => {
      star.classList.toggle("filled", index < rating);
    });
  }

  // Define the playMovie function
  window.playMovie = (videoUrl) => {
    const movieModal = document.createElement("div");
    movieModal.className = "modal";
    movieModal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
    document.body.appendChild(movieModal);
    movieModal.style.display = "block";
    movieModal.querySelector(".close").addEventListener("click", () => {
      movieModal.remove();
    });
  };
});
