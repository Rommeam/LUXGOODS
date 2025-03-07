document.addEventListener("DOMContentLoaded", () => {
    // Get the search input field and all product cards
    const searchInput = document.querySelector("#search-input");
    const productCards = document.querySelectorAll(".product__card");
  
    // Add an event listener to the search input field
    searchInput.addEventListener("input", () => {
      // Get the value entered by the user and convert it to lowercase
      const searchValue = searchInput.value.toLowerCase().trim();
  
      // Loop through each product card to check if it matches the search input
      productCards.forEach((card) => {
        // Get the product name from the card and convert it to lowercase
        const productName = card.querySelector("h4").textContent.toLowerCase();
  
        // Check if the product name includes the search value
        if (productName.includes(searchValue)) {
          // Show the card if it matches (resets to default display style)
          card.style.display = "";
        } else {
          // Hide the card if it doesn't match
          card.style.display = "none";
        }
      });
    });
  });
  

// alert ("Welcome to our website");
var tl = gsap.timeline();
tl.from("ul li", {
y:-35, 
duration: 0.8,
stagger:0.2,
opacity: -0.1,
});

// gsap.from("section div ",{
// x:-100,
// delay:0.5,
// duration:0.8,
// opacity:0
// })
// t2.from("deals__container  div",{
//     y:-35, 
//     duration: 0.8,
//     stagger:0.2,
//     opacity: -0.1,

// })
// t2.from("deals__container  div",{
//   y:-35, 
//     duration: 0.8,
//     stagger:0.2,
//     opacity: -0.1,
//   scrollTrigger:{
//     trigger:"section",
//     scroller:"body",
//     marker:true,
//     start:"top 60%",
//     end:"top 30%",
//     scrub:true,
    
//   }
// })
 
//For button

function addToCart(button) {
  button.classList.add("clicked");

  setTimeout(() => {
      button.classList.remove("clicked");
  }, 2000);
}


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".product__card", {
      //  opacity:0,
      y:-25,
      x:25,  // Moves up while appearing
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".product__grid",
          start: "top 200%",  // Animation starts when 180% of grid is in view
          end: "bottom 0.0000000001%", // Ends when 20% remains
          scrub: 1, // Makes animation smooth and dependent on scrolling
          marker:true,
      }
  });
});



/////////////////////////////////// //////////////////////
function addToCart(button) {
  // Add the 'clicked' animation class
  button.classList.add("clicked");

  // Remove the class after 2 seconds
  setTimeout(() => {
    button.classList.remove("clicked");

    // Show login prompt after animation
    showLoginPrompt();
  }, 2000);
}

function showLoginPrompt() {
  // Create a new login div
  const loginDiv = document.createElement("div");
  loginDiv.id = "loginPrompt";
  loginDiv.innerHTML = `
    <div class="login-popup">
      <h2>Please Login</h2>
      <p>You need to log in before adding items to your cart.</p>
      <button onclick="closeLoginPrompt()">Close</button>
    </div>
  `;
  
  // Add styles for the popup
  loginDiv.style.position = "fixed";
  loginDiv.style.top = "50%";
  loginDiv.style.left = "50%";
  loginDiv.style.transform = "translate(-50%, -50%)";
  loginDiv.style.background = "white";
  loginDiv.style.padding = "20px";
  loginDiv.style.borderRadius = "8px";
  loginDiv.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  loginDiv.style.textAlign = "center";
  loginDiv.style.zIndex = "1000";

  // Append to body
  document.body.appendChild(loginDiv);
}

function closeLoginPrompt() {
  document.getElementById("loginPrompt").remove();
}

// function addToCart(button) {
//   // Add the 'clicked' animation class
//   button.classList.add("clicked");

//   // Remove the class after 2 seconds
//   setTimeout(() => {
//     button.classList.remove("clicked");

//     // Check if the user is logged in
//     if (!isUserLoggedIn()) {
//       showLoginPrompt();
//     }
//   }, 2000);
// }

// function showLoginPrompt() {
//   // Create a new login div
//   const loginDiv = document.createElement("div");
//   loginDiv.id = "loginPrompt";
//   loginDiv.innerHTML = `
//     <div class="login-popup">
//       <h2>Please Login</h2>
//       <p>You need to log in before adding items to your cart.</p>
//       <button onclick="simulateLogin()">Login</button>
//       <button onclick="closeLoginPrompt()">Close</button>
//     </div>
//   `;
  
//   // Add styles for the popup
//   loginDiv.style.position = "fixed";
//   loginDiv.style.top = "50%";
//   loginDiv.style.left = "50%";
//   loginDiv.style.transform = "translate(-50%, -50%)";
//   loginDiv.style.background = "white";
//   loginDiv.style.padding = "20px";
//   loginDiv.style.borderRadius = "8px";
//   loginDiv.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//   loginDiv.style.textAlign = "center";
//   loginDiv.style.zIndex = "1000";

//   // Append to body
//   document.body.appendChild(loginDiv);
// }

// function closeLoginPrompt() {
//   const loginPrompt = document.getElementById("loginPrompt");
//   if (loginPrompt) {
//     loginPrompt.remove();
//   }
// }

// // Simulate a login function
// function simulateLogin() {
//   // Store login status (in real projects, replace this with an actual authentication check)
//   localStorage.setItem("isLoggedIn", "true");

//   // Remove the login popup after login
//   closeLoginPrompt();

//   // Show a success message (optional)
//   alert("Login successful! You can now add items to your cart.");
// }

// // Function to check if user is logged in
// function isUserLoggedIn() {
//   return localStorage.getItem("isLoggedIn") === "true";
// }
