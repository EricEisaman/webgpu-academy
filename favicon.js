// Define a function that generates a data URL for an SVG image containing a given emoji
const faviconHref = emoji =>
 `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`

// Define a function that changes the favicon to a given emoji
const changeFavicon = emoji => {
 const link =
  document.querySelector("link[rel*='icon']") ||
  document.createElement("link");
 link.type = "image/svg+xml";
 link.rel = "shortcut icon";
 link.href = faviconHref(emoji);

 document.getElementsByTagName("head")[0].appendChild(link);
}

// Array of emojis to cycle through
const emojis = ["😀", "😃", "😄", "😁", "😆"];
let index = 0;

// Change the favicon every 3 seconds
setInterval(() => {
 changeFavicon(emojis[index]);
 index = (index + 1) % emojis.length; // Cycle through the array of emojis
}, 1000);
