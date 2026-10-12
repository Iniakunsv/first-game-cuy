'use client';

import { useEffect, useState } from 'react';
import { RoomObject } from '@/data/types';

type RoomProps = {
  roomObjects: RoomObject[];
  nearId: string | null;
  collected: Set<string>;
  onInteract: (object: RoomObject) => void;
  layout: 1 | 2 | 3 | 4;
};

export default function Room({
  roomObjects,
  nearId,
  collected,
  onInteract,
  layout,
}: RoomProps) {

  const roomImages: Record<number, string> = {
    1: '/layout1-room.png',
    2: '/layout2-room.png',
    3: '/layout3-room.png',
    4: '/layout4-room.png',
  };

  /*
   * =========================================================
   * DEBUG MODE
   * F2 = ON / OFF
   * =========================================================
   */

  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {

      if (event.key === 'F2') {

        event.preventDefault();

        setDebugMode((current) => !current);

      }

    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, []);


  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* =====================================================
          ROOM BACKGROUND
          ===================================================== */}

      <img
        src={roomImages[layout]}
        alt={`Healthcare room layout ${layout}`}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          imageRendering: 'pixelated',
        }}
      />


      {/* =====================================================
          DEBUG OBJECT BOXES
          ===================================================== */}

      {debugMode && (

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[200]
          "
        >

          {roomObjects.map((object) => {

            const isNear =
              nearId === object.id;

            let borderColor =
              'border-blue-400';

            let backgroundColor =
              'bg-blue-400/10';

            /*
             * SOLID
             */

            if (object.solid) {

              borderColor =
                'border-red-500';

              backgroundColor =
                'bg-red-500/20';

            }

            /*
             * INTERACTIVE
             */

            if (object.interactive) {

              borderColor =
                'border-yellow-400';

              backgroundColor =
                'bg-yellow-400/20';

            }

            /*
             * CURRENTLY NEAR
             */

            if (isNear) {

              borderColor =
                'border-green-400';

              backgroundColor =
                'bg-green-400/30';

            }

            return (
              <div
                key={`debug-${object.id}`}
                className={`
                  absolute
                  border-2
                  ${borderColor}
                  ${backgroundColor}
                `}
                style={{
                  left: `${object.x}%`,
                  top: `${object.y}%`,
                  width: `${object.w}%`,
                  height: `${object.h}%`,
                }}
              >

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    -translate-y-full
                    whitespace-nowrap
                    bg-black
                    px-1
                    py-1
                    text-[8px]
                    font-bold
                    text-white
                  "
                >

                  {object.name}

                </div>

              </div>
            );

          })}

        </div>

      )}


      {/* =====================================================
          INTERACTIVE OBJECTS
          ===================================================== */}

      {roomObjects.map((object) => {

        if (!object.interactive) {
          return null;
        }

        const isNear =
          nearId === object.id;

        return (
          <button
            key={object.id}
            type="button"
            onClick={() => onInteract(object)}
            aria-label={`Interact with ${object.name}`}
            className={`
              absolute
              z-[50]
              cursor-pointer
              bg-transparent

             
            `}
            style={{
              left: `${object.x}%`,
              top: `${object.y}%`,
              width: `${object.w}%`,
              height: `${object.h}%`,
            }}
          />
        );

      })}


      {/* =====================================================
          DEBUG PANEL
          ===================================================== */}

      {debugMode && (

        <div
          className="
            absolute
            bottom-2
            left-2
            z-[250]
            max-h-[45%]
            max-w-[80%]
            overflow-auto
            border-2
            border-white
            bg-black/95
            p-3
            text-[8px]
            font-bold
            text-white
          "
        >

          <div className="mb-2 text-yellow-300">
            F2 DEBUG — LAYOUT {layout}
          </div>

          <div>
            OBJECT COUNT: {roomObjects.length}
          </div>

          <div className="mt-1 text-red-300">
            RED = SOLID
          </div>

          <div className="text-yellow-300">
            YELLOW = INTERACTIVE
          </div>

          <div className="text-green-300">
            GREEN = NEAR
          </div>

          <div className="mt-2 text-cyan-300">
            NEAR ID:
          </div>

          <div>
            {nearId ?? 'NONE'}
          </div>

          <div className="mt-2">

            {roomObjects.map((object) => (

              <div
                key={`debug-list-${object.id}`}
                className="border-b border-white/10 py-1"
              >

                <div>
                  {object.id}
                </div>

                <div className="text-slate-400">

                  solid={
                    String(object.solid)
                  }

                  {' | '}

                  interactive={
                    String(object.interactive)
                  }

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}