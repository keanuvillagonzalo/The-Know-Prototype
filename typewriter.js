const words = ["Decide Faster.", "Respond Smarter."];
const typewriterElement = document.getElementById('typewriter');
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentWord = words[currentWordIndex];
  
  if (isDeleting) {
    // Remove characters
    typewriterElement.textContent = currentWord.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeWriter, 500); // Pause before typing next word
    } else {
      setTimeout(typeWriter, 100); // Faster deletion
    }
  } else {
    // Add characters
    typewriterElement.textContent = currentWord.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    
    if (currentCharIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 2000); // Pause at end of word
    } else {
      setTimeout(typeWriter, 150); // Typing speed
    }
  }
}

// Start the animation
typeWriter();
