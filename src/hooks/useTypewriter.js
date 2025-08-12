import { useState, useEffect, useRef } from 'react';

function useTypewriter(words, typingSpeed = 150, deletingSpeed = 75, pause = 1000, nextWordPause = 200) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const type = () => {
      if (!isDeleting && text.length < currentWord.length) {
        setText((prev) => prev + currentWord.charAt(prev.length));
        setSpeed(typingSpeed);
      } else if (isDeleting && text.length > 0) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(deletingSpeed);
      } else if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        setSpeed(pause);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(nextWordPause);
      }
      timeoutRef.current = setTimeout(type, speed);
    };

    timeoutRef.current = setTimeout(type, speed);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [text, isDeleting, wordIndex, speed, words]);

  return text;
}

export default useTypewriter;