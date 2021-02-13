function updateRange() {
    val = document.getElementById("range").value;
    document.getElementById("rangeVal").innerText = "Words per Minute: " + val;
}

currentId = -1;

function playWords() {
    currentId++; // Kill any previous function calls
    wordbox = document.getElementById("mainText");
    text = document.getElementById("inText").value;
    words = text.split(" ");
    setTimeout(() => putWord(0, words, wordbox, currentId), 0);
}

function putWord(i, words, wordbox, runId) {
    if (i < words.length && runId == currentId) {
        wordbox.innerText = words[i];
        speed = document.getElementById("range").value;
        spw = 60 / speed; // Seconds per word
        setTimeout(() => putWord(i + 1, words, wordbox, runId), spw * 1000);
    }
}
