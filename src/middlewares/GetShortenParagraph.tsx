const getShortenedSentence = (text: string): string => {
    const sentencePattern = /[.!?]+/g;

    // Split the paragraph into an array of sentences
    const sentences = text.split(sentencePattern);
  
    // Remove the last two sentences
    const shortenedSentences = sentences.slice(0, 2);
  
    // Join the remaining sentences back into a paragraph
    const shortenedParagraph = shortenedSentences.join(". ") + "."; // Add period to end
  
    return shortenedParagraph;
  };

  export default getShortenedSentence