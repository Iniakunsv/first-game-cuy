
'use client';

import { Challenge } from '@/data/types';

type ChallengeModalProps = {
  challenge: Challenge;
  index: number;
  total: number;

  choice: string | number | null;
  setChoice: (value: string | number | null) => void;

  shortAnswer: string;
  setShortAnswer: (value: string) => void;

  onSubmit: () => void;

  onContinue: () => void;

  feedback: 'correct' | 'wrong' | null;

  onClose: () => void;

  /* =====================================================
     LAYOUT 3 - WORD SCRAMBLE
     ===================================================== */

  scrambleOrder?: number[];
  setScrambleOrder?: (value: number[]) => void;

  /* =====================================================
     LAYOUT 3 - HANGMAN
     ===================================================== */

  hangmanGuessedLetters?: string[];
  setHangmanGuessedLetters?: (value: string[]) => void;
   onWrongHangmanGuess: () => void;
};

export default function ChallengeModal({
  challenge,
  index,
  total,
  choice,
  setChoice,
  shortAnswer,
  setShortAnswer,
  onSubmit,
  onContinue,
  feedback,
  onClose,

  scrambleOrder = [],
  setScrambleOrder,

  

  hangmanGuessedLetters = [],
  setHangmanGuessedLetters,
  onWrongHangmanGuess,
}: ChallengeModalProps) {

  /* =====================================================
     QUESTION TYPES
     ===================================================== */

  const isShortAnswer =
    challenge.type === 'short-answer';

  const isFindError =
    challenge.type === 'find-error';

  const isWordScramble =
    challenge.type === 'word-scramble';

  const isHangman =
    challenge.type === 'hangman';

  const isTextInput =
    isShortAnswer || isFindError;

  const isMultipleChoice =
    challenge.type === 'multiple-choice';


  /* =====================================================
     WORD SCRAMBLE
     ===================================================== */

  const scrambleOptions =
    challenge.options ?? [];

  const selectedScrambleWords =
    scrambleOrder.map(
      (selectedIndex) =>
        scrambleOptions[selectedIndex]
    );

  const remainingScrambleIndexes =
    scrambleOptions
      .map((_, indexValue) => indexValue)
      .filter(
        (indexValue) =>
          !scrambleOrder.includes(indexValue)
      );

  const handleScrambleWordClick = (
    wordIndex: number
  ) => {

    if (feedback === 'correct') {
      return;
    }

    if (!setScrambleOrder) {
      return;
    }

    setScrambleOrder([
      ...scrambleOrder,
      wordIndex,
    ]);
  };

  const handleRemoveScrambleWord = (
    position: number
  ) => {

    if (feedback === 'correct') {
      return;
    }

    if (!setScrambleOrder) {
      return;
    }

    setScrambleOrder(
      scrambleOrder.filter(
        (_, indexValue) =>
          indexValue !== position
      )
    );
  };

  const handleClearScramble = () => {

    if (feedback === 'correct') {
      return;
    }

    if (!setScrambleOrder) {
      return;
    }

    setScrambleOrder([]);
  };


  /* =====================================================
     HANGMAN
     ===================================================== */

  const hangmanAnswer =
    String(
      challenge.answer ?? ''
    ).toUpperCase();

  const hangmanLetters =
    hangmanAnswer.replace(
      /[^A-Z]/g,
      ''
    );

  const alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const isHangmanComplete =
    hangmanLetters.length > 0 &&
    hangmanLetters
      .split('')
      .every(
        (letter) =>
          hangmanGuessedLetters.includes(
            letter
          )
      );

  
  const handleHangmanLetter = (
    letter: string
  ) => {
    if (feedback === 'correct') {
      return;
    }

    if (!setHangmanGuessedLetters) {
      return;
    }

    if (hangmanGuessedLetters.includes(letter)) {
      return;
    }

    // Save the selected letter first.
    setHangmanGuessedLetters([
      ...hangmanGuessedLetters,
      letter,
    ]);

    // Deduct one life only when the letter is incorrect.
    if (!hangmanLetters.includes(letter)) {
      onWrongHangmanGuess();
    }
  };


  /* =====================================================
     HANGMAN DISPLAY
     ===================================================== */

  const hangmanDisplay =
    hangmanAnswer
      .split('')
      .map((character) => {

        if (character === ' ') {
          return ' ';
        }

        if (
          hangmanGuessedLetters.includes(
            character
          )
        ) {
          return character;
        }

        return '_';
      })
      .join(' ');


  /* =====================================================
     SUBMIT AVAILABILITY
     ===================================================== */

  const scrambleReady =
    isWordScramble &&
    scrambleOrder.length ===
      scrambleOptions.length;

  const hangmanReady =
    isHangman &&
    isHangmanComplete;

  const textInputReady =
    isTextInput &&
    shortAnswer.trim() !== '';

  const multipleChoiceReady =
    isMultipleChoice &&
    choice !== null;

  const canSubmit =
    textInputReady ||
    multipleChoiceReady ||
    scrambleReady ||
    hangmanReady;


  return (
    <div className="absolute inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/65 p-2 sm:items-center sm:p-4"
    onClick={onClose}
    >

      <div
         className="panel my-auto max-h-[calc(100dvh-0.5rem)] w-full max-w-md overflow-y-auto p-2 text-sm sm:max-h-[calc(100dvh-1rem)] sm:p-4"
          onClick={(event) => event.stopPropagation()}
            >

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="sticky top-0 z-20 flex justify-between bg-slate-950 py-2 text-xs text-cyan-300">

          <span>
            CHALLENGE {index} / {total}
          </span>

          <button
            type="button"
            className="retro-btn px-2"
            onClick={onClose}
          >
            X
          </button>

        </div>


        {/* =====================================================
            QUESTION
        ===================================================== */}

        <h2 className="mt-2 text-base font-black text-white sm:mt-3 sm:text-lg">

          {challenge.question}

        </h2>


        {/* =====================================================
            SHORT ANSWER
        ===================================================== */}

        {isShortAnswer && (

          <div className="mt-5">

            <div className="mb-2 text-xs font-black text-yellow-200">

              ENTER THE KEYWORD USING THE LETTERS YOU HAVE COLLECTED!

            </div>

            <input
              type="text"
              inputMode="text"
              enterKeyHint="done"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              value={shortAnswer}
              onChange={(event) =>
                setShortAnswer(
                  event.target.value
                )
              }
              onKeyDown={(event) => {

                if (
                  event.key === 'Enter' &&
                  feedback !== 'correct'
                ) {

                  onSubmit();

                }

              }}
              disabled={
                feedback === 'correct'
              }
              autoFocus
              placeholder="Type your answer..."
              className="w-full border-2 border-cyan-300 bg-black/70 px-3 py-2 text-center text-base font-black uppercase tracking-widest text-white outline-none placeholder:text-slate-500 focus:border-yellow-300 sm:px-4 sm:py-4 sm:text-lg"
            />
            

          </div>

        )}


        {/* =====================================================
            FIND THE WRONG WORD
            LAYOUT 3 - GALLON 1
        ===================================================== */}

        {isFindError && (

          <div className="mt-5">

            <div className="mb-2 text-xs font-black text-yellow-200">

              FIND THE WRONG WORD

            </div>

            <div className="mb-3 text-xs text-slate-400">

              Type the incorrect word from the sentence.

            </div>

            <input
              type="text"
              inputMode="text"
              enterKeyHint="done"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              value={shortAnswer}
              onChange={(event) =>
                setShortAnswer(
                  event.target.value
                )
              }
              onKeyDown={(event) => {

                if (
                  event.key === 'Enter' &&
                  feedback !== 'correct'
                ) {

                  onSubmit();

                }

              }}
              disabled={
                feedback === 'correct'
              }
              autoFocus
              placeholder="Type the wrong word..."
              className="w-full border-2 border-cyan-300 bg-black/70 px-3 py-2 text-center text-base font-black uppercase tracking-widest text-white outline-none placeholder:text-slate-500 focus:border-yellow-300 sm:px-4 sm:py-4 sm:text-lg"
            />

          </div>

        )}


        {/* =====================================================
            WORD SCRAMBLE
            LAYOUT 3 - GALLON 2
        ===================================================== */}

        {isWordScramble && (

          <div className="mt-5">

            <div className="mb-2 text-xs font-black text-yellow-200">

              ARRANGE THE WORDS

            </div>

            <div className="mb-3 text-xs text-slate-400">

              Click the words in the correct order.

            </div>


            {/* SELECTED WORDS */}

            <div className="min-h-[72px] border-2 border-cyan-300 bg-black/70 p-3">

              <div className="mb-2 text-[10px] font-black text-cyan-300">

                YOUR SENTENCE

              </div>

              {selectedScrambleWords.length === 0 ? (

                <div className="text-xs text-slate-500">

                  Click the words below...

                </div>

              ) : (

                <div className="flex flex-wrap gap-2">

                  {selectedScrambleWords.map(
                    (word, position) => (

                      <button
                        key={`${word}-${position}`}
                        type="button"
                        onClick={() =>
                          handleRemoveScrambleWord(
                            position
                          )
                        }
                        disabled={
                          feedback === 'correct'
                        }
                        className="border-2 border-yellow-300 bg-yellow-300/10 px-2 py-2 text-xs font-black text-yellow-100 hover:bg-yellow-300/20 disabled:cursor-not-allowed"
                        title="Click to remove"
                      >

                        {word}

                      </button>

                    )
                  )}

                </div>

              )}

            </div>


            {/* AVAILABLE WORDS */}

            <div className="mt-3 flex flex-wrap gap-2">

              {remainingScrambleIndexes.map(
                (wordIndex) => (

                  <button
                    key={`${scrambleOptions[wordIndex]}-${wordIndex}`}
                    type="button"
                    onClick={() =>
                      handleScrambleWordClick(
                        wordIndex
                      )
                    }
                    disabled={
                      feedback === 'correct'
                    }
                    className="border-2 border-slate-600 bg-slate-900/80 px-3 py-2 text-xs font-black text-white hover:border-cyan-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >

                    {scrambleOptions[wordIndex]}

                  </button>

                )
              )}

            </div>


            {/* CLEAR BUTTON */}

            {scrambleOrder.length > 0 && (

              <button
                type="button"
                onClick={handleClearScramble}
                disabled={
                  feedback === 'correct'
                }
                className="mt-3 border border-red-400/60 px-3 py-2 text-xs font-black text-red-300 hover:bg-red-950/30 disabled:cursor-not-allowed disabled:opacity-50"
              >

                CLEAR

              </button>

            )}

          </div>

        )}


        {/* =====================================================
            HANGMAN
            LAYOUT 3 - GALLON 3
        ===================================================== */}

        {isHangman && (

          <div className="mt-5">


{/* CLUE */}

{challenge.clue && (

  <div className="mb-4 border-2 border-yellow-300/60 bg-yellow-300/10 p-3">

    <div className="mb-1 text-[10px] font-black text-yellow-300">

      HINT

    </div>

    <div className="text-sm font-bold text-yellow-100">

      {challenge.clue}

    </div>

  </div>

)}


{/* HIDDEN WORD */}

<div className="mb-5 border-2 border-cyan-300 bg-black/70 p-4 text-center">

              <div className="break-words text-xl font-black tracking-[0.25em] text-white">

                {hangmanDisplay}

              </div>

            </div>


            {/* LETTER BUTTONS */}

            <div className="grid grid-cols-7 gap-1.5 sm:grid-cols-9">

              {alphabet.map((letter) => {

                const guessed =
                  hangmanGuessedLetters.includes(
                    letter
                  );

                return (

                  <button
                    key={letter}
                    type="button"
                    onClick={() =>
                      handleHangmanLetter(
                        letter
                      )
                    }
                    disabled={
                      guessed ||
                      feedback === 'correct'
                    }
                    className={`border-2 px-1 py-2 text-xs font-black ${
                      guessed
                        ? 'border-slate-700 bg-slate-800 text-slate-600'
                        : 'border-slate-600 bg-slate-900/80 text-white hover:border-cyan-300 hover:bg-slate-800'
                    }`}
                  >

                    {letter}

                  </button>

                );

              })}

            </div>

          </div>

        )}


        {/* =====================================================
            MULTIPLE CHOICE
        ===================================================== */}

        {isMultipleChoice && (

          <div className="mt-4 grid gap-2">

            {(challenge.options ?? []).map(
              (option, i) => (

                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setChoice(i)
                  }
                  disabled={
                    feedback === 'correct'
                  }
                  className={`
                    border-2 px-3 py-3 text-left text-sm
                    ${
                      choice === i
                        ? 'border-yellow-300 bg-yellow-300/10'
                        : 'border-slate-600 bg-slate-900/70'
                    }
                    hover:bg-slate-800
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  `}
                >

                  {String.fromCharCode(65 + i)}. {option}

                </button>

              )
            )}

          </div>

        )}


        {/* =====================================================
            WRONG FEEDBACK
        ===================================================== */}

        {feedback === 'wrong' && (

          <div className="mt-4 border border-red-500/60 bg-red-950/30 p-3 text-sm text-red-200">

            Not quite. Review your clues and try again.

          </div>

        )}


        {/* =====================================================
            CORRECT FEEDBACK
        ===================================================== */}

        {feedback === 'correct' && (

          <div className="mt-4 border border-green-500/60 bg-green-950/30 p-3 text-sm text-green-200">

            Correct!

            <div className="mt-2">
              {challenge.explanation}
            </div>

          </div>

        )}


        {/* =====================================================
            SUBMIT / CONTINUE
        ===================================================== */}

        {feedback === 'correct' ? (

  <button
    type="button"
    onClick={onContinue}
    className="retro-btn mt-4 w-full py-3 font-black"
  >

    GO TO NEXT QUESTION

  </button>

) : (

  <button
    type="button"
    disabled={!canSubmit}
    onClick={onSubmit}
    className="retro-btn mt-4 w-full py-3 font-black disabled:cursor-not-allowed disabled:opacity-50"
  >

    SUBMIT ANSWER

  </button>

)}

      </div>

    </div>
  );
}