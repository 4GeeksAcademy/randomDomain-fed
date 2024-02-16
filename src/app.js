window.onload = function() {
  const reloadButton = document.getElementById("reloadButton");
  const mainText = document.getElementById("main-text");

  let initialContent = mainText.innerHTML;

  reloadButton.addEventListener("click", function() {
    mainText.innerHTML = generateDomain();
  });
};

function generateDomain() {
  let pronouns = ["the", "our", "your", "my", "his", "her", "their", "this", "that", "these"];
  let subjects = ["runner", "rocket", "ocean", "star", "sun", "moon", "planet", "cloud", "flower", "bird"];
  let verbs = ["running", "flying", "swimming", "shining", "glowing", "soaring", "floating", "dancing", "singing", "growing"];
  let adverbs = ["quickly", "slowly", "gracefully", "elegantly", "smoothly", "bravely", "carefully", "happily", "loudly", "quietly"];
  let domains = [".com", ".net", ".edu", ".org", ".io", ".co", ".info", ".biz", ".tv", ".me"];

  let randomDomain = getRandomElement(pronouns) + getRandomElement(subjects) + getRandomElement(verbs) + getRandomElement(adverbs) + getRandomElement(domains);

  return randomDomain;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
