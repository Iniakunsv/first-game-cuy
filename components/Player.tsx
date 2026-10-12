'use client';

import { Direction } from '@/data/types';

const sprites: Record<Direction, string[]> = {
  down: [
    '/characters/main/front-1.png',
    '/characters/main/front-2.png',
  ],

  up: [
    '/characters/main/back-1.png',
    '/characters/main/back-2.png',
  ],

  left: [
    '/characters/main/left-1.png',
    '/characters/main/left-2.png',
  ],

  right: [
    '/characters/main/right-1.png',
    '/characters/main/right-2.png',
  ],
};

type PlayerProps = {
  x: number;
  y: number;
  direction: Direction;
  walking: boolean;
  frame: number;
};

export default function Player({
  x,
  y,
  direction,
  walking,
  frame,
}: PlayerProps) {
  const currentFrame = walking ? frame : 0;
  const sprite = sprites[direction][currentFrame];

  return (
    <img
      src={sprite}
      alt="Nursing student"
      draggable={false}
      className="pointer-events-none absolute z-30 select-none object-contain"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '10%',
        height: 'auto',
        transform: 'translate(-50%, -75%)',
        imageRendering: 'pixelated',
      }}
    />
  );
}