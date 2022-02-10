import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';


export const context = (word:string): string => {
  const splitWord = sentenceSplitter(word)
   return sentenceJoiner( splitWord.filter(word => word[0]!== "a" && word[0]!== "e" && word[0]!== "i" && word[0]!== "o" && word[0]!== "u" && word[0]!== "A" && word[0]!== "E" && word[0]!== "I" && word[0]!== "O" && word[0]!== "U"))

  // Code your function for context here
};
