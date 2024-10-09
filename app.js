function speak() {
    // Get the text from the input field
    var text = document.getElementById("text-input").value;

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    // Show the loader and the speaking image
    const loader = document.querySelector('.loader');
    const speakingImage = document.querySelector('.pic');
    loader.classList.remove('hide');
    speakingImage.classList.remove('hide');

    // Set a timeout to hide the loader and speak after 3000ms
    setTimeout(() => {
        // Hide the loader
        loader.classList.add('hide');

        // Create a new utterance instance for the text
        var utterance = new SpeechSynthesisUtterance(text);

        // Event listener for when the speech starts
        utterance.onstart = function() {
            speakingImage.classList.remove('hide1'); // Show image during speech
        };

        // Event listener for when the speech ends
        utterance.onend = function() {
            speakingImage.classList.add('hide1'); // Hide image after speech
        };

        // Use the SpeechSynthesis API to speak the text
        speechSynthesis.speak(utterance);
    }, 3000); // 3000ms delay
}
