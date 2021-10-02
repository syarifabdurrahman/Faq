var btnClicks = $("h4.click-text").length + 1;
for (let i = 0; i < btnClicks; i++) {
  $(".text" + i).click(function () {
    $(".t" + i).toggle();
  });
}
