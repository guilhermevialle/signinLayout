const placeholders = document.querySelectorAll(".placeholder");
const fields = document.querySelectorAll(".inpbox input");
const inputBoxes = document.querySelectorAll(".form .inpbox");

placeholders.forEach((placeholder, index) => {
  // Input focus
  placeholder.onclick = (e) => {
    setInputIndex = index + 1;
    window.onkeydown = (e) => {
      if (e.keyCode == 9 && setInputIndex <= placeholders.length) {
        placeholders[setInputIndex].click();
      }
    };

    inputBoxes[index].style.backgroundColor = "#8c9c9d25";
    placeholder.style.fontSize = "0.7rem";

    setTimeout(() => {
      fields[index].style.height = "25px";
      fields[index].focus();
    }, 140);
  };
});

// Change fields to default
window.onclick = (e) => {
  fields.forEach((input, index) => {
    if (
      e.target != input &&
      e.target != placeholders[index] &&
      input.value.length < 1
    ) {
      fields[index].style.height = "0px";
      placeholders[index].style.fontSize = "0.9rem";
      inputBoxes[index].style.backgroundColor = "#8c9c9d41";
    }
  });
};

// Load animations
const body = document.querySelector("body");
const title = document.querySelector(".lside h1");
const image = document.querySelector(".lside img");
const btns = document.querySelectorAll(".confirm button");

body.onload = () => {
  setTimeout(() => {
    // Title
    title.style.transform = "translateX(0)";
    title.style.opacity = 1;

    // Image
    image.style.transform = "translateX(0)";
    image.style.opacity = 1;

    // Form fields
    inputBoxes.forEach((input, index) => {
      let parent = input.parentNode;
      parent.style.transform = "translateY(0)";
      parent.style.opacity = 1;
      parent.style.transitionDelay = 0.4 * index + "s";
    });

    // Buttons
    btns.forEach((button, index) => {
      button.style.transform = "translateY(0)";
      button.style.opacity = 1;
      button.style.transitionDelay = 1.52 + 0.4 * index + "s";
    });
  }, 350);
};

// Confirm validation and animation
btns[1].onclick = () => {
  fields.forEach((input, index) => {
    let parent = inputBoxes[index].parentNode;
    console.log(parent);
    if (input.value.length < 1) {
      parent.style.animation = "invalid 0.3s";
      parent.onanimationend = () => (parent.style.animation = "none");
    }
  });
};
