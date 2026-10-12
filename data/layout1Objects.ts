import { RoomObject } from './types';

export const layout1Objects: RoomObject[] = [

  /*
   * =========================================================
   * BACK WALL / GLASS WINDOW
   * =========================================================
   */

  {
    id: 'l1-back-wall',
    name: 'Back Wall',
    kind: 'wall',
    x: 5,
    y: 20,
    w: 90,
    h: 6,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =========================================================
   * LEFT WALL
   * =========================================================
   *
   * Door opening is left open.
   */

  {
    id: 'l1-left-wall-top',
    name: 'Left Wall',
    kind: 'wall',
    x: 5,
    y: 5,
    w: 7,
    h: 63,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  {
    id: 'l1-left-wall-bottom',
    name: 'Left Wall',
    kind: 'wall',
    x: 0,
    y: 92,
    w: 95,
    h: 5,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =========================================================
   * RIGHT WALL
   * =========================================================
   */

  {
    id: 'l1-right-wall',
    name: 'Right Wall',
    kind: 'wall',
    x: 92,
    y: 10,
    w: 5,
    h: 87,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =========================================================
   * BOTTOM WALL
   * =========================================================
   */

  {
    id: 'l1-bottom-wall',
    name: 'Bottom Wall',
    kind: 'wall',
    x: 5,
    y: 94,
    w: 87,
    h: 4,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =========================================================
   * LEFT DOOR
   * =========================================================
   *
   * Door remains open so the player can leave the room.
   */

  {
    id: 'l1-door',
    name: 'Door',
    kind: 'door',
    x: 1,
    y: 68,
    w: 9,
    h: 25,
    solid: false,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =========================================================
   * SOFA
   * =========================================================
   *
   * Only the physical lower footprint is solid.
   */

  {
    id: 'l1-sofa',
    name: 'Sofa',
    kind: 'sofa',
    x: 35,
    y: 32,
    w: 28,
    h: 10,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =========================================================
   * LEFT CHAIR
   * =========================================================
   *
   * Solid + fake interaction.
   * Pressing E will show fake interaction,
   * but will NOT open a challenge.
   */

  {
    id: 'l1-chair-left',
    name: 'Chair',
    kind: 'chair',
    x: 29,
    y: 48,
    w: 10,
    h: 16,
    solid: true,
    interactive: true,
    clueId: 'layout1-clue-left-chair',
    color: 'transparent',
  },

  /*
   * =========================================================
   * RIGHT CHAIR
   * =========================================================
   *
   * Solid + fake interaction.
   */

  {
    id: 'l1-chair-right',
    name: 'Chair',
    kind: 'chair',
    x: 61,
    y: 48,
    w: 10,
    h: 16,
    solid: true,
    interactive: true,
    clueId: 'layout1-clue-right-chair',
    color: 'transparent',
  },

  /*
   * =========================================================
   * COFFEE TABLE
   * =========================================================
   *
   * THIS IS A REAL CHALLENGE OBJECT.
   *
   * Solid collision is kept on the actual
   * physical table area.
   */

  {
    id: 'l1-coffee-table',
    name: 'Table',
    kind: 'table',
    x: 43,
    y: 52,
    w: 14,
    h: 10,
    solid: true,
    interactive: true,
    color: 'transparent',
  },

  /*
   * =========================================================
   * BLUE BOARD / WALL BOARD
   * =========================================================
   *
   * Fake interaction.
   *
   * Player can press E near it,
   * but it does NOT open a question.
   */

  {
    id: 'l1-blue-board',
    name: 'Blueboard',
    kind: 'board',
    x: 87,
    y: 28,
    w: 6,
    h: 28,
    solid: true,
    interactive: true,
    clueId: 'layout1-clue-blue-board',
    color: 'transparent',
  },

  /*
   * =========================================================
   * DRAWER / SMALL CABINET
   * =========================================================
   *
   * Fake interaction.
   */

  {
    id: 'l1-drawer',
    name: 'Drawer',
    kind: 'drawer',
    x: 87,
    y: 59,
    w: 6,
    h: 14,
    solid: true,
    interactive: true,
    color: 'transparent',
  },

  /*
   * =========================================================
   * PLANT
   * =========================================================
   *
   * Fake interaction.
   */

  {
    id: 'l1-plant',
    name: 'Plant',
    kind: 'plant',
    x: 87,
    y: 70,
    w: 6,
    h: 10,
    solid: true,
    interactive: true,
     clueId: 'layout1-clue-plant',
    color: 'transparent',
  },
  {
id: 'l1-standing-banner',
name: 'Standing Banner',
kind: 'banner',
x: 78,
y: 16,
w: 8,
h: 15,
solid: true,
interactive: false,
color: 'transparent',
},
  /*
   * =========================================================
   * WHITEBOARD
   * =========================================================
   *
   * REAL CHALLENGE OBJECT.
   *
   * This is the whiteboard on the LEFT side
   * of the room.
   *
   * IMPORTANT:
   * solid = false
   *
   * The player can stand close to it
   * and interact with E.
   */

  {
    id: 'l1-whiteboard-challenge',
    name: 'Whiteboard',
    kind: 'challenge',
    x: 7,
    y: 28,
    w: 4,
    h: 20,
    solid: false,
    interactive: true,
    color: 'transparent',
  },

];