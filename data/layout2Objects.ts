import { RoomObject } from './types';



export const layout2Objects: RoomObject[] = [
  /*
   * =========================================================
   * TEACHER DESK
   * =========================================================
   */

  {
    id: 'l2_teacher_desk',
    name: 'Teacher Desk',
    kind: 'desk',
    x: 10.5,
    y: 27,
    w: 11,
    h: 18,
    solid: true,
    interactive: true,
    color: 'transparent',
    description: 'The teacher desk.',
  },

  /*
   * =========================================================
   * TEACHER CHAIR
   * =========================================================
   */

  {
    id: 'l2_teacher_chair',
    name: 'Teacher Chair',
    kind: 'chair',
    x: 10.5,
    y: 27,
    w: 4,
    h: 7,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'The teacher chair.',
  },

  /*
   * =========================================================
   * LEFT STUDENT TABLE
   * =========================================================
   */

  {
    id: 'l2_table_left',
    name: 'Student Table',
    kind: 'desk',
    x: 32,
    y: 45,
    w: 8,
    h: 35,
    solid: true,
    interactive: true,
    color: 'transparent',
    description: 'A student table.',
  },

  /*
   * LEFT STUDENT CHAIRS
   */

  {
    id: 'l2_left_chair_1',
    name: 'Student Chair',
    kind: 'chair',
    x: 29.5,
    y: 47,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_left_chair_2',
    name: 'Student Chair',
    kind: 'chair',
    x: 40,
    y: 47,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_left_chair_3',
    name: 'Student Chair',
    kind: 'chair',
    x: 29.5,
    y: 58,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_left_chair_4',
    name: 'Student Chair',
    kind: 'chair',
    x: 40,
    y: 58,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  /*
   * =========================================================
   * CENTER STUDENT TABLE
   * =========================================================
   */

  {
    id: 'l2_table_center',
    name: 'Student Table',
    kind: 'desk',
    x: 52,
    y: 45,
    w: 8,
    h: 35,
    solid: true,
    interactive: true,
    color: 'transparent',
    description: 'A student table.',
  },

  /*
   * CENTER CHAIRS
   */

  {
    id: 'l2_center_chair_1',
    name: 'Student Chair',
    kind: 'chair',
    x: 49.5,
    y: 47,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_center_chair_2',
    name: 'Student Chair',
    kind: 'chair',
    x: 60,
    y: 47,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_center_chair_3',
    name: 'Student Chair',
    kind: 'chair',
    x: 49.5,
    y: 58,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_center_chair_4',
    name: 'Student Chair',
    kind: 'chair',
    x: 60,
    y: 58,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  /*
   * =========================================================
   * RIGHT STUDENT TABLE
   * =========================================================
   */

  {
    id: 'l2_table_right',
    name: 'Student Table',
    kind: 'desk',
    x: 72,
    y: 45,
    w: 8,
    h: 35,
    solid: true,
    interactive: true,
    color: 'transparent',
    description: 'A student table.',
  },

  /*
   * RIGHT CHAIRS
   */

  {
    id: 'l2_right_chair_1',
    name: 'Student Chair',
    kind: 'chair',
    x: 69.5,
    y: 47,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_right_chair_2',
    name: 'Student Chair',
    kind: 'chair',
    x: 80,
    y: 47,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_right_chair_3',
    name: 'Student Chair',
    kind: 'chair',
    x: 69.5,
    y: 58,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  {
    id: 'l2_right_chair_4',
    name: 'Student Chair',
    kind: 'chair',
    x: 80,
    y: 58,
    w: 3,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'A student chair.',
  },

  /*
   * =========================================================
   * WHITEBOARD
   * =========================================================
   *
   * EXISTING COLLISION
   * DO NOT CHANGE
   */

  {
    id: 'l2_whiteboard',
    name: 'Whiteboard',
    kind: 'board',
    x: 5,
    y: 10,
    w: 5,
    h: 42,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'The classroom whiteboard.',
  },

  /*
   * =========================================================
   * PROJECTOR
   * =========================================================
   *
   * Small projector mounted near the upper center wall.
   * Collision is intentionally kept tight around the
   * visible projector body.
   */

  {
    id: 'l2_projector',
    name: 'Projector',
    kind: 'object',
    x: 43.5,
    y: 5.5,
    w: 5.5,
    h: 7,
    solid: true,
    interactive: true,
    color: 'transparent',
    description: 'A ceiling-mounted classroom projector.',
  },

  /*
   * =========================================================
   * LEFT CURTAIN
   * =========================================================
   *
   * Collision follows the visible curtain area only.
   */

  {
    id: 'l2_left_curtain',
    name: 'Left Curtain',
    kind: 'object',
    x: 13,
    y: 5.5,
    w: 24,
    h: 18,
    solid: true,
    interactive: true,
      clueId: 'layout2-clue-left-curtain',
    color: 'transparent',
    description: 'A classroom curtain.',
  },

  /*
   * =========================================================
   * RIGHT CURTAIN
   * =========================================================
   */

  {
    id: 'l2-right-curtain',
    name: 'Right Curtain',
    kind: 'object',
    x: 56,
    y: 5.5,
    w: 23,
    h: 18,
    solid: true,
    interactive: true,
      clueId: 'layout2-clue-right-curtain',
    color: 'transparent',
    description: 'A classroom curtain.',
  },

  /*
   * =========================================================
   * RIGHT WALL DECORATION - UPPER
   * =========================================================
   *
   * The framed black/brown decoration on the upper-right wall.
   */

  {
    id: 'l2_wall_decoration_upper',
    name: 'Wall Decoration',
    kind: 'object',
    x: 91.5,
    y: 13.5,
    w: 4,
    h: 15,
    solid: true,
    interactive: true,
      clueId: 'layout2-clue-student-desk',
    color: 'transparent',
    description: 'A wall decoration.',
  },

  /*
   * =========================================================
   * RIGHT WALL DECORATION - LOWER
   * =========================================================
   *
   * The second dark/black decoration underneath it.
   */

  {
    id: 'l2-black-decoration',
    name: 'Wall Decoration',
    kind: 'object',
    x: 91.5,
    y: 30,
    w: 4,
    h: 13,
    solid: true,
    interactive: true,
      clueId: 'layout2-clue-black-decoration',
    color: 'transparent',
    description: 'A wall decoration.',
  },

  /*
   * =========================================================
   * BACK WALL
   * =========================================================
   *
   * Existing collision.
   * DO NOT CHANGE.
   */

  {
    id: 'l2_back_wall',
    name: 'Back Wall',
    kind: 'wall',
    x: 8,
    y: 22,
    w: 84,
    h: 3,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'Classroom wall.',
  },

  /*
   * =========================================================
   * RIGHT WALL
   * =========================================================
   *
   * Existing collision.
   * DO NOT CHANGE.
   */

  {
    id: 'l2_right_wall',
    name: 'Right Wall',
    kind: 'wall',
    x: 91,
    y: 20,
    w: 3,
    h: 70,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'Classroom wall.',
  },

  /*
   * =========================================================
   * LEFT WALL
   * =========================================================
   *
   * Existing collision.
   * DO NOT CHANGE.
   */

  {
    id: 'l2_left_wall',
    name: 'Left Wall',
    kind: 'wall',
    x: 6,
    y: 20,
    w: 3,
    h: 70,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'Classroom wall.',
  },

  /*
   * =========================================================
   * FRONT WALL
   * =========================================================
   *
   * Existing collision.
   * DO NOT CHANGE.
   */

  {
    id: 'l2_front_wall',
    name: 'Front Wall',
    kind: 'wall',
    x: 8,
    y: 91,
    w: 84,
    h: 3,
    solid: true,
    interactive: false,
    color: 'transparent',
    description: 'Classroom wall.',
  },
];