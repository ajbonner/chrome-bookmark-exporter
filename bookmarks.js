function loadExternalJs(src) {
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", src);
  document.getElementsByTagName("head")[0].appendChild(script);
}

function loadExternalCss(src) {
  var style = document.createElement('link');
  style.setAttribute("rel", "text/css");
  style.setAttribute("href", src);
  document.getElementsByTagName("head")[0].appendChild(style);
}

function walkBookmarkTree(nodeTreeList)
{
  for (var i = 0; i < nodeTreeList.length; i++) {
    if (nodeTreeList[i].url != undefined) {
      $('#content').append('<div class="bookmark-row">' + nodeTreeList[i].url + '</div>') 
    }
    if (nodeTreeList[i].children != undefined) {
      walkBookmarkTree(nodeTreeList[i].children);
    }
  }
}

$(function() {
  console.debug('Document is ready, yo.');
  chrome.bookmarks.getTree(walkBookmarkTree);
});
