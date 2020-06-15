(function($) {
  var init,
    addBindings,
    swapLists,
    copyList,
    clickCopyList,
    showCopyMessage,
    changeTextListToTextArea,
    initSwapLists;

  // due to issues with the HTML nesting we need to reconcile old versions that do not have the proper layout
  initSwapLists = function initSwapLists() {
    var hiddenLists = $(".crystal-catalog-helper-list").find(".formatted-list, .plain-text-decklist").filter(function () {
      return $(this).css("display") === "none";
    });

    var allShown = hiddenLists.length < 1;

    if (allShown) {
      $(".crystal-catalog-helper-list").find(".plain-text-decklist, .list-button.copy").css("display", "none");
    }
  }

  swapLists = function(event) {
    event.preventDefault();

    var $button, onText, offText;

    onText = "View formatted text";
    offText = "View plain text";

    $button = $(event.currentTarget);
    $button
      .toggleClass("on")
      .find("a")
      .text($button.hasClass("on") ? onText : offText);

    $button
      .closest(".crystal-catalog-helper-list")
      .find(".formatted-list, .plain-text-decklist, .list-button.copy")
      .each(function() {
        var el = $(this);
        if (el.css("display") === "none") {
          el.css("display", "block");
        } else {
          el.css("display", "none");
        }
      });
  };

  copyList = function($list) {
    $list.select();

    document.execCommand("copy");
  };

  showCopyMessage = function($list) {
    var $copiedMsg;

    $copiedMsg = $('<div class="decklist-copy success message" />').text(
      "Copied to clipboard"
    );

    $copiedMsg
      .appendTo($(".plain-text-decklist", $list))
      .delay(1000)
      .fadeOut(1300, function() {
        $(this).remove();
      });
  };

  clickCopyList = function(event) {
    event.preventDefault();

    var $list, $textArea;

    $list = $(event.currentTarget).closest(".plain-text-list-container");
    $textArea = $list.find("textarea.text-decklist");

    copyList($textArea);
    showCopyMessage($list);
  };

  changeTextListToTextArea = function() {
    var $lists;

    $lists = $(".plain-text-decklist");

    $lists.each(function() {
      var $list, text;

      $list = $(this);
      text = $list.find("pre").text();

      $list.append(
        $('<textarea class="text-decklist" readonly />').append(text)
      );
    });
  };

  addBindings = function() {
    $(".crystal-catalog-helper-list")
      .on("click", ".list-button.list", swapLists)
      .on("click", ".list-button.copy", clickCopyList);
  };

  init = function() {
    changeTextListToTextArea();
    addBindings();
    initSwapLists();
  };

  init();
})(jQuery);
