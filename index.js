function activateDarkMode() {
  //   /* Add dark-body class to body tag */
  //   document.getElementsByTagName("body").className += "dark-body";
  //   /* Add dark-main class to main tag */
  //   document.getElementsByTagName("main").className += "dark-main";
  //   /* Add dark-content class to content class */
  //   document.getElementsByClassName("content").className += "dark-content";

  /* Add dark-body class to body tag */
  document.getElementsByTagName("body")[0].classList.add("dark-body");
  /* Add dark-main class to main tag */
  document.getElementsByTagName("main")[0].classList.add("dark-main");
  /* Add dark-content class to content class */
  document.getElementsByClassName("content")[0].classList.add("dark-content");
}

function deactivateDarkMode() {
  // document.getElementsByTagName(
  //   "body"
  // )[0].className = document
  //   .getElementsByTagName("body")[0]
  //   .className.replace(/(?:^|\s)dark-body(?!\S)/g, "");

  // /* Remove dark-main class from main tag */
  // document.getElementsByTagName(
  //   "main"
  // )[0].className = document
  //   .getElementsByTagName("main")[0]
  //   .className.replace(/(?:^|\s)dark-main(?!\S)/g, "");

  // /* Remove dark-content class from content class */
  // document.getElementsByClassName(
  //   "content"
  // )[0].className = document
  //   .getElementsByClassName("content")[0]
  //   .className.replace(/(?:^|\s)dark-content(?!\S)/g, "");

  /* Remove dark-body class from body tag */
  document.getElementsByTagName("body")[0].classList.remove("dark-body");
  /* Remove dark-main class from main tag */
  document.getElementsByTagName("main")[0].classList.remove("dark-main");
  /* Remove dark-content class from content class */
  document
    .getElementsByClassName("content")[0]
    .classList.remove("dark-content");
}
