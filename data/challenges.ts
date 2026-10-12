import { Challenge } from './types';

export const challenges: Challenge[] = [

  /*
   * =========================================================
   * LAYOUT 1 — WHITEBOARD
   * =========================================================
   */

    {
    id: 'layout1-whiteboard-unlock',
    layout: 1,

    clueIds: [
      'layout1-clue-left-chair',
      'layout1-clue-right-chair',
      'layout1-clue-plant',
      'layout1-clue-blue-board',
    ],

    question:
      'The process of giving attention, kindness, and support to someone or something to keep them safe, healthy, and well.',

    answer: 'CARE',

    explanation:
      'The keyword is CARE. It describes the attention and concern given to a patient.',

    type: 'short-answer',
  },

  {
    id: 'layout1-whiteboard-1',
    layout: 1,

    question:
      'Nurses ___ wash their hands before treating a patient.',

    options: [
      'might',
      'must',
      'could',
      'would',
    ],

    answer: 1,

    explanation:
      'Must is used because hand hygiene is an essential requirement before treating a patient.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-2',
    layout: 1,

    question:
      'The patient ___ feel dizzy after taking the medicine.',

    options: [
      'must',
      'should',
      'shall',
      'might',
    ],

    answer: 3,

    explanation:
      'Might expresses possibility. The patient may possibly feel dizzy after taking the medicine.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-3',
    layout: 1,

    question:
      'You ___ drink plenty of water when you have a fever.',

    options: [
      'should',
      'might',
      'would',
      'can',
    ],

    answer: 0,

    explanation:
      'Should is used to give advice or a recommendation.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-4',
    layout: 1,

    question:
      'A nurse ___ check the patient\'s temperature.',

    options: [
      'can',
      'would',
      'might',
      'must not',
    ],

    answer: 0,

    explanation:
      'Can is appropriate because checking a patient\'s temperature is an ability or permitted nursing action.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-5',
    layout: 1,

    question:
      'Patients ___ follow the doctor\'s instructions carefully.',

    options: [
      'could',
      'may',
      'ought to',
      'would',
    ],

    answer: 2,

    explanation:
      'Ought to expresses advice or a strong recommendation.',

    type: 'multiple-choice',
  },


  /*
   * =========================================================
   * LAYOUT 1 — DRAWER
   * =========================================================
   */

  {
    id: 'layout1-drawer-1',
    layout: 1,

    question:
      '___ I help you get out of bed, Mrs. Smith?',

    options: [
      'Must',
      'Shall',
      'Might',
      'Could',
    ],

    answer: 1,

    explanation:
      'Shall can be used politely when offering help or suggesting an action.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-2',
    layout: 1,

    question:
      'You ___ take this medicine before eating unless the doctor says otherwise.',

    options: [
      'should not',
      'can',
      'would',
      'might',
    ],

    answer: 0,

    explanation:
      'Should not expresses advice against taking the medicine before eating.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-3',
    layout: 1,

    question:
      'The nurse ___ monitor the patient\'s blood pressure every four hours.',

    options: [
      'will',
      'might',
      'could',
      'would',
    ],

    answer: 0,

    explanation:
      'Will is appropriate for a planned or expected nursing action.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-4',
    layout: 1,

    question:
      '___ you like some water, Mr. Shiba?',

    options: [
      'Must',
      'Would',
      'Should',
      'Shall',
    ],

    answer: 1,

    explanation:
      'Would you like...? is a polite way to offer something to a patient.',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-5',
    layout: 1,

    question:
      'The patient ___ have an infection because his temperature is very high.',

    options: [
      'would',
      'should',
      'might',
      'can',
    ],

    answer: 2,

    explanation:
      'Might expresses possibility because the high temperature suggests, but does not prove, an infection.',

    type: 'multiple-choice',
  },


  /*
   * =========================================================
   * LAYOUT 2 — TEACHER DESK
   * =========================================================
   */

  {
    id: 'layout2-teacherdesk-1',
    layout: 2,

    question:
      'The patient has been coughing for three weeks. He ___ have a respiratory infection, but further examination is needed.',

    options: [
      'must',
      'should',
      'might',
      'will',
    ],

    answer: 2,

    explanation:
      'Might expresses possibility because further examination is still needed.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-2',
    layout: 2,

    question:
      'The patient\'s blood pressure is extremely high. The nurse ___ inform the doctor immediately.',

    options: [
      'might',
      'could',
      'must',
      'would',
    ],

    answer: 2,

    explanation:
      'Must expresses strong necessity because extremely high blood pressure requires immediate attention.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-3',
    layout: 2,

    question:
      'The patient is unconscious and is not responding to the nurse. She ___ be asleep.',

    options: [
      'must',
      'can\'t',
      'should',
      'may',
    ],

    answer: 1,

    explanation:
      'Can\'t expresses strong impossibility. An unconscious, unresponsive patient cannot simply be assumed to be asleep.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-4',
    layout: 2,

    question:
      'You have been feeling weak since yesterday. You ___ see a doctor if the symptoms continue.',

    options: [
      'mustn\'t',
      'should',
      'can\'t',
      'wouldn\'t',
    ],

    answer: 1,

    explanation:
      'Should is used to give appropriate medical advice or a recommendation.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-5',
    layout: 2,

    question:
      'The nurse isn\'t in the treatment room. She ___ be checking another patient.',

    options: [
      'must',
      'can\'t',
      'might',
      'should',
    ],

    answer: 2,

    explanation:
      'Might expresses a possible explanation for where the nurse is.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-6',
    layout: 2,

    question:
      'Patients with diabetes ___ monitor their blood sugar levels regularly to reduce the risk of complications.',

    options: [
      'ought to',
      'might',
      'would',
      'could',
    ],

    answer: 0,

    explanation:
      'Ought to expresses strong advice or recommendation.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-7',
    layout: 2,

    question:
      'The patient has already received the correct medication, so the symptoms ___ be caused by an allergic reaction.',

    options: [
      'mustn\'t',
      'can\'t',
      'should',
      'would',
    ],

    answer: 1,

    explanation:
      'Can\'t expresses strong impossibility in this sentence.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-8',
    layout: 2,

    question:
      'If the patient continues to experience chest pain, the nurse ___ contact the emergency team immediately.',

    options: [
      'might',
      'would',
      'should',
      'could',
    ],

    answer: 2,

    explanation:
      'Should gives appropriate advice or indicates the recommended action.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-9',
    layout: 2,

    question:
      'The doctor isn\'t here yet, but he ___ arrive within the next ten minutes.',

    options: [
      'must',
      'can\'t',
      'might',
      'should',
    ],

    answer: 2,

    explanation:
      'Might expresses a possibility about the doctor\'s arrival.',

    type: 'multiple-choice',
  },

  {
    id: 'layout2-teacherdesk-10',
    layout: 2,

    question:
      'A nurse ___ never administer medication without checking the patient\'s identity and prescription first.',

    options: [
      'could',
      'may',
      'would',
      'should',
    ],

    answer: 3,

    explanation:
      'Should expresses the correct professional rule or expected nursing practice.',

    type: 'multiple-choice',
  },


  /*
   * =========================================================
   * LAYOUT 3 — WATER GALLON 1
   * FIND ERROR
   * =========================================================
   */

  {
    id: 'l3-water-gallon-1-1',
    layout: 3,

    question:
      'Find the incorrect word in this sentence:\n\n"The nurse should checked the patient\'s temperature before giving the medicine."',

    answer: 'checked',

    explanation:
      'After the modal verb "should", we use the base form of the verb. The correct sentence is: "The nurse should check the patient\'s temperature before giving the medicine."',

    type: 'find-error',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-1-2',
    layout: 3,

    question:
      'Find the incorrect word in this sentence:\n\n"Patients must takes their medication according to the doctor\'s instructions."',

    answer: 'takes',

    explanation:
      'After the modal verb "must", we use the base form "take". The correct sentence is: "Patients must take their medication according to the doctor\'s instructions."',

    type: 'find-error',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-1-3',
    layout: 3,

    question:
      'Find the incorrect word in this sentence:\n\n"The patient has a very high fever, so the nurse might contact the doctor immediately."',

    answer: 'might',

    explanation:
      'In this context, "must" is more appropriate because the very high fever requires an immediate action. The sentence should be: "The patient has a very high fever, so the nurse must contact the doctor immediately."',

    type: 'find-error',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-1-4',
    layout: 3,

    question:
      'Find the incorrect word in this sentence:\n\n"You should drinking plenty of water while recovering from dehydration."',

    answer: 'drinking',

    explanation:
      'After the modal verb "should", we use the base form "drink". The correct sentence is: "You should drink plenty of water while recovering from dehydration."',

    type: 'find-error',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-1-5',
    layout: 3,

    question:
      'Find the incorrect word in this sentence:\n\n"The patient is unconscious, so the nurse can\'t to leave the patient unattended."',

    answer: 'to',

    explanation:
      'After "can\'t", we use the base form without "to". The correct sentence is: "The nurse can\'t leave the patient unattended."',

    type: 'find-error',

    clueIds: [],
  },


  /*
   * =========================================================
   * LAYOUT 3 — WATER GALLON 2
   * WORD SCRAMBLE
   * =========================================================
   */

  {
    id: 'l3-water-gallon-2-1',
    layout: 3,

    question:
      'Arrange the words to make a correct sentence:',

    options: [
      'MUST',
      'PATIENTS',
      'THEIR',
      'TAKE',
      'MEDICINE',
      'REGULARLY',
    ],

    answer: 'Patients must take their medicine regularly',

    explanation:
      'The correct sentence is: "PATIENTS MUST TAKE THEIR MEDICINE REGULARLY"',

    type: 'word-scramble',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-2-2',
    layout: 3,

    question:
      'Arrange the words to make a correct sentence:',

    options: [
      'SURGERY',
      'AFTER',
      'THE PATIENT',
      'REST',
      'SHOULD',
    ],

    answer: 'The patient should rest after surgery',

    explanation:
      'The correct sentence is: "THE PATIENT SHOULD REST AFTER SURGERY"',

    type: 'word-scramble',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-2-3',
    layout: 3,

    question:
      'Arrange the words to make a correct sentence:',

    options: [
      'EXPERIENCE',
      'MIGHT',
      'SOME',
      'DIZZINESS',
      'THE PATIENT',
    ],

    answer: 'The patient might experience some dizziness',

    explanation:
      'The correct sentence is: "THE PATIENT MIGHT EXPERIENCE SOME DIZZINESS"',

    type: 'word-scramble',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-2-4',
    layout: 3,

    question:
      'Arrange the words to make a correct sentence:',

    options: [
      'CHECK',
      'SHOULD',
      'NURSES',
      'BLOOD PRESSURE',
      'REGULARLY',
      'THE PATIENT\'S',
    ],

    answer: 'Nurses should check the patient\'s blood pressure regularly',

    explanation:
      'The correct sentence is: "NURSES SHOULD CHECK THE PATIENT\'S BLOOD PRESSURE REGULARLY"',

    type: 'word-scramble',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-2-5',
    layout: 3,

    question:
      'Arrange the words to make a correct sentence:',

    options: [
      'WEAR',
      'YOU',
      'PROTECTIVE EQUIPMENT',
      'MUST',
      'THE TREATMENT ROOM',
      'IN',
    ],

    answer: 'You must wear protective equipment in the treatment room',

    explanation:
      'The correct sentence is: "YOU MUST WEAR PROTECTIVE EQUIPMENT IN THE TREATMENT ROOM"',

    type: 'word-scramble',

    clueIds: [],
  },


  /*
   * =========================================================
   * LAYOUT 3 — WATER GALLON 3
   * HANGMAN
   * =========================================================
   */

    {
    id: 'l3-water-gallon-3-1',
    layout: 3,

    question:
      'Guess the healthcare word:',

    answer: 'THERMOMETER',

    clue:
      'This instrument is used to measure a patient\'s body temperature.',

    explanation:
      'A thermometer is an instrument used to measure body temperature.',

    type: 'hangman',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-3-2',
    layout: 3,

    question:
      'Guess the healthcare word:',

    answer: 'STETHOSCOPE',

    clue:
      'This instrument is used to listen to the heart and lungs.',

    explanation:
      'A stethoscope is an instrument commonly used by healthcare professionals to listen to sounds inside the body, such as the heart and lungs.',

    type: 'hangman',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-3-3',
    layout: 3,

    question:
      'Guess the healthcare word:',

    answer: 'PRESCRIPTION',

    clue:
      'This is a written instruction from a healthcare professional about medicine or treatment.',

    explanation:
      'A prescription is an instruction from an authorized healthcare professional about medicine or treatment for a patient.',

    type: 'hangman',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-3-4',
    layout: 3,

    question:
      'Guess the healthcare word:',

    answer: 'HYPERTENSION',

    clue:
      'A medical condition in which the pressure of blood against the walls of the arteries is consistently too high.',

    explanation:
      'Hypertension is a condition in which blood pressure is consistently too high. If untreated, it can increase the risk of heart disease and stroke.',

    type: 'hangman',

    clueIds: [],
  },

  {
    id: 'l3-water-gallon-3-5',
    layout: 3,

    question:
      'Guess the healthcare word:',

    answer: 'INJECTION',

    clue:
      'A common medical procedure used to deliver medicine or vaccines directly into the body.',

    explanation:
      'An injection is a medical procedure in which medicine or a vaccine is introduced into the body using a needle and syringe. It is commonly used to treat illnesses, prevent diseases, and provide medication when needed.',

    type: 'hangman',

    clueIds: [],
  },


  /*
   * =========================================================
   * LAYOUT 4
   * =========================================================
   *
   * No Layout 4 challenges were present in the source file.
   * Keep this section for future Layout 4 questions.
   *
   * =========================================================
   */

];