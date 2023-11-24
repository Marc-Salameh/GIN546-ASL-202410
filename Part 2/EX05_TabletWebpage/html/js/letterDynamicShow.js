// Example letters and descriptions
const letterDescriptions = {
    A: "The letter A, is signed by holding up your dominant hand in a fist facing outward with the thumb sticking up to the side of the fist.",
    B: "Hold your dominant hand open palm facing outward, all four fingers standing upright and kept together while tucking your thumb into your palm.",
    C: "Bring one hand up at about shoulder height and cup into a c shape.",
    D: "The letter D, is signed by holding up your dominant hand curving your middle ring and pinkie fingers together and touching them to your thumb while only your index finger is standing upright.",
    E: "Bring on hand up about shoulder height, The palm faces out and your pinky ring finger middle finger pointer finger all curl down into the palm The thumb is tucked in sideways so that all the other fingers rest along its side.",
    F: "The letter F is signed by holding up your dominant hand palm facing out with your index finger and thumb touching while your 3 other fingers are held up.",
    G: "Extend the pointer and thumb out so they are parallel to one another Tuck remaining fingers into the palm.",
};

function showLetter(letter, imageURL) {
    // Retrieve the description based on the input letter
    const description = letterDescriptions[letter];

    // Encode the parameter values to handle special characters
    const encodedDescription = encodeURIComponent(description);
    const encodedURL = encodeURIComponent(imageURL);


    // Navigate to the letterDynamicShow.html page with encoded values as query parameters
    window.location.href = `letterDynamicShow.html?letterName=${letter}&letterDescp=${encodedDescription}&imageURL=${encodedURL}`;
}


const stopLetter = () => {
    window.location.href = "./learnLetter.html";
}

const learnASLMenu = () => {
    window.location.href = "./learnASL.html";
}
