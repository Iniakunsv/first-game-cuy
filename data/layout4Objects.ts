import { RoomObject } from './types';

export const layout4Objects: RoomObject[] = [

/*

* =====================================================
* ROOM EDGES
* =====================================================
  */

// TOP EDGE
{
id: 'l4-top-edge',
name: 'Top Edge',
kind: 'wall',
x: 0,
y: 0,
w: 100,
h: 3,
solid: true,
interactive: false,
color: 'transparent',
},

// LEFT EDGE
{
id: 'l4-left-edge',
name: 'Left Edge',
kind: 'wall',
x: 0,
y: 0,
w: 3,
h: 100,
solid: true,
interactive: false,
color: 'transparent',
},

// RIGHT EDGE
{
id: 'l4-right-edge',
name: 'Right Edge',
kind: 'wall',
x: 97,
y: 0,
w: 3,
h: 100,
solid: true,
interactive: false,
color: 'transparent',
},

// BOTTOM EDGE
{
id: 'l4-bottom-edge',
name: 'Bottom Edge',
kind: 'wall',
x: 0,
y: 97,
w: 100,
h: 3,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* ROOFTOP BUILDING
* =====================================================
*
* Split collision around the door.
* The doorway remains passable.
  */

// Building roof / upper section
{
id: 'l4-building-left',
name: 'Building Roof',
kind: 'wall',
x: 7,
y: 9,
w: 23,
h: 10,
solid: true,
interactive: false,
color: 'transparent',
},

// Building left wall
{
id: 'l4-building-wall-left',
name: 'Building Left Wall',
kind: 'wall',
x: 7,
y: 18,
w: 7,
h: 20,
solid: true,
interactive: false,
color: 'transparent',
},

// Building right wall
{
id: 'l4-building-right',
name: 'Building Right Wall',
kind: 'wall',
x: 22,
y: 18,
w: 8,
h: 20,
solid: true,
interactive: false,
color: 'transparent',
},

// Wall below the door, left section
{
id: 'l4-building-bottom-left',
name: 'Building Bottom Left',
kind: 'wall',
x: 8,
y: 37,
w: 7,
h: 3,
solid: true,
interactive: false,
color: 'transparent',
},

// Wall below the door, right section
{
id: 'l4-building-bottom-right',
name: 'Building Bottom Right',
kind: 'wall',
x: 22,
y: 37,
w: 7,
h: 3,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* LEFT BENCH
* =====================================================
  */

{
id: 'l4-bench-left',
name: 'Left Bench',
kind: 'object',
x: 6,
y: 43,
w: 8,
h: 12,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* RIGHT BENCH
* =====================================================
  */

{
id: 'l4-bench-right',
name: 'Right Bench',
kind: 'object',
x: 85,
y: 43,
w: 8,
h: 12,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* LEFT PLANTER — UPPER
* =====================================================
  */

{
id: 'l4-plant-left',
name: 'Left Planter',
kind: 'plant',
x: 4,
y: 36,
w: 10,
h: 9,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* LEFT PLANTER — LOWER
* =====================================================
  */

{
id: 'l4-plant-left-lower',
name: 'Left Lower Planter',
kind: 'plant',
x: 3,
y: 52,
w: 11,
h: 14,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* RIGHT PLANTER — UPPER
* =====================================================
  */

{
id: 'l4-plant-right',
name: 'Right Planter',
kind: 'plant',
x: 77,
y: 27,
w: 12,
h: 12,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* RIGHT PLANTER — LOWER
* =====================================================
  */

{
id: 'l4-plant-right-lower',
name: 'Right Lower Planter',
kind: 'plant',
x: 88,
y: 52,
w: 9,
h: 17,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* TOP RAILING
* =====================================================
  */

{
id: 'l4-top-trail',
name: 'Top Railing',
kind: 'wall',
x: 30,
y: 21,
w: 47,
h: 3,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* LEFT RAILING
* =====================================================
  */

{
id: 'l4-left-trail',
name: 'Left Railing',
kind: 'wall',
x: 3,
y: 20,
w: 4,
h: 60,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* RIGHT RAILING
* =====================================================
  */

{
id: 'l4-right-trail',
name: 'Right Railing',
kind: 'wall',
x: 93,
y: 20,
w: 4,
h: 60,
solid: true,
interactive: false,
color: 'transparent',
},

/*

* =====================================================
* BOTTOM RAILING
* =====================================================
  */

{
id: 'l4-bottom-trail',
name: 'Bottom Railing',
kind: 'wall',
x: 7,
y: 77,
w: 86,
h: 4,
solid: true,
interactive: false,
color: 'transparent',
},

];
