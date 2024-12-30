document.getElementById("edit-profile").addEventListener("click", function () {
    document.getElementById("edit-modal").style.display = "block";
});

document.getElementById("save-profile").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const picture = document.getElementById("picture").value;

    document.getElementById("user-name").innerText = name;
    document.getElementById("user-bio").innerText = bio;
    document.getElementById("profile-picture").src = picture;

    document.getElementById("edit-modal").style.display = "none";
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("edit-modal").style.display = "none";
});

document.getElementById("change-picture").addEventListener("click", function () {
    const pictureURL = prompt("Enter new profile picture URL:");
    if (pictureURL) {
        document.getElementById("profile-picture").src = pictureURL;
    }
});
