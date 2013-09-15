if(top.document === document) {
    yepnope([
            chrome.extension.getURL("lib/js/bower_components/requirejs/require.js"),
            chrome.extension.getURL("lib/js/vendor/require-cs.js"),
            chrome.extension.getURL("src/js/foo.js")
        ]);
}