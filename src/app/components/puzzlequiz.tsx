"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type Flashcard = {
  front: string;
  back: string;
};

const flashcards: Flashcard[] = [
  { front: "dmmbgsoeynsat", back: "anyiissxadmr" },
];
//DaMnMyBiGiSsOsExYaNdSmArTaNdClEvEr

//dAmNmYbIgIsSoSeXyAnDsMaRtAnDcLeVeR



const questions = [
  {
    text: "Key:",
    image: "/question1.png",
    answer: "damn my big is so sexy and smart"
    //bereal! one by one take letters from both sides of the card- front side starts with d. all lower case, has to find where to put the spaces to make words but it makes sense, maybe give first word as hint if he needs
  },
  {
    text: "How deep is your bag? Your bag ain't that deep lil bro. Hint: right after 😼",
    image: "/question8.png",
    answer: "ts empty"
    // check instgram dm right after 😼 emoji
  },
  {
    text: "What did YOU say the gem of Theta Tau was? Hint: I wrap around you, soft and tight, I keep you warm both day and night",
    image: "/question2.png",
    answer: "dark red garment"
    //he said this at the madrona station during campus night
  },
  {
    text: "I'm not just letters, but numbers too, The clout follows me, and you do too. Check my socials to match these wits, together they form a clever mix, use them wisely to solve this trick(s)! ",
    //13*13*3%134 check IG username and each word has numbers corresponding to it. use those with the operators on screen
    image: "/question3.png",
    answer: "105"
  },
  {
    text: "What those hands doin little?",
    image: "/question4.png",
    answer: "double twister"
    //he texted me this when i texted him this photo tell him to check IG dm
  },
  {
    text: "Good luck",
    image: "/question5.png",
    answer: "7"
    // line number 7 tell him he can just start guessing line numbers
  },
  {
    text: "Hark! Attend to words most dear, For mine heart dost stir when thou art near. To thee, I gave a title fair, A name of honor, beyond compare. Twas first in verse, a gift from me, Yet what I named thee, none else may see. Recall, if thou can, that humble ode—  What title lies therein bestowed?",
    image: "/question7.png",
    answer: "Ode to Mine Big"
    // The title of the first poem he wrote me
  }
];

const FlashcardComponent: React.FC<{ flashcard: Flashcard; onFlip: () => void; isFlipped: boolean }> = ({
  flashcard,
  onFlip,
  isFlipped
}) => (
  <div className="relative w-full h-full">
    <div className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-lg p-6">
      <p className="text-lg text-gray-700">{isFlipped ? flashcard.back : flashcard.front}</p>
    </div>
    <button
      onClick={onFlip}
      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      {isFlipped ? "Flip" : "Flip"}
    </button>
  </div>
);

const PuzzleQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      if (currentQuestion === questions.length - 1) {
        setIsComplete(true);
      } else {
        setCurrentQuestion(prev => prev + 1);
        setUserAnswer('');
        setError('');
        setIsFlipped(false); // Reset flip for the next question
      }
    } else {
      setError('Sorry, wrong answer. Try again!');
    }
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-center text-gray-700">
          You&apos;ve completed all the puzzles! Oh friend of mine, heed this tune,
          Go visit the Highlander whose name rhymes with baboon.
          You&apos;ll find them nearby, not far from your way,
          But be warned of the scent that&apos;s come out to play 🤢🙈🙉
        </p>
        <p className="text-center text-gray-700">
          You are the beginning. Next hint:
          <Image
                src="/end.png"
                width={1000}
                height={500}
                alt="Question illustration"
              />
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          
          {currentQuestion === 0 ? (
            <div className='mt-2 space-y-4'>
              {questions[currentQuestion].text}
              <Image
                src={questions[currentQuestion].image}
                width={1000}
                height={500}
                alt="Question illustration"
              />
              
            <FlashcardComponent
              flashcard={flashcards[0]}
              onFlip={handleFlip}
              isFlipped={isFlipped}
            />
            </div>
            
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={questions[currentQuestion].image}
                width={1000}
                height={500}
                alt="Question illustration"
              />
              <p className="text-lg text-gray-700 mb-4">
                {questions[currentQuestion].text}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit Answer
            </button>
          </form>

          <div className="text-sm text-gray-500 text-center">
            Progress: {currentQuestion } questions done!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleQuiz;
