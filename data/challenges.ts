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
      'A condition in which a person is not healthy and may experience symptoms such as fever, pain, or weakness.',

    answer: 'SICK',

    explanation:
      'Sick is a condition in which a person is not feeling well or has an illness. A sick person may experience symptoms such as fever, headache, cough, pain, or weakness.',

    type: 'short-answer',
  },

  {
    id: 'layout1-whiteboard-1',
    layout: 1,

    question:
      'Before giving medication to a patient, a nurse _____ check the patient\'s identity and verify the prescribed dosage to prevent medication errors.',

    options: [
      'might',
      'must',
      'could',
      'would',
      'may',
    ],

    answer: 1,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-2',
    layout: 1,

    question:
      'A patient has a high fever, a persistent cough, and difficulty breathing. The nurse thinks these symptoms _____ indicate a serious respiratory infection.',

    options: [
      'mustn\'t',
      'have to',
      'might',
      'will',
      'can',
    ],

    answer: 2,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-3',
    layout: 1,

    question:
      'During a sterile procedure, nurses _____ touch sterile instruments with unsterile gloves because this can contaminate the equipment and increase the risk of infection.',

    options: [
      'should',
      'can',
      'might',
      'mustn\'t',
      'will',
    ],

    answer: 3,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-4',
    layout: 1,

    question:
      'After several weeks of clinical training, the nursing student _____ measure blood pressure accurately and record the results in the patient\'s medical chart.',

    options: [
      'can',
      'mustn\'t',
      'might not',
      'will have to',
      'shouldn\'t',
    ],

    answer: 0,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-whiteboard-5',
    layout: 1,

    question:
      'The nurse has explained the discharge instructions to the patient. Tomorrow, she _____ contact the patient to check their recovery progress and answer any questions.',

    options: [
      'could have',
      'mustn\'t',
      'will',
      'might not',
      'can\'t',
    ],

    answer: 2,

    explanation:
      'CORRECT!',

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
      'A patient with diabetes is scheduled for a blood glucose test before breakfast. The nurse _____ follow the hospital\'s testing protocol and document the result accurately.',

    options: [
      'may',
      'must',
      'could',
      'might',
      'would',
    ],

    answer: 1,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-2',
    layout: 1,

    question:
      'A nurse notices that an elderly patient feels dizzy when standing up from the bed. The nurse thinks the patient _____ need assistance when walking to prevent a possible fall.',

    options: [
      'mustn\'t',
      'can\'t',
      'might',
      'won\'t',
      'shouldn\'t',
    ],

    answer: 2,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-3',
    layout: 1,

    question:
      'In the hospital\'s isolation room, visitors _____ enter without following the required infection-control precautions, including wearing the appropriate personal protective equipment.',

    options: [
      'can',
      'may',
      'should',
      'mustn\'t',
      'will',
    ],

    answer: 3,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-4',
    layout: 1,

    question:
      'Before working independently in the emergency department, a nursing student must demonstrate that they _____ perform basic life support correctly under appropriate clinical supervision.',

    options: [
      'can',
      'mustn\'t',
      'might not',
      'will not',
      'shouldn\'t',
    ],

    answer: 0,

    explanation:
      'CORRECT!',

    type: 'multiple-choice',
  },

  {
    id: 'layout1-drawer-5',
    layout: 1,

    question:
      'The hospital is introducing a new electronic medical record system next month. All nurses _____ attend a training session so they can use the system safely and accurately.',

    options: [
      'might not',
      'can\'t',
      'mustn\'t',
      'could',
      'will have to',
    ],

    answer: 4,

    explanation:
      'CORRECT!',

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
      'THE',
      'PATIENT',
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
      'PATIENT',
      'SOME',
      'DIZZINESS',
      'THE',
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
      'THE',
      'NURSES',
      'PRESSURE',
      'REGULARLY',
      'PATIENT\'S',
      'BLOOD',
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
      'PROTECTIVE',
      'MUST',
      'EQUIPMENT',
      'TREATMENT',
      'THE',
      'IN',
      'ROOM',
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