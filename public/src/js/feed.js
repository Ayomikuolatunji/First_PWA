var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";
  if (eventPrompt) {
    eventPrompt.prompt();
    eventPrompt.userChoice.then(function (choice) {
      if (choice === "dismissed") {
        console.log("user canceled installation",choice.outcome);
      } else {
        console.log("user added to home screen",choice.outcome);
      }
    });
    eventPrompt=null 
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
