// Existing header.js code
const authButtons = document.getElementById("authButtons");
const profileSection = document.getElementById("profileSection");
const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
const profileDropdown = document.getElementById("profileDropdown");

const user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {
  authButtons.style.display = "none";
  profileSection.style.display = "flex";
  userImg.src = user.profileImage;
  userName.textContent = `${user.firstName}`;

  profileSection.addEventListener("mouseenter", () => {
    profileDropdown.style.display = "block";
  });

  profileSection.addEventListener("click", () => {
    setTimeout(() => (profileDropdown.style.display = "none"), 200);
  });
} else {
  authButtons.style.display = "flex";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("loggedIn");
  location.reload();
});

// Code from profile.js
const profileContainer = document.getElementById("profileContainer");
const profileImageDisplay = document.getElementById("profileImageDisplay");
const profileFirstName = document.getElementById("profileFirstName");
const profileLastName = document.getElementById("profileLastName");
const profileMiddleName = document.getElementById("profileMiddleName");
const profileUsername = document.getElementById("profileUsername");
const editProfileBtn = document.getElementById("editProfile");
const editProfileModal = document.getElementById("editProfileModal");
const closeEditProfile = editProfileModal.querySelector(".close");
const editProfileForm = document.getElementById("editProfileForm");
const editProfileImage = document.getElementById("editProfileImage");

if (user) {
  profileImageDisplay.src = user.profileImage;
  profileFirstName.textContent = user.firstName;
  profileLastName.textContent = user.lastName;
  profileMiddleName.textContent = user.middleName || "";
  profileUsername.textContent = user.username;
} else {
  console.log("No user is currently logged in");
}

editProfileBtn.addEventListener("click", () => {
  editProfileModal.style.display = "block";
  document.getElementById("editFirstName").value = user.firstName;
  document.getElementById("editLastName").value = user.lastName || "";
  document.getElementById("editMiddleName").value = user.middleName || "";
  document.getElementById("editUsername").value = user.username;
});

closeEditProfile.addEventListener("click", () => {
  editProfileModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == editProfileModal) {
    editProfileModal.style.display = "none";
  }
});

editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedUser = {
    ...user,
    firstName: document.getElementById("editFirstName").value,
    lastName: document.getElementById("editLastName").value,
    middleName: document.getElementById("editMiddleName").value || "",
    username: document.getElementById("editUsername").value,
  };

  const file = editProfileImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      updatedUser.profileImage = reader.result;
      updateUserData(updatedUser);
    };
    reader.readAsDataURL(file);
  } else {
    updateUserData(updatedUser);
  }
});

function updateUserData(updatedUser) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.map((user) =>
    user.username === updatedUser.username ? updatedUser : user
  );
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  location.reload();
}
