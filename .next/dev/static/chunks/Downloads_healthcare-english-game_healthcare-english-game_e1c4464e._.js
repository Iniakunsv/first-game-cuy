(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const sprites = {
    down: [
        '/characters/main/front-1.png',
        '/characters/main/front-2.png'
    ],
    up: [
        '/characters/main/back-1.png',
        '/characters/main/back-2.png'
    ],
    left: [
        '/characters/main/left-1.png',
        '/characters/main/left-2.png'
    ],
    right: [
        '/characters/main/right-1.png',
        '/characters/main/right-2.png'
    ]
};
function Player({ x, y, direction, walking, frame }) {
    const currentFrame = walking ? frame : 0;
    const sprite = sprites[direction][currentFrame];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: sprite,
        alt: "Nursing student",
        draggable: false,
        className: "pointer-events-none absolute z-30 select-none object-contain",
        style: {
            left: `${x}%`,
            top: `${y}%`,
            width: '10%',
            height: 'auto',
            transform: 'translate(-50%, -75%)',
            imageRendering: 'pixelated'
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Player.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = Player;
var _c;
__turbopack_context__.k.register(_c, "Player");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Room
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Room({ roomObjects, nearId, collected, onInteract, layout }) {
    const roomImages = {
        1: '/layout1-room.png',
        2: '/layout2-room.png',
        3: '/layout3-room.png',
        4: '/layout4-room.png'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: roomImages[layout],
                alt: `Healthcare room layout ${layout}`,
                draggable: false,
                className: "absolute inset-0 h-full w-full object-cover",
                style: {
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            roomObjects.map((object)=>{
                if (!object.interactive) {
                    return null;
                }
                const isNear = nearId === object.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onInteract(object),
                    "aria-label": `Interact with ${object.name}`,
                    className: isNear ? 'absolute z-20 bg-transparent ring-2 ring-yellow-300/70' : 'absolute z-20 bg-transparent',
                    style: {
                        left: `${object.x}%`,
                        top: `${object.y}%`,
                        width: `${object.w}%`,
                        height: `${object.h}%`
                    }
                }, object.id, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Room;
var _c;
__turbopack_context__.k.register(_c, "Room");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChallengeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ChallengeModal({ challenge, index, total, choice, setChoice, onSubmit, feedback, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-[60] flex items-center justify-center bg-black/65 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel w-full max-w-xl p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-cyan-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "CHALLENGE ",
                                index,
                                " / ",
                                total
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 3,
                            columnNumber: 471
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "retro-btn px-2",
                            onClick: onClose,
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 3,
                            columnNumber: 511
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 3,
                    columnNumber: 411
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 text-lg font-black text-white",
                    children: challenge.question
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 3,
                    columnNumber: 580
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-2",
                    children: challenge.options.map((option, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setChoice(i),
                            className: `border-2 px-3 py-3 text-left text-sm ${choice === i ? 'border-yellow-300 bg-yellow-300/10' : 'border-slate-600 bg-slate-900/70'} hover:bg-slate-800`,
                            children: [
                                String.fromCharCode(65 + i),
                                ". ",
                                option
                            ]
                        }, option, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 3,
                            columnNumber: 724
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 3,
                    columnNumber: 656
                }, this),
                feedback === 'wrong' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border border-red-500/60 bg-red-950/30 p-3 text-sm text-red-200",
                    children: "Not quite. Review your clues and try again."
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 3,
                    columnNumber: 1003
                }, this),
                feedback === 'correct' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border border-green-500/60 bg-green-950/30 p-3 text-sm text-green-200",
                    children: [
                        "Correct! ",
                        challenge.explanation
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 3,
                    columnNumber: 1162
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: choice === null || feedback === 'correct',
                    onClick: onSubmit,
                    className: "retro-btn mt-4 w-full py-3 font-black",
                    children: feedback === 'correct' ? 'CORRECT' : 'SUBMIT ANSWER'
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 3,
                    columnNumber: 1293
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
            lineNumber: 3,
            columnNumber: 368
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
        lineNumber: 3,
        columnNumber: 278
    }, this);
}
_c = ChallengeModal;
var _c;
__turbopack_context__.k.register(_c, "ChallengeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/challenges.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "challenges",
    ()=>challenges
]);
const challenges = [
    /*
   * =========================================================
   * LAYOUT 1 — WHITEBOARD
   * =========================================================
   */ {
        id: 'layout1-whiteboard-1',
        layout: 1,
        question: 'A patient has difficulty breathing. Which term describes this condition?',
        options: [
            'Dyspnea',
            'Edema',
            'Nausea',
            'Fever'
        ],
        answer: 0
    },
    {
        id: 'layout1-whiteboard-2',
        layout: 1,
        question: 'The nurse needs to check the patient’s body temperature. Which instrument should be used?',
        options: [
            'Stethoscope',
            'Thermometer',
            'Syringe',
            'Bandage'
        ],
        answer: 1
    },
    {
        id: 'layout1-whiteboard-3',
        layout: 1,
        question: 'The nurse listens to the patient’s heart and lungs using a _____.',
        options: [
            'Thermometer',
            'Wheelchair',
            'Stethoscope',
            'Crutch'
        ],
        answer: 2
    },
    {
        id: 'layout1-whiteboard-4',
        layout: 1,
        question: 'A patient who feels like vomiting is experiencing _____.',
        options: [
            'Nausea',
            'Fracture',
            'Dyspnea',
            'Edema'
        ],
        answer: 0
    },
    {
        id: 'layout1-whiteboard-5',
        layout: 1,
        question: 'What is the medical term for swelling caused by fluid accumulation in the body?',
        options: [
            'Edema',
            'Nausea',
            'Fever',
            'Cough'
        ],
        answer: 0
    },
    /*
   * =========================================================
   * LAYOUT 1 — COFFEE TABLE
   * =========================================================
   */ {
        id: 'layout1-coffee-1',
        layout: 1,
        question: 'A nurse tells a patient, "Please sit down." What does "sit down" mean?',
        options: [
            'Stand up',
            'Lie down',
            'Take a seated position',
            'Walk away'
        ],
        answer: 2
    },
    {
        id: 'layout1-coffee-2',
        layout: 1,
        question: 'Which word means "a person receiving medical treatment"?',
        options: [
            'Patient',
            'Surgeon',
            'Pharmacist',
            'Visitor'
        ],
        answer: 0
    },
    {
        id: 'layout1-coffee-3',
        layout: 1,
        question: 'The nurse says, "Take a deep breath." What should the patient do?',
        options: [
            'Breathe deeply',
            'Stop breathing',
            'Drink water',
            'Close the door'
        ],
        answer: 0
    },
    {
        id: 'layout1-coffee-4',
        layout: 1,
        question: 'Which phrase is appropriate when a nurse wants to ask about a patient’s pain?',
        options: [
            'Where is your house?',
            'How are you feeling?',
            'What is your favorite food?',
            'Where is your school?'
        ],
        answer: 1
    },
    {
        id: 'layout1-coffee-5',
        layout: 1,
        question: 'A nurse says, "Please lie down on the bed." What does "lie down" mean?',
        options: [
            'Sit on a chair',
            'Stand beside the bed',
            'Move into a lying position',
            'Walk outside'
        ],
        answer: 2
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout1Objects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layout1Objects",
    ()=>layout1Objects
]);
const layout1Objects = [
    /*
   * =========================================================
   * BACK WALL / GLASS WINDOW
   * =========================================================
   */ {
        id: 'l1-back-wall',
        name: 'Back Wall',
        kind: 'wall',
        x: 5,
        y: 20,
        w: 90,
        h: 6,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =========================================================
   * LEFT WALL
   * =========================================================
   *
   * Door opening is left open.
   */ {
        id: 'l1-left-wall-top',
        name: 'Left Wall',
        kind: 'wall',
        x: 5,
        y: 5,
        w: 4,
        h: 63,
        solid: true,
        interactive: false,
        color: 'transparent'
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
        color: 'transparent'
    },
    /*
   * =========================================================
   * RIGHT WALL
   * =========================================================
   */ {
        id: 'l1-right-wall',
        name: 'Right Wall',
        kind: 'wall',
        x: 92,
        y: 10,
        w: 5,
        h: 87,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =========================================================
   * BOTTOM WALL
   * =========================================================
   */ {
        id: 'l1-bottom-wall',
        name: 'Bottom Wall',
        kind: 'wall',
        x: 5,
        y: 94,
        w: 87,
        h: 4,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =========================================================
   * LEFT DOOR
   * =========================================================
   *
   * Door remains open so the player can leave the room.
   */ {
        id: 'l1-door',
        name: 'Door',
        kind: 'door',
        x: 1,
        y: 68,
        w: 9,
        h: 25,
        solid: false,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =========================================================
   * SOFA
   * =========================================================
   *
   * Only the physical lower footprint is solid.
   */ {
        id: 'l1-sofa',
        name: 'Sofa',
        kind: 'sofa',
        x: 37,
        y: 37,
        w: 25,
        h: 16,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =========================================================
   * LEFT CHAIR
   * =========================================================
   *
   * Solid + fake interaction.
   * Pressing E will show fake interaction,
   * but will NOT open a challenge.
   */ {
        id: 'l1-chair-left',
        name: 'Left Chair',
        kind: 'chair',
        x: 29,
        y: 48,
        w: 10,
        h: 16,
        solid: true,
        interactive: true,
        color: 'transparent'
    },
    /*
   * =========================================================
   * RIGHT CHAIR
   * =========================================================
   *
   * Solid + fake interaction.
   */ {
        id: 'l1-chair-right',
        name: 'Right Chair',
        kind: 'chair',
        x: 61,
        y: 48,
        w: 10,
        h: 16,
        solid: true,
        interactive: true,
        color: 'transparent'
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
   */ {
        id: 'l1-coffee-table',
        name: 'Coffee Table',
        kind: 'table',
        x: 43,
        y: 52,
        w: 15,
        h: 13,
        solid: true,
        interactive: true,
        color: 'transparent'
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
   */ {
        id: 'l1-blue-board',
        name: 'Blue Board',
        kind: 'board',
        x: 87,
        y: 28,
        w: 6,
        h: 28,
        solid: true,
        interactive: true,
        color: 'transparent'
    },
    /*
   * =========================================================
   * DRAWER / SMALL CABINET
   * =========================================================
   *
   * Fake interaction.
   */ {
        id: 'l1-drawer',
        name: 'Drawer',
        kind: 'drawer',
        x: 87,
        y: 59,
        w: 6,
        h: 14,
        solid: true,
        interactive: true,
        color: 'transparent'
    },
    /*
   * =========================================================
   * PLANT
   * =========================================================
   *
   * Fake interaction.
   */ {
        id: 'l1-plant',
        name: 'Plant',
        kind: 'plant',
        x: 87,
        y: 70,
        w: 6,
        h: 10,
        solid: true,
        interactive: true,
        color: 'transparent'
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
   */ {
        id: 'l1-whiteboard-challenge',
        name: 'Whiteboard',
        kind: 'challenge',
        x: 7,
        y: 28,
        w: 8,
        h: 25,
        solid: false,
        interactive: true,
        color: 'transparent'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout2Objects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layout2Objects",
    ()=>layout2Objects
]);
const layout2Objects = [
    /*
   * =========================================================
   * TEACHER DESK
   * =========================================================
   */ {
        id: 'l2_teacher_desk',
        name: 'Teacher Desk',
        kind: 'desk',
        x: 10.5,
        y: 27,
        w: 8,
        h: 18,
        solid: true,
        interactive: true,
        color: 'transparent',
        description: 'The teacher desk.'
    },
    /*
   * =========================================================
   * TEACHER CHAIR
   * =========================================================
   */ {
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
        description: 'The teacher chair.'
    },
    /*
   * =========================================================
   * LEFT STUDENT TABLE
   * =========================================================
   */ {
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
        description: 'A student table.'
    },
    /*
   * LEFT STUDENT CHAIRS
   */ {
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
        description: 'A student chair.'
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
        description: 'A student chair.'
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
        description: 'A student chair.'
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
        description: 'A student chair.'
    },
    /*
   * =========================================================
   * CENTER STUDENT TABLE
   * =========================================================
   */ {
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
        description: 'A student table.'
    },
    /*
   * CENTER CHAIRS
   */ {
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
        description: 'A student chair.'
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
        description: 'A student chair.'
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
        description: 'A student chair.'
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
        description: 'A student chair.'
    },
    /*
   * =========================================================
   * RIGHT STUDENT TABLE
   * =========================================================
   */ {
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
        description: 'A student table.'
    },
    /*
   * RIGHT CHAIRS
   */ {
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
        description: 'A student chair.'
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
        description: 'A student chair.'
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
        description: 'A student chair.'
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
        description: 'A student chair.'
    },
    /*
   * =========================================================
   * LEFT WHITEBOARD
   * =========================================================
   */ {
        id: 'l2_whiteboard',
        name: 'Whiteboard',
        kind: 'board',
        x: 5,
        y: 10,
        w: 5,
        h: 42,
        solid: true,
        interactive: true,
        color: 'transparent',
        description: 'The classroom whiteboard.'
    },
    /*
   * =========================================================
   * BACK WALL
   * =========================================================
   *
   * Keep this narrow.
   * The game already has movement boundaries,
   * so we do not need a giant wall collision.
   */ {
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
        description: 'Classroom wall.'
    },
    /*
   * =========================================================
   * RIGHT WALL
   * =========================================================
   */ {
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
        description: 'Classroom wall.'
    },
    /*
   * =========================================================
   * LEFT WALL
   * =========================================================
   */ {
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
        description: 'Classroom wall.'
    },
    /*
   * =========================================================
   * FRONT WALL
   * =========================================================
   */ {
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
        description: 'Classroom wall.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout3Objects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layout3Objects",
    ()=>layout3Objects
]);
const layout3Objects = [
    /*
   * =====================================================
   * TOP WALL
   * =====================================================
   */ {
        id: 'l3-wall-top',
        name: 'Top Wall',
        kind: 'wall',
        x: 4,
        y: 2,
        w: 92,
        h: 5,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT WALL
   * =====================================================
   */ {
        id: 'l3-wall-left',
        name: 'Left Wall',
        kind: 'wall',
        x: 0,
        y: 4,
        w: 5,
        h: 86,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT WALL
   * =====================================================
   */ {
        id: 'l3-wall-right',
        name: 'Right Wall',
        kind: 'wall',
        x: 95,
        y: 4,
        w: 5,
        h: 86,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * BOTTOM WALL
   * =====================================================
   */ {
        id: 'l3-wall-bottom',
        name: 'Bottom Wall',
        kind: 'wall',
        x: 4,
        y: 87,
        w: 92,
        h: 6,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT COLUMN
   * =====================================================
   */ {
        id: 'l3-column-left',
        name: 'Left Column',
        kind: 'wall',
        x: 21,
        y: 5,
        w: 5,
        h: 50,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT COLUMN
   * =====================================================
   */ {
        id: 'l3-column-right',
        name: 'Right Column',
        kind: 'wall',
        x: 74,
        y: 5,
        w: 5,
        h: 50,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT STAIR RAIL
   * =====================================================
   */ {
        id: 'l3-stair-rail-left',
        name: 'Left Stair Rail',
        kind: 'wall',
        x: 34,
        y: 18,
        w: 5,
        h: 40,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT STAIR RAIL
   * =====================================================
   */ {
        id: 'l3-stair-rail-right',
        name: 'Right Stair Rail',
        kind: 'wall',
        x: 61,
        y: 18,
        w: 5,
        h: 40,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT STAIR SUPPORT
   * =====================================================
   */ {
        id: 'l3-stair-left-support',
        name: 'Left Stair Support',
        kind: 'wall',
        x: 31,
        y: 48,
        w: 7,
        h: 13,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT STAIR SUPPORT
   * =====================================================
   */ {
        id: 'l3-stair-right-support',
        name: 'Right Stair Support',
        kind: 'wall',
        x: 62,
        y: 48,
        w: 7,
        h: 13,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT SIDE STAIR PLATFORM
   * =====================================================
   */ {
        id: 'l3-stair-side-left',
        name: 'Left Stair Side',
        kind: 'wall',
        x: 25,
        y: 35,
        w: 9,
        h: 25,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT SIDE STAIR PLATFORM
   * =====================================================
   */ {
        id: 'l3-stair-side-right',
        name: 'Right Stair Side',
        kind: 'wall',
        x: 66,
        y: 35,
        w: 9,
        h: 25,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * DOOR
   *
   * PASSABLE
   * =====================================================
   */ {
        id: 'l3-door-left',
        name: 'Door',
        kind: 'door',
        x: 4,
        y: 57,
        w: 8,
        h: 20,
        solid: false,
        interactive: true,
        color: 'transparent'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout4Objects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layout4Objects",
    ()=>layout4Objects
]);
const layout4Objects = [
    /*
   * =====================================================
   * ROOM EDGES
   * =====================================================
   */ // TOP
    {
        id: 'l4-top-edge',
        name: 'Top Edge',
        kind: 'wall',
        x: 0,
        y: 0,
        w: 100,
        h: 5,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    // LEFT
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
        color: 'transparent'
    },
    // RIGHT
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
        color: 'transparent'
    },
    // BOTTOM
    {
        id: 'l4-bottom-edge',
        name: 'Bottom Edge',
        kind: 'wall',
        x: 0,
        y: 95,
        w: 100,
        h: 5,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * ROOFTOP BUILDING
   * =====================================================
   *
   * Area bangunan di bagian atas.
   */ {
        id: 'l4-building-left',
        name: 'Building Left',
        kind: 'wall',
        x: 5,
        y: 10,
        w: 8,
        h: 30,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    {
        id: 'l4-building-right',
        name: 'Building Right',
        kind: 'wall',
        x: 27,
        y: 10,
        w: 8,
        h: 30,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT BENCH
   * =====================================================
   */ {
        id: 'l4-bench-left',
        name: 'Left Bench',
        kind: 'object',
        x: 9,
        y: 43,
        w: 8,
        h: 4,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT BENCH
   * =====================================================
   */ {
        id: 'l4-bench-right',
        name: 'Right Bench',
        kind: 'object',
        x: 84,
        y: 42,
        w: 8,
        h: 4,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * LEFT PLANT
   * =====================================================
   */ {
        id: 'l4-plant-left',
        name: 'Left Plant',
        kind: 'plant',
        x: 7,
        y: 57,
        w: 6,
        h: 9,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * RIGHT PLANT
   * =====================================================
   */ {
        id: 'l4-plant-right',
        name: 'Right Plant',
        kind: 'plant',
        x: 87,
        y: 50,
        w: 60,
        h: 15,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * TOP TRAIL
   * =====================================================
   *
   * Jalur/batas bagian atas rooftop.
   */ {
        id: 'l4-top-trail',
        name: 'Top Trail',
        kind: 'wall',
        x: 35,
        y: 25,
        w: 60,
        h: 3,
        solid: true,
        interactive: false,
        color: 'transparent'
    },
    /*
   * =====================================================
   * BOTTOM TRAIL
   * =====================================================
   *
   * Jalur/batas bagian bawah rooftop.
   */ {
        id: 'l4-bottom-trail',
        name: 'Bottom Trail',
        kind: 'wall',
        x: 5,
        y: 72,
        w: 120,
        h: 30,
        solid: true,
        interactive: false,
        color: 'transparent'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Player.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ChallengeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/challenges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout1Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout1Objects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout2Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout2Objects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout3Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout3Objects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout4Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout4Objects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const SPEED = 0.25;
function Game() {
    _s();
    /*
   * =========================================================
   * GAME STATE
   * =========================================================
   */ const [layout, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 75
    });
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('down');
    const [walking, setWalking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [keys, setKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [challenge, setChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /*
   * =========================================================
   * FAKE INTERACTION
   * =========================================================
   */ const [fakeMessage, setFakeMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transitioning, setTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /*
   * =========================================================
   * ACTIVE CHALLENGES
   * =========================================================
   */ const activeChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[activeChallenges]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["challenges"].filter({
                "Game.useMemo[activeChallenges]": (challengeItem)=>challengeItem.layout === layout
            }["Game.useMemo[activeChallenges]"])
    }["Game.useMemo[activeChallenges]"], [
        layout
    ]);
    /*
   * =========================================================
   * CURRENT CHALLENGE
   * =========================================================
   */ const currentChallenge = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["challenges"].find((challengeItem)=>challengeItem.id === challenge) ?? null;
    /*
   * =========================================================
   * CURRENT LAYOUT PROGRESS
   * =========================================================
   */ const solvedInCurrentLayout = activeChallenges.filter((challengeItem)=>solved.includes(challengeItem.id)).length;
    /*
   * =========================================================
   * CURRENT LAYOUT COMPLETED
   * =========================================================
   */ const currentLayoutCompleted = activeChallenges.length > 0 && activeChallenges.every((challengeItem)=>solved.includes(challengeItem.id));
    /*
   * =========================================================
   * ROOM OBJECTS
   * =========================================================
   */ const visibleObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[visibleObjects]": ()=>{
            if (layout === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout1Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout1Objects"];
            }
            if (layout === 2) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout2Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout2Objects"];
            }
            if (layout === 3) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout3Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout3Objects"];
            }
            if (layout === 4) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout4Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout4Objects"].map({
                    "Game.useMemo[visibleObjects]": (object)=>({
                            ...object
                        })
                }["Game.useMemo[visibleObjects]"]);
            }
            return [];
        }
    }["Game.useMemo[visibleObjects]"], [
        layout
    ]);
    /*
   * =========================================================
   * NEAREST INTERACTIVE OBJECT
   * =========================================================
   *
   * All objects with interactive: true can be
   * interacted with.
   *
   * Only Whiteboard and Coffee Table open
   * real challenges.
   *
   * Other interactive objects are fake interactions.
   * =========================================================
   */ const nearObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[nearObj]": ()=>{
            let nearest = null;
            let bestDistance = 8;
            for (const object of visibleObjects){
                if (!object.interactive) {
                    continue;
                }
                const centerX = object.x + object.w / 2;
                const centerY = object.y + object.h / 2;
                const distance = Math.hypot(pos.x - centerX, pos.y - centerY);
                if (distance < bestDistance) {
                    bestDistance = distance;
                    nearest = object;
                }
            }
            return nearest;
        }
    }["Game.useMemo[nearObj]"], [
        pos,
        visibleObjects
    ]);
    /*
   * =========================================================
   * NEAREST OBJECT ID
   * =========================================================
   */ const nearId = nearObj?.id ?? null;
    /*
   * =========================================================
   * GET OBJECT TYPE
   * =========================================================
   */ const getInteractionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[getInteractionType]": (object)=>{
            if (!object) {
                return null;
            }
            const objectText = `${object.id} ${object.name}`.toLowerCase().replace(/[\s_-]/g, '');
            /*
         * WHITEBOARD
         */ if (objectText.includes('whiteboard')) {
                return 'whiteboard';
            }
            /*
         * COFFEE TABLE
         */ if (objectText.includes('coffeetable') || objectText.includes('coffee')) {
                return 'coffee';
            }
            return null;
        }
    }["Game.useCallback[getInteractionType]"], []);
    /*
   * =========================================================
   * OPEN CHALLENGE
   * =========================================================
   *
   * Whiteboard:
   * layout1-whiteboard-1 ... 5
   *
   * Coffee Table:
   * layout1-coffee-1 ... 5
   *
   * Fake interaction objects NEVER reach this
   * function from the E-key handler.
   * =========================================================
   */ const openNextChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[openNextChallenge]": ()=>{
            if (!nearObj) {
                return;
            }
            const interactionType = getInteractionType(nearObj);
            /*
       * =====================================================
       * LAYOUT 1 WHITEBOARD
       * =====================================================
       */ if (layout === 1 && interactionType === 'whiteboard') {
                const next = activeChallenges.find({
                    "Game.useCallback[openNextChallenge].next": (challengeItem)=>challengeItem.id.startsWith('layout1-whiteboard-') && !solved.includes(challengeItem.id)
                }["Game.useCallback[openNextChallenge].next"]);
                if (!next) {
                    return;
                }
                setFakeMessage(null);
                setChallenge(next.id);
                setChoice(null);
                setFeedback(null);
                return;
            }
            /*
       * =====================================================
       * LAYOUT 1 COFFEE TABLE
       * =====================================================
       */ if (layout === 1 && interactionType === 'coffee') {
                const next = activeChallenges.find({
                    "Game.useCallback[openNextChallenge].next": (challengeItem)=>challengeItem.id.startsWith('layout1-coffee-') && !solved.includes(challengeItem.id)
                }["Game.useCallback[openNextChallenge].next"]);
                if (!next) {
                    return;
                }
                setFakeMessage(null);
                setChallenge(next.id);
                setChoice(null);
                setFeedback(null);
                return;
            }
            /*
       * =====================================================
       * OTHER LAYOUTS
       * =====================================================
       *
       * Keep the original behavior.
       */ const next = activeChallenges.find({
                "Game.useCallback[openNextChallenge].next": (challengeItem)=>!solved.includes(challengeItem.id)
            }["Game.useCallback[openNextChallenge].next"]);
            if (!next) {
                return;
            }
            setFakeMessage(null);
            setChallenge(next.id);
            setChoice(null);
            setFeedback(null);
        }
    }["Game.useCallback[openNextChallenge]"], [
        nearObj,
        layout,
        activeChallenges,
        solved,
        getInteractionType
    ]);
    /*
   * =========================================================
   * MOVEMENT + COLLISION
   * =========================================================
   */ const tryMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[tryMove]": (dx, dy)=>{
            setPos({
                "Game.useCallback[tryMove]": (current)=>{
                    const playerW = 2;
                    const playerH = 3;
                    const collides = {
                        "Game.useCallback[tryMove].collides": (x, y)=>{
                            for (const object of visibleObjects){
                                if (!object.solid) {
                                    continue;
                                }
                                const collision = x + playerW / 2 > object.x && x - playerW / 2 < object.x + object.w && y + playerH / 2 > object.y && y - playerH / 2 < object.y + object.h;
                                if (collision) {
                                    return true;
                                }
                            }
                            return false;
                        }
                    }["Game.useCallback[tryMove].collides"];
                    /*
             * HORIZONTAL
             */ const nx = Math.max(6, Math.min(94, current.x + dx));
                    const xAllowed = !collides(nx, current.y);
                    const finalX = xAllowed ? nx : current.x;
                    /*
             * VERTICAL
             */ const ny = Math.max(12, Math.min(89, current.y + dy));
                    const yAllowed = !collides(finalX, ny);
                    const finalY = yAllowed ? ny : current.y;
                    return {
                        x: finalX,
                        y: finalY
                    };
                }
            }["Game.useCallback[tryMove]"]);
        }
    }["Game.useCallback[tryMove]"], [
        visibleObjects
    ]);
    /*
   * =========================================================
   * FAKE INTERACTION MESSAGES
   * =========================================================
   */ const getFakeInteractionMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[getFakeInteractionMessage]": (objectId)=>{
            switch(objectId){
                case 'l1-tv':
                    return 'The television is turned off.';
                case 'l1-drawer':
                    return 'The drawer is empty.';
                case 'l1-chair-left':
                    return 'It is a comfortable chair.';
                case 'l1-chair-right':
                    return 'It is a comfortable chair.';
                case 'l1-plant':
                    return 'The plant looks healthy.';
                case 'l1-blue-board':
                    return 'There is nothing useful here yet.';
                default:
                    return 'There is nothing interesting here.';
            }
        }
    }["Game.useCallback[getFakeInteractionMessage]"], []);
    /*
   * =========================================================
   * KEYBOARD INPUT
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            const down = {
                "Game.useEffect.down": (event)=>{
                    const key = event.key.toLowerCase();
                    /*
         * PREVENT PAGE SCROLL
         */ if (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright' || key === ' ') {
                        event.preventDefault();
                    }
                    /*
         * SAVE KEY
         */ setKeys({
                        "Game.useEffect.down": (value)=>({
                                ...value,
                                [key]: true
                            })
                    }["Game.useEffect.down"]);
                    /*
         * ESCAPE
         */ if (key === 'escape') {
                        event.preventDefault();
                        if (challenge) {
                            setChallenge(null);
                            setChoice(null);
                            setFeedback(null);
                        }
                        /*
           * Also close fake interaction.
           */ setFakeMessage(null);
                        return;
                    }
                    /*
         * =====================================================
         * E — INTERACTION
         * =====================================================
         *
         * IMPORTANT:
         *
         * openNextChallenge() is ONLY called for:
         *
         * - Whiteboard
         * - Coffee Table
         *
         * Fake objects NEVER call it.
         * =====================================================
         */ if (key === 'e' && nearObj && !challenge && !transitioning) {
                        event.preventDefault();
                        /*
           * Clear previous fake message.
           */ setFakeMessage(null);
                        /*
           * ===================================================
           * REAL CHALLENGE OBJECTS
           * ===================================================
           */ if (nearObj.id === 'l1-whiteboard-challenge' || nearObj.id === 'l1-table-challenge') {
                            openNextChallenge();
                            return;
                        }
                        /*
           * ===================================================
           * FAKE INTERACTION OBJECTS
           * ===================================================
           *
           * These objects DO NOT open questions.
           */ if (nearObj.id === 'l1-tv' || nearObj.id === 'l1-drawer' || nearObj.id === 'l1-chair-left' || nearObj.id === 'l1-chair-right' || nearObj.id === 'l1-plant' || nearObj.id === 'l1-blue-board') {
                            setFakeMessage(getFakeInteractionMessage(nearObj.id));
                            return;
                        }
                        /*
           * ===================================================
           * FALLBACK FAKE INTERACTION
           * ===================================================
           */ setFakeMessage('There is nothing interesting here.');
                        return;
                    }
                }
            }["Game.useEffect.down"];
            const up = {
                "Game.useEffect.up": (event)=>{
                    const key = event.key.toLowerCase();
                    setKeys({
                        "Game.useEffect.up": (value)=>({
                                ...value,
                                [key]: false
                            })
                    }["Game.useEffect.up"]);
                }
            }["Game.useEffect.up"];
            window.addEventListener('keydown', down);
            window.addEventListener('keyup', up);
            const blur = {
                "Game.useEffect.blur": ()=>{
                    setKeys({});
                }
            }["Game.useEffect.blur"];
            window.addEventListener('blur', blur);
            return ({
                "Game.useEffect": ()=>{
                    window.removeEventListener('keydown', down);
                    window.removeEventListener('keyup', up);
                    window.removeEventListener('blur', blur);
                }
            })["Game.useEffect"];
        }
    }["Game.useEffect"], [
        challenge,
        nearObj,
        transitioning,
        openNextChallenge,
        getFakeInteractionMessage
    ]);
    /*
   * =========================================================
   * MOVEMENT LOOP
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            let animationFrame = 0;
            const updateMovement = {
                "Game.useEffect.updateMovement": ()=>{
                    let dx = 0;
                    let dy = 0;
                    if (keys.w || keys.arrowup) {
                        dy -= SPEED;
                    }
                    if (keys.s || keys.arrowdown) {
                        dy += SPEED;
                    }
                    if (keys.a || keys.arrowleft) {
                        dx -= SPEED;
                    }
                    if (keys.d || keys.arrowright) {
                        dx += SPEED;
                    }
                    const isMoving = dx !== 0 || dy !== 0;
                    setWalking(isMoving);
                    /*
         * DIRECTION
         */ if (dx < 0) {
                        setDirection('left');
                    } else if (dx > 0) {
                        setDirection('right');
                    } else if (dy < 0) {
                        setDirection('up');
                    } else if (dy > 0) {
                        setDirection('down');
                    }
                    /*
         * MOVE
         */ if (isMoving && !challenge && !transitioning) {
                        tryMove(dx, dy);
                    }
                    animationFrame = requestAnimationFrame(updateMovement);
                }
            }["Game.useEffect.updateMovement"];
            animationFrame = requestAnimationFrame(updateMovement);
            return ({
                "Game.useEffect": ()=>{
                    cancelAnimationFrame(animationFrame);
                }
            })["Game.useEffect"];
        }
    }["Game.useEffect"], [
        keys,
        tryMove,
        challenge,
        transitioning
    ]);
    /*
   * =========================================================
   * WALKING ANIMATION
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (!walking) {
                setFrame(0);
                return;
            }
            const timer = window.setInterval({
                "Game.useEffect.timer": ()=>{
                    setFrame({
                        "Game.useEffect.timer": (current)=>current === 0 ? 1 : 0
                    }["Game.useEffect.timer"]);
                }
            }["Game.useEffect.timer"], 150);
            return ({
                "Game.useEffect": ()=>{
                    window.clearInterval(timer);
                }
            })["Game.useEffect"];
        }
    }["Game.useEffect"], [
        walking
    ]);
    /*
   * =========================================================
   * ROOM TRANSITIONS
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (transitioning) {
                return;
            }
            /*
     * LAYOUT 1 → 2
     */ if (layout === 1 && currentLayoutCompleted && pos.x < 12 && pos.y > 82) {
                setTransitioning(true);
                window.setTimeout({
                    "Game.useEffect": ()=>{
                        setLayout(2);
                        setPos({
                            x: 50,
                            y: 75
                        });
                        setDirection('up');
                        setChallenge(null);
                        setChoice(null);
                        setFeedback(null);
                        setFakeMessage(null);
                        setKeys({});
                        setWalking(false);
                        setFrame(0);
                        setTransitioning(false);
                    }
                }["Game.useEffect"], 700);
                return;
            }
            /*
     * LAYOUT 2 → 3
     */ if (layout === 2 && currentLayoutCompleted && pos.x < 12 && pos.y > 82) {
                setTransitioning(true);
                window.setTimeout({
                    "Game.useEffect": ()=>{
                        setLayout(3);
                        setPos({
                            x: 50,
                            y: 82
                        });
                        setDirection('up');
                        setChallenge(null);
                        setChoice(null);
                        setFeedback(null);
                        setFakeMessage(null);
                        setKeys({});
                        setWalking(false);
                        setFrame(0);
                        setTransitioning(false);
                    }
                }["Game.useEffect"], 700);
                return;
            }
            /*
     * LAYOUT 3 → 4
     */ if (layout === 3 && currentLayoutCompleted && pos.x > 42 && pos.x < 58 && pos.y < 18) {
                setTransitioning(true);
                window.setTimeout({
                    "Game.useEffect": ()=>{
                        setLayout(4);
                        setPos({
                            x: 19,
                            y: 40
                        });
                        setDirection('down');
                        setChallenge(null);
                        setChoice(null);
                        setFeedback(null);
                        setFakeMessage(null);
                        setKeys({});
                        setWalking(false);
                        setFrame(0);
                        setTransitioning(false);
                    }
                }["Game.useEffect"], 700);
                return;
            }
            /*
     * LAYOUT 4 → 3
     */ if (layout === 4 && currentLayoutCompleted && pos.x >= 12 && pos.x <= 29 && pos.y >= 29 && pos.y <= 32) {
                setTransitioning(true);
                window.setTimeout({
                    "Game.useEffect": ()=>{
                        setLayout(3);
                        setPos({
                            x: 50,
                            y: 20
                        });
                        setDirection('down');
                        setChallenge(null);
                        setChoice(null);
                        setFeedback(null);
                        setFakeMessage(null);
                        setKeys({});
                        setWalking(false);
                        setFrame(0);
                        setTransitioning(false);
                    }
                }["Game.useEffect"], 700);
                return;
            }
        }
    }["Game.useEffect"], [
        pos.x,
        pos.y,
        layout,
        transitioning,
        currentLayoutCompleted
    ]);
    /*
   * =========================================================
   * FINISH GAME
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (layout === 4 && currentLayoutCompleted) {
                setFinished(true);
            }
        }
    }["Game.useEffect"], [
        layout,
        currentLayoutCompleted
    ]);
    /*
   * =========================================================
   * SUBMIT CHALLENGE
   * =========================================================
   *
   * CORRECT:
   * 1. Mark current question as solved.
   * 2. Show correct feedback.
   * 3. Automatically open next question.
   *
   * WRONG:
   * Keep current question open.
   * =========================================================
   */ const submit = ()=>{
        if (!currentChallenge || choice === null) {
            return;
        }
        /*
     * =======================================================
     * CORRECT ANSWER
     * =======================================================
     */ if (choice === currentChallenge.answer) {
            /*
       * Show correct feedback.
       */ setFeedback('correct');
            /*
       * Mark this question as solved.
       */ if (!solved.includes(currentChallenge.id)) {
                setSolved((value)=>[
                        ...value,
                        currentChallenge.id
                    ]);
            }
            /*
       * Automatically open next question.
       */ window.setTimeout(()=>{
                let nextQuestion = null;
                /*
         * ===================================================
         * WHITEBOARD QUESTIONS
         * ===================================================
         */ if (currentChallenge.id.startsWith('layout1-whiteboard-')) {
                    nextQuestion = activeChallenges.find((challengeItem)=>challengeItem.id.startsWith('layout1-whiteboard-') && challengeItem.id !== currentChallenge.id && !solved.includes(challengeItem.id)) ?? null;
                } else if (currentChallenge.id.startsWith('layout1-coffee-')) {
                    nextQuestion = activeChallenges.find((challengeItem)=>challengeItem.id.startsWith('layout1-coffee-') && challengeItem.id !== currentChallenge.id && !solved.includes(challengeItem.id)) ?? null;
                } else {
                    nextQuestion = activeChallenges.find((challengeItem)=>!solved.includes(challengeItem.id) && challengeItem.id !== currentChallenge.id) ?? null;
                }
                /*
         * ===================================================
         * NEXT QUESTION EXISTS
         * ===================================================
         */ if (nextQuestion) {
                    setChallenge(nextQuestion.id);
                    setChoice(null);
                    setFeedback(null);
                    return;
                }
                /*
         * ===================================================
         * NO MORE QUESTIONS
         * ===================================================
         */ setChallenge(null);
                setChoice(null);
                setFeedback(null);
            }, 700);
            return;
        }
        /*
     * =======================================================
     * WRONG ANSWER
     * =======================================================
     */ setFeedback('wrong');
    };
    /*
   * =========================================================
   * FINISHED SCREEN
   * =========================================================
   */ if (finished) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "game-shell fixed inset-0 z-50 flex min-h-screen items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel max-w-2xl p-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-black text-yellow-200",
                        children: "CONGRATULATIONS!"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1544,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 text-xl font-black text-cyan-200",
                        children: "YOU HAVE COMPLETED THE HEALTHCARE ENGLISH CHALLENGE."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1551,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-sm text-slate-400",
                        children: "You explored all four layouts and completed all healthcare English challenges."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1558,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "retro-btn mt-7 px-5 py-3",
                        onClick: ()=>location.reload(),
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1567,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 1542,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 1540,
            columnNumber: 7
        }, this);
    }
    /*
   * =========================================================
   * MAIN GAME
   * =========================================================
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "game-shell fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] h-[100vh] max-h-screen w-auto max-w-screen overflow-hidden border-4 border-[#20272e] bg-[#59606a] shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        roomObjects: visibleObjects,
                        nearId: nearId,
                        collected: new Set(),
                        onInteract: (object)=>{
                            if (object.interactive && !challenge && !transitioning) {
                                /*
                   * =================================================
                   * REAL CHALLENGE OBJECT
                   * =================================================
                   */ if (object.id === 'l1-whiteboard-challenge' || object.id === 'l1-table-challenge') {
                                    openNextChallenge();
                                    return;
                                }
                                /*
                   * =================================================
                   * FAKE INTERACTION OBJECT
                   * =================================================
                   */ setFakeMessage(getFakeInteractionMessage(object.id));
                            }
                        },
                        layout: layout
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1606,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        x: pos.x,
                        y: pos.y,
                        direction: direction,
                        walking: walking,
                        frame: frame
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1676,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-3 top-3 z-40 border-2 border-[#20272e] bg-black/75 px-3 py-2 text-[10px] font-black text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "LAYOUT ",
                                    layout
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1691,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-cyan-200",
                                children: [
                                    "CHALLENGES:",
                                    ' ',
                                    solvedInCurrentLayout,
                                    "/",
                                    activeChallenges.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1696,
                                columnNumber: 13
                            }, this),
                            !currentLayoutCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-yellow-200",
                                children: "COMPLETE ALL CHALLENGES"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1707,
                                columnNumber: 15
                            }, this),
                            currentLayoutCompleted && layout < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-green-300",
                                children: "EXIT UNLOCKED"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1719,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1689,
                        columnNumber: 11
                    }, this),
                    nearObj && !challenge && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 z-50 -translate-x-1/2 border-2 border-yellow-300 bg-black/85 px-5 py-3 text-center text-xs font-black text-yellow-100",
                        children: [
                            "[E] INTERACT —",
                            ' ',
                            nearObj.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1738,
                        columnNumber: 15
                    }, this),
                    fakeMessage && !challenge && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-1/2 z-[60] -translate-x-1/2 border-2 border-cyan-300 bg-black/90 px-5 py-3 text-center text-xs font-black text-cyan-100",
                        onClick: ()=>setFakeMessage(null),
                        children: [
                            fakeMessage,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-[8px] text-slate-400",
                                children: "PRESS E TO INTERACT AGAIN"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1765,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1756,
                        columnNumber: 15
                    }, this),
                    (layout === 1 && pos.x < 12 && pos.y > 82 && !currentLayoutCompleted || layout === 2 && pos.x < 12 && pos.y > 82 && !currentLayoutCompleted || layout === 3 && pos.x > 42 && pos.x < 58 && pos.y < 18 && !currentLayoutCompleted || layout === 4 && pos.x >= 12 && pos.x <= 29 && pos.y >= 29 && pos.y <= 32 && !currentLayoutCompleted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 z-50 -translate-x-1/2 border-2 border-red-400 bg-black/85 px-5 py-3 text-center text-xs font-black text-red-200",
                        children: [
                            "🔒 EXIT LOCKED",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-[9px] text-white",
                                children: "COMPLETE ALL CHALLENGES FIRST"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1810,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1806,
                        columnNumber: 13
                    }, this),
                    transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[100] flex items-center justify-center bg-black/70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-black text-yellow-200",
                                    children: "ENTERING NEXT ROOM..."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 1831,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-slate-300",
                                    children: layout < 4 ? `LAYOUT ${layout + 1}` : 'RETURNING'
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 1838,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1829,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1827,
                        columnNumber: 13
                    }, this),
                    challenge && currentChallenge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ChallengeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        challenge: currentChallenge,
                        index: activeChallenges.findIndex((challengeItem)=>challengeItem.id === currentChallenge.id) + 1,
                        total: activeChallenges.length,
                        choice: choice,
                        setChoice: setChoice,
                        onSubmit: submit,
                        feedback: feedback,
                        onClose: ()=>{
                            setChallenge(null);
                            setChoice(null);
                            setFeedback(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1860,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 1599,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 1597,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
        lineNumber: 1595,
        columnNumber: 5
    }, this);
}
_s(Game, "ZE6yCvfaIdFk/zZibvKKm2geC6Q=");
_c = Game;
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Downloads_healthcare-english-game_healthcare-english-game_e1c4464e._.js.map