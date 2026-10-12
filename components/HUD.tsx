'use client';

interface HUDProps {
  lives: number;
}

export default function HUD({
  lives,
}: HUDProps) {

  return (

    <div className="absolute right-3 top-3 z-30 pointer-events-none">

      <div className="panel px-3 py-2">

        <div className="flex gap-1 text-xl leading-none">

          {Array.from(
            { length: 3 }
          ).map(
            (_, index) => (

              <span
                key={`life-${index}`}
                className={
                  index < lives
                    ? 'text-red-400'
                    : 'text-slate-700'
                }
              >
                ♥
              </span>

            )
          )}

        </div>

      </div>

    </div>

  );

}