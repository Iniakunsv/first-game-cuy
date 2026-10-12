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
function ChallengeModal({ challenge, index, total, choice, setChoice, shortAnswer, setShortAnswer, onSubmit, onContinue, feedback, onClose }) {
    const isShortAnswer = challenge.type === 'short-answer';
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
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "retro-btn px-2",
                            onClick: onClose,
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 text-lg font-black text-white",
                    children: challenge.question
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                isShortAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 text-xs font-black text-yellow-200",
                            children: "ENTER THE KEYWORD"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: shortAnswer,
                            onChange: (event)=>setShortAnswer(event.target.value),
                            onKeyDown: (event)=>{
                                if (event.key === 'Enter' && feedback !== 'correct') {
                                    onSubmit();
                                }
                            },
                            disabled: feedback === 'correct',
                            autoFocus: true,
                            placeholder: "Type your answer...",
                            className: "w-full border-2 border-cyan-300 bg-black/70 px-4 py-4 text-center text-lg font-black uppercase tracking-widest text-white outline-none placeholder:text-slate-500 focus:border-yellow-300"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this),
                !isShortAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-2",
                    children: (challenge.options ?? []).map((option, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setChoice(i),
                            className: `
                    border-2 px-3 py-3 text-left text-sm
                    ${choice === i ? 'border-yellow-300 bg-yellow-300/10' : 'border-slate-600 bg-slate-900/70'}
                    hover:bg-slate-800
                  `,
                            children: [
                                String.fromCharCode(65 + i),
                                ". ",
                                option
                            ]
                        }, option, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 134,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this),
                feedback === 'wrong' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border border-red-500/60 bg-red-950/30 p-3 text-sm text-red-200",
                    children: "Not quite. Review your clues and try again."
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                feedback === 'correct' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border border-green-500/60 bg-green-950/30 p-3 text-sm text-green-200",
                    children: [
                        "Correct!",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: challenge.explanation
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this),
                feedback === 'correct' && isShortAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onContinue,
                    className: "retro-btn mt-4 w-full py-3 font-black",
                    children: "GO TO QUESTIONS →"
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: feedback === 'correct' || (isShortAnswer ? shortAnswer.trim() === '' : choice === null),
                    onClick: onSubmit,
                    className: "retro-btn mt-4 w-full py-3 font-black disabled:cursor-not-allowed disabled:opacity-50",
                    children: feedback === 'correct' ? 'CORRECT' : 'SUBMIT ANSWER'
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
        lineNumber: 43,
        columnNumber: 5
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
        id: 'layout1-whiteboard-unlock',
        layout: 1,
        clueIds: [
            'layout1-clue-left-chair',
            'layout1-clue-right-chair',
            'layout1-clue-plant',
            'layout1-clue-blue-board'
        ],
        question: 'You have collected four letters. Rearrange them to find the keyword that unlocks the Whiteboard.',
        answer: 'CARE',
        explanation: 'The keyword is CARE. It describes the attention and concern given to a patient.',
        type: 'short-answer'
    },
    {
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
   * LAYOUT 1 — DRAWER
   * =========================================================
   */ {
        id: 'layout1-drawer-1',
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
        id: 'layout1-drawer-2',
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
        id: 'layout1-drawer-3',
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
        id: 'layout1-drawer-4',
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
        id: 'layout1-drawer-5',
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
        w: 7,
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
        h: 107,
        solid: true,
        interactive: true,
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
        x: 35,
        y: 32,
        w: 28,
        h: 10,
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
        clueId: 'layout1-clue-left-chair',
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
        clueId: 'layout1-clue-right-chair',
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
        clueId: 'layout1-clue-blue-board',
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
        clueId: 'layout1-clue-plant',
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
    const [collectedClues, setCollectedClues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeClue, setActiveClue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [challenge, setChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shortAnswer, setShortAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /*
   * Fake interaction popup
   */ const [fakeMessage, setFakeMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transitioning, setTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /*
   * =========================================================
   * ACTIVE CHALLENGES
   * =========================================================
   */ const activeChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[activeChallenges]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["challenges"].filter({
                "Game.useMemo[activeChallenges]": (challengeItem)=>challengeItem.layout === layout
            }["Game.useMemo[activeChallenges]"]);
        }
    }["Game.useMemo[activeChallenges]"], [
        layout
    ]);
    /*
   * =========================================================
   * CURRENT CHALLENGE
   * =========================================================
   */ const currentChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[currentChallenge]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["challenges"].find({
                "Game.useMemo[currentChallenge]": (challengeItem)=>challengeItem.id === challenge
            }["Game.useMemo[currentChallenge]"]) ?? null;
        }
    }["Game.useMemo[currentChallenge]"], [
        challenge
    ]);
    /*
   * =========================================================
   * CURRENT LAYOUT PROGRESS
   * =========================================================
   */ const solvedInCurrentLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[solvedInCurrentLayout]": ()=>{
            return activeChallenges.filter({
                "Game.useMemo[solvedInCurrentLayout]": (challengeItem)=>solved.includes(challengeItem.id)
            }["Game.useMemo[solvedInCurrentLayout]"]).length;
        }
    }["Game.useMemo[solvedInCurrentLayout]"], [
        activeChallenges,
        solved
    ]);
    /*
   * =========================================================
   * CURRENT LAYOUT COMPLETED
   * =========================================================
   */ const currentLayoutCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[currentLayoutCompleted]": ()=>{
            return activeChallenges.length > 0 && activeChallenges.every({
                "Game.useMemo[currentLayoutCompleted]": (challengeItem)=>solved.includes(challengeItem.id)
            }["Game.useMemo[currentLayoutCompleted]"]);
        }
    }["Game.useMemo[currentLayoutCompleted]"], [
        activeChallenges,
        solved
    ]);
    /*
 * =========================================================
 * LAYOUT 1 — WHITEBOARD PROGRESS
 * =========================================================
 */ const whiteboardChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[whiteboardChallenges]": ()=>{
            return activeChallenges.filter({
                "Game.useMemo[whiteboardChallenges]": (challengeItem)=>challengeItem.id.startsWith('layout1-whiteboard-')
            }["Game.useMemo[whiteboardChallenges]"]);
        }
    }["Game.useMemo[whiteboardChallenges]"], [
        activeChallenges
    ]);
    const solvedWhiteboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[solvedWhiteboard]": ()=>{
            return whiteboardChallenges.filter({
                "Game.useMemo[solvedWhiteboard]": (challengeItem)=>solved.includes(challengeItem.id)
            }["Game.useMemo[solvedWhiteboard]"]).length;
        }
    }["Game.useMemo[solvedWhiteboard]"], [
        whiteboardChallenges,
        solved
    ]);
    const whiteboardCompleted = whiteboardChallenges.length > 0 && solvedWhiteboard === whiteboardChallenges.length;
    /*
 * =========================================================
 * LAYOUT 1 — DRAWER PROGRESS
 * =========================================================
 */ const drawerChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[drawerChallenges]": ()=>{
            return activeChallenges.filter({
                "Game.useMemo[drawerChallenges]": (challengeItem)=>challengeItem.id.startsWith('layout1-drawer-')
            }["Game.useMemo[drawerChallenges]"]);
        }
    }["Game.useMemo[drawerChallenges]"], [
        activeChallenges
    ]);
    const solvedDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[solvedDrawer]": ()=>{
            return drawerChallenges.filter({
                "Game.useMemo[solvedDrawer]": (challengeItem)=>solved.includes(challengeItem.id)
            }["Game.useMemo[solvedDrawer]"]).length;
        }
    }["Game.useMemo[solvedDrawer]"], [
        drawerChallenges,
        solved
    ]);
    const drawerCompleted = drawerChallenges.length > 0 && solvedDrawer === drawerChallenges.length;
    /*
 * =========================================================
 * DRAWER UNLOCK STATUS
 * =========================================================
 *
 * Drawer can ONLY be used after all
 * Whiteboard questions are completed.
 */ const drawerUnlocked = layout !== 1 || whiteboardCompleted;
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout4Objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout4Objects"];
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
        pos.x,
        pos.y,
        visibleObjects
    ]);
    /*
   * =========================================================
   * GET INTERACTION TYPE
   * =========================================================
   */ const getInteractionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[getInteractionType]": (object)=>{
            if (!object) {
                return null;
            }
            const objectId = String(object.id ?? '').toLowerCase();
            const objectName = String(object.name ?? '').toLowerCase();
            /*
       * ============================================
       * WHITEBOARD
       * ============================================
       */ if (objectId.includes('whiteboard') || objectName.includes('whiteboard')) {
                return 'whiteboard';
            }
            /*
       * ============================================
       * DRAWER
       * ============================================
       *
       * We check both ID and NAME.
       * This makes the drawer detection more reliable.
       */ if (objectId.includes('drawer') || objectName.includes('drawer')) {
                return 'drawer';
            }
            return null;
        }
    }["Game.useCallback[getInteractionType]"], []);
    /*
   * =========================================================
   * FAKE INTERACTION MESSAGE
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
   * OPEN REAL CHALLENGE
   * =========================================================
   */ /*
 * =========================================================
 * OPEN NEXT CHALLENGE
 * =========================================================
 */ const openNextChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[openNextChallenge]": (targetObject)=>{
            /*
       * Use the object passed by Room.
       * If there is no object passed, use the nearest object.
       */ const object = targetObject ?? nearObj;
            if (!object) {
                return;
            }
            const interactionType = getInteractionType(object);
            /*
       * =====================================================
       * WHITEBOARD
       * =====================================================
       */ if (layout === 1 && interactionType === 'whiteboard') {
                const nextWhiteboard = whiteboardChallenges.find({
                    "Game.useCallback[openNextChallenge].nextWhiteboard": (challengeItem)=>!solved.includes(challengeItem.id)
                }["Game.useCallback[openNextChallenge].nextWhiteboard"]);
                if (!nextWhiteboard) {
                    setFakeMessage('All 5 whiteboard challenges have been completed. The drawer is now unlocked.');
                    return;
                }
                setFakeMessage(null);
                setChallenge(nextWhiteboard.id);
                setChoice(null);
                setShortAnswer('');
                setFeedback(null);
                return;
            }
            /*
       * =====================================================
       * DRAWER
       * =====================================================
       */ if (layout === 1 && interactionType === 'drawer') {
                /*
         * WHITEBOARD MUST BE 5/5
         */ if (!whiteboardCompleted) {
                    setFakeMessage(`The drawer is locked. Complete all ${whiteboardChallenges.length} whiteboard challenges first.`);
                    return;
                }
                /*
         * Find the next drawer question.
         */ const nextDrawer = drawerChallenges.find({
                    "Game.useCallback[openNextChallenge].nextDrawer": (challengeItem)=>!solved.includes(challengeItem.id)
                }["Game.useCallback[openNextChallenge].nextDrawer"]);
                /*
         * All drawer questions completed.
         */ if (!nextDrawer) {
                    setFakeMessage('All 5 drawer challenges have already been completed.');
                    return;
                }
                /*
         * OPEN DRAWER QUESTION
         */ setFakeMessage(null);
                setChallenge(nextDrawer.id);
                setChoice(null);
                setFeedback(null);
                return;
            }
            /*
       * =====================================================
       * OTHER OBJECTS / OTHER LAYOUTS
       * =====================================================
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
        getInteractionType,
        layout,
        activeChallenges,
        solved,
        whiteboardChallenges,
        whiteboardCompleted,
        drawerChallenges
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
   * KEYBOARD INPUT
   * =========================================================
   *
   * IMPORTANT:
   * This effect has a FIXED dependency array.
   *
   * This fixes:
   *
   * "The final argument passed to useEffect changed size
   * between renders."
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            const down = {
                "Game.useEffect.down": (event)=>{
                    const key = event.key.toLowerCase();
                    /*
         * Prevent page scrolling
         */ if (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright' || key === ' ') {
                        event.preventDefault();
                    }
                    /*
         * Save pressed key
         */ setKeys({
                        "Game.useEffect.down": (value)=>({
                                ...value,
                                [key]: true
                            })
                    }["Game.useEffect.down"]);
                    /*
         * =====================================================
         * ESCAPE
         * =====================================================
         */ if (key === 'escape') {
                        event.preventDefault();
                        /*
           * Close real challenge
           */ if (challenge) {
                            setChallenge(null);
                            setChoice(null);
                            setFeedback(null);
                        }
                        /*
           * Close fake popup
           */ if (fakeMessage) {
                            setFakeMessage(null);
                        }
                        return;
                    }
                    /*
         * =====================================================
         * E — INTERACTION
         * =====================================================
         */ if (key === 'e' && nearObj && !challenge && !fakeMessage && !transitioning) {
                        event.preventDefault();
                        /*
           * ===================================================
           * REAL CHALLENGE
           * ===================================================
           */ const interactionType = getInteractionType(nearObj);
                        if (interactionType === 'whiteboard' || interactionType === 'drawer') {
                            openNextChallenge();
                            return;
                        }
                        /*
           * ===================================================
           * FAKE INTERACTION
           * ===================================================
           *
           * This DOES NOT open ChallengeModal.
           *
           * It opens our large information popup instead.
           */ setFakeMessage(getFakeInteractionMessage(nearObj.id));
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
            const blur = {
                "Game.useEffect.blur": ()=>{
                    setKeys({});
                }
            }["Game.useEffect.blur"];
            window.addEventListener('keydown', down);
            window.addEventListener('keyup', up);
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
        fakeMessage,
        nearObj,
        transitioning,
        openNextChallenge,
        getInteractionType,
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
         * Direction
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
         * Move only when no popup is open
         */ if (isMoving && !challenge && !fakeMessage && !transitioning) {
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
        fakeMessage,
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
   */ /*
 * =========================================================
 * SUBMIT CHALLENGE
 * =========================================================
 */ const continueToWhiteboardQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[continueToWhiteboardQuestions]": ()=>{
            const firstQuestion = whiteboardChallenges.find({
                "Game.useCallback[continueToWhiteboardQuestions].firstQuestion": (challengeItem)=>!solved.includes(challengeItem.id)
            }["Game.useCallback[continueToWhiteboardQuestions].firstQuestion"]);
            if (!firstQuestion) {
                return;
            }
            setChallenge(firstQuestion.id);
            setChoice(null);
            setShortAnswer('');
            setFeedback(null);
        }
    }["Game.useCallback[continueToWhiteboardQuestions]"], [
        whiteboardChallenges,
        solved
    ]);
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[submit]": ()=>{
            if (!currentChallenge) {
                return;
            }
            /*
     * =====================================================
     * SHORT ANSWER
     * =====================================================
     */ if (currentChallenge.type === 'short-answer') {
                const userAnswer = shortAnswer.trim().toLowerCase();
                const correctAnswer = currentChallenge.answer.trim().toLowerCase();
                if (userAnswer !== correctAnswer) {
                    setFeedback('wrong');
                    return;
                }
            } else {
                if (choice === null) {
                    return;
                }
                const selectedAnswer = String(choice);
                const correctAnswer = String(currentChallenge.answer);
                if (selectedAnswer !== correctAnswer) {
                    setFeedback('wrong');
                    return;
                }
            }
            /*
     * =====================================================
     * CORRECT ANSWER
     * =====================================================
     */ setFeedback('correct');
            /*
     * Mark challenge as solved
     */ setSolved({
                "Game.useCallback[submit]": (value)=>{
                    if (value.includes(currentChallenge.id)) {
                        return value;
                    }
                    return [
                        ...value,
                        currentChallenge.id
                    ];
                }
            }["Game.useCallback[submit]"]);
            /*
     * =====================================================
     * FIND NEXT QUESTION
     * =====================================================
     */ if (currentChallenge.type === 'short-answer') {
                return;
            }
            window.setTimeout({
                "Game.useCallback[submit]": ()=>{
                    const solvedAfterCurrent = solved.includes(currentChallenge.id) ? solved : [
                        ...solved,
                        currentChallenge.id
                    ];
                    /*
       * ===================================================
       * WHITEBOARD
       * ===================================================
       */ if (currentChallenge.id.startsWith('layout1-whiteboard-')) {
                        const nextWhiteboard = whiteboardChallenges.find({
                            "Game.useCallback[submit].nextWhiteboard": (challengeItem)=>!solvedAfterCurrent.includes(challengeItem.id)
                        }["Game.useCallback[submit].nextWhiteboard"]);
                        /*
         * Open next Whiteboard question
         */ if (nextWhiteboard) {
                            setChallenge(nextWhiteboard.id);
                            setChoice(null);
                            setShortAnswer('');
                            setFeedback(null);
                            return;
                        }
                        /*
         * Whiteboard completed
         */ setChallenge(null);
                        setChoice(null);
                        setShortAnswer('');
                        setFeedback(null);
                        setFakeMessage('WHITEBOARD COMPLETE! The drawer is now unlocked. Go to the drawer and press E.');
                        return;
                    }
                    /*
       * ===================================================
       * DRAWER
       * ===================================================
       */ if (currentChallenge.id.startsWith('layout1-drawer-')) {
                        const nextDrawer = drawerChallenges.find({
                            "Game.useCallback[submit].nextDrawer": (challengeItem)=>!solvedAfterCurrent.includes(challengeItem.id)
                        }["Game.useCallback[submit].nextDrawer"]);
                        if (nextDrawer) {
                            setChallenge(nextDrawer.id);
                            setChoice(null);
                            setShortAnswer('');
                            setFeedback(null);
                            return;
                        }
                        /*
         * Drawer completed
         */ setChallenge(null);
                        setChoice(null);
                        setShortAnswer('');
                        setFeedback(null);
                        setFakeMessage('DRAWER COMPLETE! All Layout 1 challenges are complete. The exit is now unlocked.');
                        return;
                    }
                    /*
       * ===================================================
       * OTHER LAYOUTS
       * ===================================================
       */ const nextQuestion = activeChallenges.find({
                        "Game.useCallback[submit].nextQuestion": (challengeItem)=>!solvedAfterCurrent.includes(challengeItem.id)
                    }["Game.useCallback[submit].nextQuestion"]);
                    if (nextQuestion) {
                        setChallenge(nextQuestion.id);
                        setChoice(null);
                        setShortAnswer('');
                        setFeedback(null);
                        return;
                    }
                    /*
       * No more questions
       */ setChallenge(null);
                    setChoice(null);
                    setShortAnswer('');
                    setFeedback(null);
                }
            }["Game.useCallback[submit]"], 700);
        }
    }["Game.useCallback[submit]"], [
        currentChallenge,
        choice,
        shortAnswer,
        solved,
        activeChallenges,
        whiteboardChallenges,
        drawerChallenges
    ]);
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
                        lineNumber: 1799,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 text-xl font-black text-cyan-200",
                        children: "YOU HAVE COMPLETED THE HEALTHCARE ENGLISH CHALLENGE."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1805,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-sm text-slate-400",
                        children: "You explored all four layouts and completed all healthcare English challenges."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1811,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "retro-btn mt-7 px-5 py-3",
                        onClick: ()=>location.reload(),
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1819,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 1797,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 1795,
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
                        nearId: nearObj?.id ?? null,
                        collected: new Set(),
                        onInteract: (object)=>{
                            if (!object.interactive || challenge || fakeMessage || transitioning) {
                                return;
                            }
                            const interactionType = getInteractionType(object);
                            /*
                 * REAL CHALLENGE
                 */ if (interactionType === 'whiteboard' || interactionType === 'drawer') {
                                openNextChallenge();
                                return;
                            }
                            /*
                 * FAKE INTERACTION
                 */ setFakeMessage(getFakeInteractionMessage(object.id));
                        },
                        layout: layout
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1858,
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
                        lineNumber: 1934,
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
                                lineNumber: 1949,
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
                                lineNumber: 1953,
                                columnNumber: 13
                            }, this),
                            !currentLayoutCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-yellow-200",
                                children: "COMPLETE ALL CHALLENGES"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1963,
                                columnNumber: 15
                            }, this),
                            currentLayoutCompleted && layout < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-green-300",
                                children: "EXIT UNLOCKED"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1974,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1947,
                        columnNumber: 11
                    }, this),
                    nearObj && !challenge && !fakeMessage && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 z-50 -translate-x-1/2 border-2 border-yellow-300 bg-black/85 px-5 py-3 text-center text-xs font-black text-yellow-100",
                        children: [
                            "[E] INTERACT —",
                            ' ',
                            nearObj.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 1994,
                        columnNumber: 15
                    }, this),
                    fakeMessage && !challenge && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[90] flex items-center justify-center bg-black/60 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xl border-4 border-[#20272e] bg-[#111820] shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b-4 border-cyan-300 bg-black/80 px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-black tracking-widest text-cyan-300",
                                            children: "INTERACTION"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2024,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xl font-black text-white",
                                            children: nearObj?.name ?? 'OBJECT'
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2030,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2022,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-slate-600 bg-black/50 p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-bold leading-relaxed text-slate-100",
                                                children: fakeMessage
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                lineNumber: 2045,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2043,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 text-center text-[10px] font-black text-slate-400",
                                            children: "PRESS ESC TO CLOSE"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2056,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "retro-btn px-8 py-3 text-xs font-black",
                                                onClick: ()=>setFakeMessage(null),
                                                children: "CLOSE"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                lineNumber: 2065,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2063,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2041,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 2018,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2016,
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
                                lineNumber: 2122,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2118,
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
                                    lineNumber: 2143,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-slate-300",
                                    children: layout < 4 ? `LAYOUT ${layout + 1}` : 'RETURNING'
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 2141,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2139,
                        columnNumber: 13
                    }, this),
                    challenge && currentChallenge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ChallengeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        challenge: currentChallenge,
                        index: activeChallenges.findIndex((challengeItem)=>challengeItem.id === currentChallenge.id) + 1,
                        total: activeChallenges.length,
                        choice: choice,
                        setChoice: setChoice,
                        shortAnswer: shortAnswer,
                        setShortAnswer: setShortAnswer,
                        onSubmit: submit,
                        onContinue: continueToWhiteboardQuestions,
                        feedback: feedback,
                        onClose: ()=>{
                            setChallenge(null);
                            setChoice(null);
                            setFeedback(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2171,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 1851,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 1849,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
        lineNumber: 1847,
        columnNumber: 5
    }, this);
}
_s(Game, "0DOKEPSNsY49EEkzsm0pKaPKkYY=");
_c = Game;
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_healthcare-english-game_healthcare-english-game_506c30c3._.js.map