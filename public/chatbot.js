let nav_bar = document.getElementById("nav-bar");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu-bar");

sideNav.style.right = "-250px";

nav_bar.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0px";
  } else {
    sideNav.style.right = "-250px";
  }
};
function lw() {
  alert("Please Sign In ");
}

window.WebChat.renderWebChat(
  {
    directLine: window.WebChat.createDirectLine({
      token: "5vQ3UVbm1Eg.pIPeIoJf5wi4-Bopj81wdQGTxOv-5kRH9VxA8rBMtNc",
    }),
    userID: "YOUR_USER_ID",
    username: "Web Chat User",
    locale: "en-US",
  },
  document.getElementById("webchat")
);
