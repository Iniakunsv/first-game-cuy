'use client';

import { useEffect } from 'react';
import { Clue, RoomObject } from '@/data/types';

type InteractionPanelProps = {
  object: RoomObject;
  clue?: Clue;
  onClose: () => void;
  onCollect: () => void;
  collected: boolean;
};

export default function InteractionPanel({
  object,
  clue,
  onClose,
  onCollect,
  collected,
}: InteractionPanelProps) {

  /*
   * ESC = CLOSE INTERACTION
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-4">

      <div className="panel max-w-md p-5 text-sm">

        <div className="mb-2 flex items-center justify-between">

          <h2 className="font-black text-yellow-200">
            {object.name}
          </h2>

          <button
            type="button"
            className="retro-btn px-2"
            onClick={onClose}
          >
            X
          </button>

        </div>

        <p className="text-slate-300">
          {object.description}
        </p>

        {clue && (
          <div className="mt-4 border-2 border-dashed border-cyan-700 bg-slate-950/60 p-3">

            <div className="text-xs text-cyan-300">
              HIDDEN ENGLISH CLUE
            </div>

            <div className="mt-1 text-base font-black text-white">
              {clue.title}
            </div>

            <p className="mt-2 whitespace-pre-line text-slate-300">
              {clue.text}
            </p>

            <div className="mt-3 text-lg font-black text-yellow-200">
              {clue.keyword}
            </div>

          </div>
        )}

        {clue && !collected && (
          <button
            type="button"
            className="retro-btn mt-4 w-full py-2 text-yellow-100"
            onClick={onCollect}
          >
            COLLECT CLUE
          </button>
        )}

        {clue && collected && (
          <div className="mt-4 text-center text-green-300">
            CLUE COLLECTED
          </div>
        )}

        <div className="mt-3 text-center text-[10px] text-slate-500">
          PRESS ESC TO CLOSE
        </div>

      </div>

    </div>
  );
}