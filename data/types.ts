
export type LayoutId = 1 | 2 | 3 | 4;

export type Direction =
  | 'up'
  | 'down'
  | 'left'
  | 'right';

export type RoomObject = {
  id: string;
  name: string;
  kind: string;

  // Position
  x: number;
  y: number;

  // Size
  w: number;
  h: number;

  // Collision
  solid?: boolean;

  // Interaction
  interactive?: boolean;

  // Educational clue
  clueId?: string;

  // Visual
  color: string;
  icon?: string;
  description?: string;

  // Optional depth offset
  depthOffset?: number;
};

export type Clue = {
  id: string;
  layout: LayoutId;
  objectId: string;
  title: string;
  text: string;

  // Letter obtained from this object
  letter: string;
};

export type Challenge = {
  id: string;
  layout: LayoutId;

  // Clues required to unlock this challenge
  // Optional because not every challenge requires clues
  clueIds?: string[];

  clue?: string;

  question: string;

  // Used only for multiple-choice questions
  options?: string[];

  // Correct answer
  // Can be a number for multiple-choice
  // or a string for find-error, word-scramble, and hangman
  answer: string | number;

  explanation: string;

  // Question type
  type:
    | 'short-answer'
    | 'multiple-choice'
    | 'find-error'
    | 'word-scramble'
    | 'hangman';
};