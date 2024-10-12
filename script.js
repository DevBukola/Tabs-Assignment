"use strict";

const allTabs = document.querySelectorAll(".tab");
const workspaceChildren = document.querySelectorAll(".workspace-icon");

const callerName = document.querySelector(".name");
const callerIdentity = document.querySelector(".caller-id");
const inputField = document.querySelector(".input");
const identityWrapper = document.querySelector(".text");

// individual tab bodies

const callsBody = document.querySelector(".calls");
const messageBody = document.querySelector(".message");
const usersBody = document.querySelector(".users");
const integrationsBody = document.querySelector(".integrations");

// const handleTabClick = (e) => {
//   const element = e.target;

//   //remove current dispalying tab

//   const allTabBodies = document.querySelectorAll('.tab-body');

//   allTabBodies.forEach(tabBody => {
//     tabBody.style.display = 'none';

//     //show corresponding tab content
//     // const tabIdData = e.target.dataset.id;
//     const tabIdData = element.dataset.id;

//     let tabBody = document.querySelector(`#${tabIdData} > .tab-body`);
//     tabBody.style.display = 'block';
//   })
// }

// const tabHeaders = document.querySelectorAll('.tab-header');
// tabHeaders.forEach(tabHeader => {
//     tabHeader.addEventListener('click', handleTabClick)
// });

workspaceChildren.forEach((child) => {
  child.addEventListener("click", () => {
    workspaceChildren.forEach((child) => {
      child.classList.remove("clicked");
    });
    child.classList.add("clicked");
  });
});

allTabs.forEach((child) => {
  child.addEventListener("click", () => {
    allTabs.forEach((child) => child.classList.remove("active"));

    child.classList.add("active");

    console.log(child.className);
    if (child.className.includes("calls-tab")) {
      callsBody.style.display = "block";
      messageBody.style.display = "none";
      usersBody.style.display = "none";
      integrationsBody.style.display = "none";
    } else if (child.className.includes("message-tab")) {
      callsBody.style.display = "none";
      messageBody.style.display = "block";
      usersBody.style.display = "none";
      integrationsBody.style.display = "none";
    } else if (child.className.includes("users-tab")) {
      callsBody.style.display = "none";
      messageBody.style.display = "none";
      usersBody.style.display = "block";
      integrationsBody.style.display = "none";
    } else {
      callsBody.style.display = "none";
      messageBody.style.display = "none";
      usersBody.style.display = "none";
      integrationsBody.style.display = "block";
    }
  });
});

const inputBox = inputField.value;
callerIdentity.addEventListener("click", () => {
  console.log('clicked');
  if (inputBox == "") {
    return alert("Input cannot be empty!");
  }
  // callerName.textContent = inputField.value;
  identityWrapper.innerHTML += `<div class="identity-container">
            <p class="identity">${inputBox}</p>
            <button class="text-close"><i class="fa-solid fa-x"></i></button>
        </div>`;

  inputField.value = "";

  // const requestField = {
  //     delete: 'Yes',
  // }

  const closeButtons = document.querySelectorAll(".text-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const request = prompt(
        "Are you sure you want to delete this ID? Please type Yes or click on cancel to return."
      );
      if (request.toLocaleLowerCase() == "yes") {
        closeButton.parentElement.remove();
      } else {
        return;
      }

      // closeButton.parentElement.remove();
      // alert('Sure?');
    });
  });
});

// const request = prompt('Are you sure you want to delete this ID?');
// if (requestField[request]) {
//     closeButtons.forEach(closeButton => {
//         closeButton.addEventListener('click', () => {
//             closeButton.parentElement.remove();
//         })
//     })
// } else {
//     console.log("yes")
// }

const recordingCompliant = document.querySelector(".recording-compliant");
const ratesWrapper = document.querySelector(".rates-wrapper");

const closeCompliantsBtn = document.querySelector(".close-compliant");
closeCompliantsBtn.addEventListener("click", () => {
  // closeCompliantsBtn.parentElement.remove();
  slider.style.left = "1px";
  slider.style.right = "auto";
  switchOne.style.background = "black";
  recordingCompliant.style.display = "none";
  alert("Are you sure you want to remove this?");
});

const switchOne = document.querySelector(".switch-one");
const slider = document.querySelector(".slider-one");

switchOne.addEventListener("click", () => {
  if (slider.style.left == "1px") {
    slider.style.right = "1px";
    slider.style.left = "auto";
    switchOne.style.background = "blue";
    recordingCompliant.style.display = "block";
  } else {
    slider.style.left = "1px";
    slider.style.right = "auto";
    switchOne.style.background = "black";
    recordingCompliant.style.display = "none";
  }
});

const switchTwo = document.querySelector(".switch-two");
const sliderTwo = document.querySelector(".slider-two");

switchTwo.addEventListener("click", () => {
  if (sliderTwo.style.left == "1px") {
    sliderTwo.style.right = "1px";
    sliderTwo.style.left = "auto";
    switchTwo.style.background = "blue";
    ratesWrapper.style.display = "flex";
  } else {
    sliderTwo.style.left = "1px";
    sliderTwo.style.right = "auto";
    switchTwo.style.background = "black";
    ratesWrapper.style.display = "none";
  }
});

const mobileHamburger = document.querySelector(".hamburger");
const asideBar = document.querySelector(".aside-bar");
const hamburgerClose = document.querySelector('.aside-bar-close');


mobileHamburger.addEventListener('click', () => {
  console.log('button clicked')
  asideBar.style.display = 'block';
})

hamburgerClose.addEventListener('click', ()=> {
  asideBar.style.display = 'none';
  // hamburgerClose.parentElement.remove();
})


