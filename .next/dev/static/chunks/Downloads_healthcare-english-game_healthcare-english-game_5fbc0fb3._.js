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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Room({ roomObjects, nearId, collected, onInteract, layout }) {
    _s();
    const roomImages = {
        1: '/layout1-room.png',
        2: '/layout2-room.png',
        3: '/layout3-room.png',
        4: '/layout4-room.png'
    };
    /*
   * =========================================================
   * DEBUG MODE
   * F2 = ON / OFF
   * =========================================================
   */ const [debugMode, setDebugMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Room.useEffect": ()=>{
            const handleKeyDown = {
                "Room.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'F2') {
                        event.preventDefault();
                        setDebugMode({
                            "Room.useEffect.handleKeyDown": (current)=>!current
                        }["Room.useEffect.handleKeyDown"]);
                    }
                }
            }["Room.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Room.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["Room.useEffect"];
        }
    }["Room.useEffect"], []);
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
                lineNumber: 76,
                columnNumber: 7
            }, this),
            debugMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " pointer-events-none absolute inset-0 z-[200] ",
                children: roomObjects.map((object)=>{
                    const isNear = nearId === object.id;
                    let borderColor = 'border-blue-400';
                    let backgroundColor = 'bg-blue-400/10';
                    /*
             * SOLID
             */ if (object.solid) {
                        borderColor = 'border-red-500';
                        backgroundColor = 'bg-red-500/20';
                    }
                    /*
             * INTERACTIVE
             */ if (object.interactive) {
                        borderColor = 'border-yellow-400';
                        backgroundColor = 'bg-yellow-400/20';
                    }
                    /*
             * CURRENTLY NEAR
             */ if (isNear) {
                        borderColor = 'border-green-400';
                        backgroundColor = 'bg-green-400/30';
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
                  absolute
                  border-2
                  ${borderColor}
                  ${backgroundColor}
                `,
                        style: {
                            left: `${object.x}%`,
                            top: `${object.y}%`,
                            width: `${object.w}%`,
                            height: `${object.h}%`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " absolute left-0 top-0 -translate-y-full whitespace-nowrap bg-black px-1 py-1 text-[8px] font-bold text-white ",
                            children: object.name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                            lineNumber: 172,
                            columnNumber: 17
                        }, this)
                    }, `debug-${object.id}`, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 156,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                lineNumber: 93,
                columnNumber: 9
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
                    className: `
              absolute
              z-[50]
              cursor-pointer
              bg-transparent

              ${isNear ? 'ring-2 ring-yellow-300' : ''}
            `,
                    style: {
                        left: `${object.x}%`,
                        top: `${object.y}%`,
                        width: `${object.w}%`,
                        height: `${object.h}%`
                    }
                }, object.id, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                    lineNumber: 216,
                    columnNumber: 11
                }, this);
            }),
            debugMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute bottom-2 left-2 z-[250] max-h-[45%] max-w-[80%] overflow-auto border-2 border-white bg-black/95 p-3 text-[8px] font-bold text-white ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-yellow-300",
                        children: [
                            "F2 DEBUG — LAYOUT ",
                            layout
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "OBJECT COUNT: ",
                            roomObjects.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-red-300",
                        children: "RED = SOLID"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-yellow-300",
                        children: "YELLOW = INTERACTIVE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-green-300",
                        children: "GREEN = NEAR"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-cyan-300",
                        children: "NEAR ID:"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: nearId ?? 'NONE'
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: roomObjects.map((object)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-white/10 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: object.id
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400",
                                        children: [
                                            "solid=",
                                            String(object.solid),
                                            ' | ',
                                            "interactive=",
                                            String(object.interactive)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `debug-list-${object.id}`, true, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Room, "WBq1++UvW/H7yeMx0+LO31aLZGQ=");
_c = Room;
var _c;
__turbopack_context__.k.register(_c, "Room");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/clues.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clues",
    ()=>clues
]);
const clues = [
    {
        id: 'layout1-clue-left-chair',
        layout: 1,
        objectId: 'l1-chair-left',
        title: 'A Hidden Letter',
        text: 'A nurse shows concern and attention to a patient. What word describes this attitude? The first letter of the answer is hidden here.',
        letter: 'C'
    },
    {
        id: 'layout1-clue-right-chair',
        layout: 1,
        objectId: 'l1-chair-right',
        title: 'A Hidden Letter',
        text: 'Before giving treatment, a healthcare worker must show responsibility and attention. Think of a four-letter word related to this action. One letter is hidden here.',
        letter: 'A'
    },
    {
        id: 'layout1-clue-plant',
        layout: 1,
        objectId: 'l1-plant',
        title: 'A Hidden Letter',
        text: 'A patient needs attention, support, and concern. Think of the English word commonly used for this action. One letter is hidden here.',
        letter: 'R'
    },
    {
        id: 'layout1-clue-blue-board',
        layout: 1,
        objectId: 'l1-blue-board',
        title: 'A Hidden Letter',
        text: 'A healthcare worker gives attention and support to a patient. Think carefully about the word that describes this action. One letter is hidden here.',
        letter: 'E'
    },
    /*
   * =========================================================
   * LAYOUT 2 — CLUES
   * =========================================================
   */ {
        id: 'layout2-clue-student-desk',
        layout: 2,
        objectId: 'l2-student-desk',
        title: 'A Hidden Letter',
        text: 'You found something hidden around the student desk. Save these two letters. They may be useful later.',
        letter: 'MI'
    },
    {
        id: 'layout2-clue-left-curtain',
        layout: 2,
        objectId: 'l2-curtain-left',
        title: 'A Hidden Letter',
        text: 'You found something hidden behind the curtain. Save these two letters. They may be useful later.',
        letter: 'NE'
    },
    {
        id: 'layout2-clue-right-curtain',
        layout: 2,
        objectId: 'l2-curtain-right',
        title: 'A Hidden Letter',
        text: 'You found something hidden behind the curtain. Save these two letters. They may be useful later.',
        letter: 'DC'
    },
    {
        id: 'l2_wall_decoration_upper',
        layout: 2,
        objectId: 'l2_wall_decoration_upper',
        title: 'A Hidden Letter',
        text: 'You found something hidden in the decoration. Save these two letters. They may be useful later.',
        letter: 'EI'
    }
];
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
   * WHITEBOARD
   * =========================================================
   *
   * EXISTING COLLISION
   * DO NOT CHANGE
   */ {
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
        description: 'The classroom whiteboard.'
    },
    /*
   * =========================================================
   * PROJECTOR
   * =========================================================
   *
   * Small projector mounted near the upper center wall.
   * Collision is intentionally kept tight around the
   * visible projector body.
   */ {
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
        description: 'A ceiling-mounted classroom projector.'
    },
    /*
   * =========================================================
   * LEFT CURTAIN
   * =========================================================
   *
   * Collision follows the visible curtain area only.
   */ {
        id: 'l2_left_curtain',
        name: 'Left Curtain',
        kind: 'object',
        x: 13,
        y: 5.5,
        w: 24,
        h: 18,
        solid: true,
        interactive: true,
        color: 'transparent',
        description: 'A classroom curtain.'
    },
    /*
   * =========================================================
   * RIGHT CURTAIN
   * =========================================================
   */ {
        id: 'l2_right_curtain',
        name: 'Right Curtain',
        kind: 'object',
        x: 56,
        y: 5.5,
        w: 23,
        h: 18,
        solid: true,
        interactive: true,
        color: 'transparent',
        description: 'A classroom curtain.'
    },
    /*
   * =========================================================
   * RIGHT WALL DECORATION - UPPER
   * =========================================================
   *
   * The framed black/brown decoration on the upper-right wall.
   */ {
        id: 'l2_wall_decoration_upper',
        name: 'Wall Decoration',
        kind: 'object',
        x: 91.5,
        y: 13.5,
        w: 4,
        h: 15,
        solid: true,
        interactive: true,
        color: 'transparent',
        description: 'A wall decoration.'
    },
    /*
   * =========================================================
   * RIGHT WALL DECORATION - LOWER
   * =========================================================
   *
   * The second dark/black decoration underneath it.
   */ {
        id: 'l2_wall_decoration_lower',
        name: 'Wall Decoration',
        kind: 'object',
        x: 91.5,
        y: 30,
        w: 4,
        h: 13,
        solid: true,
        interactive: true,
        color: 'transparent',
        description: 'A wall decoration.'
    },
    /*
   * =========================================================
   * BACK WALL
   * =========================================================
   *
   * Existing collision.
   * DO NOT CHANGE.
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
   *
   * Existing collision.
   * DO NOT CHANGE.
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
   *
   * Existing collision.
   * DO NOT CHANGE.
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
   *
   * Existing collision.
   * DO NOT CHANGE.
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
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx'\n\nUnterminated string constant");
e.code = 'MODULE_UNPARSABLE';
throw e;
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

//# sourceMappingURL=Downloads_healthcare-english-game_healthcare-english-game_5fbc0fb3._.js.map