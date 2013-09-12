Simple repository to reproduce gmailr failures when loaded via requirejs.

Add the "chrome" directory as an unpacked extension within chrome.

You'll notice that I've added logging within the Gmailr lib included within chrome/lib/js/vendor/gmailr to log whenever we've successfully intercepted an ajax request from Gmail.

There is also logging within chrome/src/js/app.js to log a debug message to the console whenever a user sends a message or a draft is saved. These events are never triggered.

Any help figuring out how to get this to work would be greatly appreciated. Using backbone and require has been a great way to structure the extension until hitting this bug.
