import { RoomObject } from './types';

export const layout3Objects: RoomObject[] = [

  /*
   * =====================================================
   * OUTER WALLS
   * =====================================================
   */

  {
    id: 'l3-wall-top',
    name: 'Top Wall',
    kind: 'wall',
    x: 3,
    y: 2,
    w: 94,
    h: 5,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  {
    id: 'l3-wall-left',
    name: 'Left Wall',
    kind: 'wall',
    x: 0,
    y: 4,
    w: 5,
    h: 88,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  {
    id: 'l3-wall-right',
    name: 'Right Wall',
    kind: 'wall',
    x: 95,
    y: 4,
    w: 5,
    h: 88,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  {
    id: 'l3-wall-bottom',
    name: 'Bottom Wall',
    kind: 'wall',
    x: 4,
    y: 91,
    w: 92,
    h: 5,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT GREEN COLUMN
   * =====================================================
   */

  {
    id: 'l3-column-left',
    name: 'Left Green Column',
    kind: 'wall',
    x: 19,
    y: 5,
    w: 6,
    h: 53,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * RIGHT GREEN COLUMN
   * =====================================================
   */

  {
    id: 'l3-column-right',
    name: 'Right Green Column',
    kind: 'wall',
    x: 75,
    y: 5,
    w: 6,
    h: 53,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT UPPER STAIR RAIL
   * =====================================================
   */

  {
    id: 'l3-stair-rail-left-upper',
    name: 'Left Upper Stair Rail',
    kind: 'wall',
    x: 35,
    y: 10,
    w: 6,
    h: 40,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =====================================================
   * RIGHT UPPER STAIR RAIL
   * =====================================================
   */

  {
    id: 'l3-stair-rail-right-upper',
    name: 'Right Upper Stair Rail',
    kind: 'wall',
    x: 59,
    y: 10,
    w: 4,
    h: 40,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT UPPER STAIR POST
   * =====================================================
   */

  {
    id: 'l3-stair-post-left',
    name: 'Left Stair Post',
    kind: 'wall',
    x: 34,
    y: 51,
    w: 6,
    h: 10,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =====================================================
   * RIGHT UPPER STAIR POST
   * =====================================================
   */

  {
    id: 'l3-stair-post-right',
    name: 'Right Stair Post',
    kind: 'wall',
    x: 60,
    y: 51,
    w: 6,
    h: 10,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT SIDE OF MAIN STAIR
   * =====================================================
   */

  {
    id: 'l3-main-stair-side-left',
    name: 'Left Main Stair Side',
    kind: 'wall',
    x: 27,
    y: 35,
    w: 8,
    h: 20,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =====================================================
   * RIGHT SIDE OF MAIN STAIR
   * =====================================================
   */

  {
    id: 'l3-main-stair-side-right',
    name: 'Right Main Stair Side',
    kind: 'wall',
    x: 65,
    y: 35,
    w: 8,
    h: 20,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT LOWER STAIR — OUTER RAIL
   * =====================================================
   */

  {
    id: 'l3-lower-stair-rail-left',
    name: 'Left Lower Stair Rail',
    kind: 'wall',
    x: 23,
    y: 42,
    w: 4,
    h: 16,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =====================================================
   * RIGHT LOWER STAIR — OUTER RAIL
   * =====================================================
   */

  {
    id: 'l3-lower-stair-rail-right',
    name: 'Right Lower Stair Rail',
    kind: 'wall',
    x: 73,
    y: 42,
    w: 4,
    h: 16,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT LOWER STAIR SIDE
   * =====================================================
   */

  {
    id: 'l3-lower-stair-side-left',
    name: 'Left Lower Stair Side',
    kind: 'wall',
    x: 27,
    y: 49,
    w: 8,
    h: 8,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  /*
   * =====================================================
   * RIGHT LOWER STAIR SIDE
   * =====================================================
   */

  {
    id: 'l3-lower-stair-side-right',
    name: 'Right Lower Stair Side',
    kind: 'wall',
    x: 67,
    y: 49,
    w: 8,
    h: 8,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT LOWER STAIR BOTTOM EDGE
   * =====================================================
   */

 

  /*
   * =====================================================
   * RIGHT LOWER STAIR BOTTOM EDGE
   * =====================================================
   */




  /*
   * =====================================================
   * LEFT WATER GALLONS
   * =====================================================
   *
   * These are solid so the player cannot walk through them.
   */

  {
    id: 'l3-water-gallon-1',
    name: 'Water Gallon',
    kind: 'furniture',
    x: 9,
    y: 59,
    w: 5,
    h: 7,
    solid: true,
    interactive: true,
    color: 'transparent',
  },

  {
    id: 'l3-water-gallon-left-2',
    name: 'Water Gallon Left 2',
    kind: 'furniture',
    x: 11,
    y: 56,
    w: 5,
    h: 7,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  {
    id: 'l3-water-gallon-left-3',
    name: 'Water Gallon Left 3',
    kind: 'furniture',
    x: 15,
    y: 53,
    w: 5,
    h: 7,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * RIGHT WATER GALLONS
   * =====================================================
   */

  {
    id: 'l3-water-gallon-right-1',
    name: 'Water Gallon Right',
    kind: 'furniture',
    x: 88,
    y: 59,
    w: 5,
    h: 7,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

  {
    id: 'l3-water-gallon-2',
    name: 'Water Gallon',
    kind: 'furniture',
    x: 84,
    y: 56,
    w: 5,
    h: 7,
    solid: true,
    interactive: true,
    color: 'transparent',
  },

  {
    id: 'l3-water-gallon-3',
    name: 'Water Gallon',
    kind: 'furniture',
    x: 80,
    y: 53,
    w: 5,
    h: 7,
    solid: true,
    interactive: true,
    color: 'transparent',
  },


  /*
   * =====================================================
   * LEFT WALL LOWER SECTION
   * =====================================================
   */

  {
    id: 'l3-left-wall-lower',
    name: 'Left Lower Wall',
    kind: 'wall',
    x: 5,
    y: 65,
    w: 5,
    h: 25,
    solid: true,
    interactive: false,
    color: 'transparent',
  },


  /*
   * =====================================================
   * RIGHT WALL LOWER SECTION
   * =====================================================
   */

  {
    id: 'l3-right-wall-lower',
    name: 'Right Lower Wall',
    kind: 'wall',
    x: 90,
    y: 65,
    w: 5,
    h: 25,
    solid: true,
    interactive: false,
    color: 'transparent',
  },

];