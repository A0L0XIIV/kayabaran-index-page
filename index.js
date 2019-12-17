function activateDarkMode() {
  //   /* Add dark-body class to body tag */
  //   document.getElementsByTagName("body").className += "dark-body";
  //   /* Add dark-main class to main tag */
  //   document.getElementsByTagName("main").className += "dark-main";
  //   /* Add dark-content class to content class */
  //   document.getElementsByClassName("content").className += "dark-content";

  /* Add dark-body class to body tag */
  document.getElementsByTagName("body").classList.add("dark-body");
  /* Add dark-main class to main tag */
  document.getElementsByTagName("main").classList.add("dark-main");
  /* Add dark-content class to content class */
  document.getElementsByClassName("content").classList.add("dark-content");
}

function deactivateDarkMode() {
  /* Remove dark-body class from body tag */
  document.getElementsByTagName(
    "body"
  ).className = document
    .getElementsByTagName("body")
    .className.replace(/(?:^|\s)dark-body(?!\S)/g, "");

  /* Remove dark-main class from main tag */
  document.getElementsByTagName(
    "main"
  ).className = document
    .getElementsByTagName("main")
    .className.replace(/(?:^|\s)dark-main(?!\S)/g, "");

  /* Remove dark-content class from content class */
  document.getElementsByClassName(
    "content"
  ).className = document
    .getElementsByClassName("content")
    .className.replace(/(?:^|\s)dark-content(?!\S)/g, "");
}
