function switchDarkTheme() {
  // Toggle class adds or removes the class depending on the  class's presence
  /* Swicht body theme*/
  $("body").toggleClass("dark-body");
  /* Swicht main div theme*/
  $("main").toggleClass("dark-main");
  /* Swicht content div theme*/
  $(".content").toggleClass("dark-content");
  /* Swicht modal-content div theme*/
  $(".modal-content").toggleClass("dark-modal");
}
