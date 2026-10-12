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
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function HUD({ layout, clues, clueTotal, done, total, onJournal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute left-3 right-3 top-3 z-30 flex items-start justify-between gap-2 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel px-3 py-2 text-[11px] text-slate-100 pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-black tracking-[.16em] text-yellow-200",
                        children: "HEALTHCARE ENGLISH"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
                        lineNumber: 3,
                        columnNumber: 368
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-cyan-200",
                        children: [
                            "LAYOUT ",
                            layout
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
                        lineNumber: 3,
                        columnNumber: 461
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "CLUES: ",
                            clues,
                            " / ",
                            clueTotal
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
                        lineNumber: 3,
                        columnNumber: 518
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "CHALLENGES: ",
                            done,
                            " / ",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
                        lineNumber: 3,
                        columnNumber: 557
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
                lineNumber: 3,
                columnNumber: 288
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "retro-btn px-3 py-2 text-[10px] pointer-events-auto",
                onClick: onJournal,
                children: "[J] CLUE JOURNAL"
            }, void 0, false, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
                lineNumber: 3,
                columnNumber: 602
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx",
        lineNumber: 3,
        columnNumber: 177
    }, this);
}
_c = HUD;
var _c;
__turbopack_context__.k.register(_c, "HUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function InteractionPanel({ object, clue, onClose, onCollect, collected }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel max-w-md p-5 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-yellow-200 font-black",
                            children: object.name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                            lineNumber: 3,
                            columnNumber: 367
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "retro-btn px-2",
                            onClick: onClose,
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                            lineNumber: 3,
                            columnNumber: 428
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                    lineNumber: 3,
                    columnNumber: 311
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300",
                    children: object.description
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                    lineNumber: 3,
                    columnNumber: 497
                }, this),
                clue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border-2 border-dashed border-cyan-700 bg-slate-950/60 p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-cyan-300",
                            children: "HIDDEN ENGLISH CLUE"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                            lineNumber: 3,
                            columnNumber: 639
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 text-base font-black text-white",
                            children: clue.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                            lineNumber: 3,
                            columnNumber: 703
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 whitespace-pre-line text-slate-300",
                            children: clue.text
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                            lineNumber: 3,
                            columnNumber: 775
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-lg font-black text-yellow-200",
                            children: clue.keyword
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                            lineNumber: 3,
                            columnNumber: 845
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                    lineNumber: 3,
                    columnNumber: 558
                }, this),
                " ",
                clue && !collected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "retro-btn mt-4 w-full py-2 text-yellow-100",
                    onClick: onCollect,
                    children: "COLLECT CLUE"
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                    lineNumber: 3,
                    columnNumber: 949
                }, this),
                clue && collected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-center text-green-300",
                    children: "CLUE COLLECTED"
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
                    lineNumber: 3,
                    columnNumber: 1072
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
            lineNumber: 3,
            columnNumber: 267
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx",
        lineNumber: 3,
        columnNumber: 179
    }, this);
}
_c = InteractionPanel;
var _c;
__turbopack_context__.k.register(_c, "InteractionPanel");
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
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClueJournal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ClueJournal({ clues, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-[55] flex items-center justify-center bg-black/65 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel max-h-[80%] w-full max-w-2xl overflow-auto p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-black text-yellow-200",
                            children: "CLUE JOURNAL"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                            lineNumber: 3,
                            columnNumber: 293
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "retro-btn px-2",
                            onClick: onClose,
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                            lineNumber: 3,
                            columnNumber: 361
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                    lineNumber: 3,
                    columnNumber: 255
                }, this),
                clues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-center text-slate-400",
                    children: "No clues collected yet. Explore the room."
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                    lineNumber: 3,
                    columnNumber: 448
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-2",
                    children: clues.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-600 bg-slate-950/70 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-cyan-300",
                                    children: [
                                        "LAYOUT ",
                                        c.layout
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                                    lineNumber: 3,
                                    columnNumber: 675
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-black",
                                    children: c.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                                    lineNumber: 3,
                                    columnNumber: 737
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-slate-400",
                                    children: c.text
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                                    lineNumber: 3,
                                    columnNumber: 780
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 font-black text-yellow-200",
                                    children: c.keyword
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                                    lineNumber: 3,
                                    columnNumber: 835
                                }, this)
                            ]
                        }, c.id, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                            lineNumber: 3,
                            columnNumber: 603
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
                    lineNumber: 3,
                    columnNumber: 541
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
            lineNumber: 3,
            columnNumber: 185
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx",
        lineNumber: 3,
        columnNumber: 95
    }, this);
}
_c = ClueJournal;
var _c;
__turbopack_context__.k.register(_c, "ClueJournal");
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
    {
        id: 'q1',
        layout: 1,
        clueIds: [
            'c1'
        ],
        question: 'The nurse ______ the patient’s blood pressure yesterday.',
        options: [
            'checks',
            'checked',
            'is checking',
            'has checked'
        ],
        answer: 1,
        explanation: '“Yesterday” refers to a finished time in the past, so use the simple past: checked.'
    },
    {
        id: 'q2',
        layout: 1,
        clueIds: [
            'c2'
        ],
        question: 'The nurse listened to the patient ______ before writing the note.',
        options: [
            'carefully',
            'careful',
            'care',
            'caring'
        ],
        answer: 0,
        explanation: '“Carefully” is an adverb describing how the nurse listened.'
    },
    {
        id: 'q3',
        layout: 2,
        clueIds: [
            'c3'
        ],
        question: 'The nurse ______ the patient’s temperature now.',
        options: [
            'records',
            'recorded',
            'is recording',
            'has recorded'
        ],
        answer: 2,
        explanation: '“Now” signals an action happening at the moment of speaking: present continuous.'
    },
    {
        id: 'q4',
        layout: 2,
        clueIds: [
            'c4'
        ],
        question: '______ using the blood pressure monitor, ask the patient to sit comfortably.',
        options: [
            'Before',
            'Yesterday',
            'Already',
            'During'
        ],
        answer: 0,
        explanation: '“Before” introduces the action that must happen first.'
    },
    {
        id: 'q5',
        layout: 2,
        clueIds: [
            'c5'
        ],
        question: 'Which sentence is the most appropriate workplace instruction?',
        options: [
            'Wash your hands properly.',
            'You washing hands now.',
            'Washed your hands yesterday.',
            'Hands wash properly.'
        ],
        answer: 0,
        explanation: '“Wash your hands properly” is a clear imperative used for instructions.'
    },
    {
        id: 'q6',
        layout: 2,
        clueIds: [
            'c6'
        ],
        question: 'The nurse checks the ______ before starting the procedure.',
        options: [
            'supplies',
            'supplyed',
            'supplying',
            'suppliedly'
        ],
        answer: 0,
        explanation: '“Supplies” is the correct noun for the materials needed for a procedure.'
    },
    {
        id: 'q7',
        layout: 3,
        clueIds: [
            'c7'
        ],
        question: 'A patient is waiting. Which expression is polite and professional?',
        options: [
            'Wait!',
            'Please wait a moment.',
            'You wait now.',
            'Waiting there.'
        ],
        answer: 1,
        explanation: '“Please wait a moment” is a polite functional expression for patient communication.'
    },
    {
        id: 'q8',
        layout: 3,
        clueIds: [
            'c8'
        ],
        question: 'A patient says, “I feel dizzy.” What is the best immediate response?',
        options: [
            'How do you feel? Please sit down.',
            'You are wrong.',
            'Why are you dizzy?',
            'Dizzy patients wait outside.'
        ],
        answer: 0,
        explanation: 'The response acknowledges the patient and gives a calm, supportive instruction.'
    },
    {
        id: 'q9',
        layout: 3,
        clueIds: [
            'c9'
        ],
        question: 'You notice a wet floor near the sink. What should you say first?',
        options: [
            'Be careful. The floor is wet.',
            'The floor was wet yesterday.',
            'I am cleaning yesterday.',
            'Wet floor is funny.'
        ],
        answer: 0,
        explanation: 'A clear safety warning is appropriate before following the workplace cleaning procedure.'
    },
    {
        id: 'q10',
        layout: 3,
        clueIds: [
            'c10'
        ],
        question: 'The equipment ______ checked and is ready for use.',
        options: [
            'has been',
            'have being',
            'is been',
            'was being'
        ],
        answer: 0,
        explanation: '“Has been checked” is present perfect passive, describing a completed check with a current result.'
    },
    {
        id: 'q11',
        layout: 4,
        clueIds: [
            'c11'
        ],
        question: 'Which sequence is correct for the procedure described in the clue?',
        options: [
            'Perform → explain → prepare → document',
            'Prepare → explain → perform → document',
            'Document → perform → explain → prepare',
            'Explain → document → prepare → perform'
        ],
        answer: 1,
        explanation: 'The sequence follows the procedure card: prepare, explain, perform, then document.'
    },
    {
        id: 'q12',
        layout: 4,
        clueIds: [
            'c12'
        ],
        question: 'The nurse may leave the area ______ the patient is safe and the notes are complete.',
        options: [
            'before',
            'after',
            'while',
            'unless'
        ],
        answer: 1,
        explanation: '“After” connects the departure with the completed safety and documentation steps.'
    },
    {
        id: 'q13',
        layout: 4,
        clueIds: [
            'c13'
        ],
        question: '______ the procedure, the nurse documents the result.',
        options: [
            'After',
            'Yesterday',
            'While yesterday',
            'At before'
        ],
        answer: 0,
        explanation: '“After the procedure” correctly shows the sequence of events.'
    },
    {
        id: 'q14',
        layout: 4,
        clueIds: [
            'c14'
        ],
        question: 'Which instruction best supports clear nurse-patient communication?',
        options: [
            'Explain the instruction clearly.',
            'Use complicated words always.',
            'Speak unclear to save time.',
            'Avoid checking understanding.'
        ],
        answer: 0,
        explanation: 'Clear language supports accurate workplace communication.'
    },
    {
        id: 'q15',
        layout: 4,
        clueIds: [
            'c15'
        ],
        question: 'The nurse ______ the patient’s temperature at the moment.',
        options: [
            'takes',
            'took',
            'is taking',
            'has taken'
        ],
        answer: 2,
        explanation: '“At the moment” indicates an action in progress, so use present continuous.'
    },
    {
        id: 'q16',
        layout: 4,
        clueIds: [
            'c16'
        ],
        question: 'First check the cuff. ______, position the patient.',
        options: [
            'Next',
            'Yesterday',
            'Never',
            'Already'
        ],
        answer: 0,
        explanation: '“Next” is the sequencing expression that introduces the following step.'
    },
    {
        id: 'q17',
        layout: 4,
        clueIds: [
            'c17'
        ],
        question: '______ a used item, perform hand hygiene before starting the clean task.',
        options: [
            'After touching',
            'Yesterday touching',
            'Touch after',
            'Before yesterday'
        ],
        answer: 0,
        explanation: '“After touching” correctly connects the first action to the required hygiene step.'
    },
    {
        id: 'q18',
        layout: 4,
        clueIds: [
            'c18'
        ],
        question: 'If supplies are ______, tell the person responsible before the stock is empty.',
        options: [
            'running low',
            'run lowing',
            'ran lower',
            'running lowest'
        ],
        answer: 0,
        explanation: '“Running low” is the natural workplace expression for supplies that are nearly depleted.'
    },
    {
        id: 'q19',
        layout: 4,
        clueIds: [
            'c19'
        ],
        question: 'Which sentence is the clearest emergency instruction?',
        options: [
            'Stay calm and call for assistance.',
            'Calm staying and assistance called.',
            'You should maybe calm.',
            'Assistance is yesterday.'
        ],
        answer: 0,
        explanation: 'The imperative gives two clear actions in the correct workplace form.'
    },
    {
        id: 'q20',
        layout: 4,
        clueIds: [
            'c20'
        ],
        question: 'The equipment should be checked ______ it is used.',
        options: [
            'every time',
            'yesterday only',
            'never',
            'once yesterday'
        ],
        answer: 0,
        explanation: '“Every time” expresses a repeated workplace routine.'
    }
];
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
        id: 'c1',
        layout: 1,
        objectId: 'chart',
        title: 'Patient Chart',
        text: 'Patient: Rina | Age: 45 | Complaint: Headache | Temperature: 38°C | Note: The event happened the day before today.',
        keyword: 'YESTERDAY'
    },
    {
        id: 'c2',
        layout: 1,
        objectId: 'stethoscope',
        title: 'Stethoscope Tag',
        text: 'A nurse uses this tool to listen carefully to body sounds. The keyword describes something done with attention.',
        keyword: 'CAREFULLY'
    },
    {
        id: 'c3',
        layout: 2,
        objectId: 'thermometer',
        title: 'Thermometer Note',
        text: 'Record the temperature, then report the reading to the nurse in charge. Time marker: right now.',
        keyword: 'NOW'
    },
    {
        id: 'c4',
        layout: 2,
        objectId: 'bp',
        title: 'Blood Pressure Monitor',
        text: 'Before using the monitor, ask the patient to sit comfortably. The instruction happens first.',
        keyword: 'BEFORE'
    },
    {
        id: 'c5',
        layout: 2,
        objectId: 'sink',
        title: 'Hand Hygiene Sign',
        text: 'Clean hands are essential in healthcare. The action should continue for an appropriate amount of time.',
        keyword: 'WASH'
    },
    {
        id: 'c6',
        layout: 2,
        objectId: 'cabinet',
        title: 'Medicine Cabinet Label',
        text: 'The cabinet contains supplies. Nurses check what they need before beginning a procedure.',
        keyword: 'SUPPLIES'
    },
    {
        id: 'c7',
        layout: 3,
        objectId: 'desk',
        title: 'Nurse Desk Memo',
        text: 'A polite way to ask a patient to wait: use a short professional expression.',
        keyword: 'PLEASE WAIT'
    },
    {
        id: 'c8',
        layout: 3,
        objectId: 'chair',
        title: 'Patient Comfort Card',
        text: 'A patient says, “I feel dizzy.” The nurse should respond with concern and offer assistance.',
        keyword: 'HOW DO YOU FEEL?'
    },
    {
        id: 'c9',
        layout: 3,
        objectId: 'poster',
        title: 'Safety Poster',
        text: 'If a spill is noticed, the safest first response is to warn people nearby and follow the workplace procedure.',
        keyword: 'BE CAREFUL'
    },
    {
        id: 'c10',
        layout: 3,
        objectId: 'equipment',
        title: 'Equipment Log',
        text: 'The equipment was checked earlier and is ready for use. Look for the completed action.',
        keyword: 'HAS BEEN CHECKED'
    },
    {
        id: 'c11',
        layout: 4,
        objectId: 'bed',
        title: 'Bedside Procedure Card',
        text: 'Sequence: prepare the patient → explain the procedure → perform the procedure → document the result.',
        keyword: 'FIRST'
    },
    {
        id: 'c12',
        layout: 4,
        objectId: 'door',
        title: 'Door Sign',
        text: 'At the end of a procedure, the nurse should leave the area only after the patient is safe and the notes are complete.',
        keyword: 'AFTER'
    },
    {
        id: 'c13',
        layout: 4,
        objectId: 'chart',
        title: 'Chart Sequence Note',
        text: 'Documentation must be accurate. Use the expression that means “as soon as the procedure is finished.”',
        keyword: 'AFTER THE PROCEDURE'
    },
    {
        id: 'c14',
        layout: 4,
        objectId: 'stethoscope',
        title: 'Communication Reminder',
        text: 'When giving instructions, use clear and polite language. Avoid unnecessary medical jargon.',
        keyword: 'CLEARLY'
    },
    {
        id: 'c15',
        layout: 4,
        objectId: 'thermometer',
        title: 'Observation Note',
        text: 'A nurse is taking the patient’s temperature at this moment. Choose the tense for an action happening now.',
        keyword: 'IS TAKING'
    },
    {
        id: 'c16',
        layout: 4,
        objectId: 'bp',
        title: 'Vital Signs Checklist',
        text: 'First check the cuff. Next position the patient. Then start the measurement.',
        keyword: 'NEXT'
    },
    {
        id: 'c17',
        layout: 4,
        objectId: 'sink',
        title: 'Infection Control Card',
        text: 'After touching a used item, perform hand hygiene before moving to the next clean task.',
        keyword: 'AFTER TOUCHING'
    },
    {
        id: 'c18',
        layout: 4,
        objectId: 'cabinet',
        title: 'Supply Request',
        text: 'If supplies are running low, tell the person responsible before the stock is empty.',
        keyword: 'RUNNING LOW'
    },
    {
        id: 'c19',
        layout: 4,
        objectId: 'poster',
        title: 'Emergency Communication',
        text: 'A concise workplace instruction: stay calm and call for assistance.',
        keyword: 'CALL FOR ASSISTANCE'
    },
    {
        id: 'c20',
        layout: 4,
        objectId: 'equipment',
        title: 'Final Equipment Check',
        text: 'The equipment should be checked before and after use. Think about repeated workplace routines.',
        keyword: 'EVERY TIME'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layouts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layouts",
    ()=>layouts
]);
const layouts = {
    1: {
        id: 1,
        name: 'FOUNDATIONS',
        clueCount: 2,
        challengeCount: 2,
        description: 'Explore the practice room and learn core healthcare vocabulary.'
    },
    2: {
        id: 2,
        name: 'GRAMMAR SHIFT',
        clueCount: 4,
        challengeCount: 4,
        description: 'Use time markers, instructions, and workplace grammar.'
    },
    3: {
        id: 3,
        name: 'PATIENT TALK',
        clueCount: 6,
        challengeCount: 6,
        description: 'Use professional expressions and contextual communication.'
    },
    4: {
        id: 4,
        name: 'CLINICAL PROCEDURES',
        clueCount: 8,
        challengeCount: 8,
        description: 'Combine sequencing, grammar, safety, and workplace English.'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/objects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "objects",
    ()=>objects
]);
const objects = [
    {
        id: 'bed',
        name: 'Patient Bed',
        kind: 'bed',
        x: 17,
        y: 31,
        w: 25,
        h: 17,
        solid: true,
        interactive: true,
        clueId: 'c11',
        color: '#d9e2e8',
        icon: 'BED',
        description: 'A clean practice bed for patient care.'
    },
    {
        id: 'desk',
        name: 'Nurse Desk',
        kind: 'desk',
        x: 61,
        y: 28,
        w: 17,
        h: 12,
        solid: true,
        interactive: true,
        clueId: 'c7',
        color: '#8b674e',
        icon: 'DESK',
        description: 'A small nursing station desk.'
    },
    {
        id: 'chair',
        name: 'Chair',
        kind: 'chair',
        x: 65,
        y: 46,
        w: 8,
        h: 7,
        solid: true,
        interactive: true,
        clueId: 'c8',
        color: '#3f697d',
        icon: 'CHAIR',
        description: 'A chair for patient conversations.'
    },
    {
        id: 'stethoscope',
        name: 'Stethoscope',
        kind: 'stethoscope',
        x: 48,
        y: 27,
        w: 7,
        h: 7,
        solid: false,
        interactive: true,
        clueId: 'c2',
        color: '#27323b',
        icon: 'STETH',
        description: 'A diagnostic listening tool used in nursing practice.'
    },
    {
        id: 'thermometer',
        name: 'Thermometer',
        kind: 'thermometer',
        x: 44,
        y: 55,
        w: 7,
        h: 9,
        solid: false,
        interactive: true,
        clueId: 'c3',
        color: '#dce7ee',
        icon: 'TEMP',
        description: 'A tool for measuring body temperature.'
    },
    {
        id: 'bp',
        name: 'Blood Pressure Monitor',
        kind: 'bp',
        x: 31,
        y: 61,
        w: 13,
        h: 9,
        solid: true,
        interactive: true,
        clueId: 'c4',
        color: '#526775',
        icon: 'BP',
        description: 'A monitor used to measure blood pressure.'
    },
    {
        id: 'cabinet',
        name: 'Medicine Cabinet',
        kind: 'cabinet',
        x: 77,
        y: 21,
        w: 14,
        h: 20,
        solid: true,
        interactive: true,
        clueId: 'c6',
        color: '#b9c5cc',
        icon: 'MEDS',
        description: 'Storage for practice supplies.'
    },
    {
        id: 'chart',
        name: 'Patient Chart',
        kind: 'chart',
        x: 82,
        y: 53,
        w: 9,
        h: 10,
        solid: false,
        interactive: true,
        clueId: 'c1',
        color: '#f0e6c7',
        icon: 'CHART',
        description: 'A sample patient chart.'
    },
    {
        id: 'sink',
        name: 'Sink',
        kind: 'sink',
        x: 8,
        y: 63,
        w: 13,
        h: 10,
        solid: true,
        interactive: true,
        clueId: 'c5',
        color: '#a9c2ca',
        icon: 'SINK',
        description: 'Hand hygiene station.'
    },
    {
        id: 'poster',
        name: 'Safety Poster',
        kind: 'poster',
        x: 5,
        y: 24,
        w: 10,
        h: 15,
        solid: false,
        interactive: true,
        clueId: 'c9',
        color: '#d7b65d',
        icon: 'SAFE',
        description: 'A workplace safety reminder.'
    },
    {
        id: 'equipment',
        name: 'Medical Equipment',
        kind: 'equipment',
        x: 55,
        y: 60,
        w: 14,
        h: 12,
        solid: true,
        interactive: true,
        clueId: 'c10',
        color: '#7f909b',
        icon: 'EQUIP',
        description: 'Training equipment with a service log.'
    },
    {
        id: 'door',
        name: 'Door',
        kind: 'door',
        x: 91,
        y: 39,
        w: 6,
        h: 18,
        solid: true,
        interactive: true,
        clueId: 'c12',
        color: '#704e3d',
        icon: 'EXIT',
        description: 'The practice room door.'
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/HUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$InteractionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/InteractionPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ChallengeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ClueJournal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ClueJournal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/challenges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/clues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layouts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/objects.ts [app-client] (ecmascript)");
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
;
;
const SPEED = 0.18;
function Game() {
    _s();
    /*
   * =========================================================
   * GAME STATE
   * =========================================================
   */ const [layout, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 43
    });
    /*
   * CHARACTER DIRECTION
   */ const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('down');
    /*
   * WALKING ANIMATION
   */ const [walking, setWalking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [keys, setKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [collected, setCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [interaction, setInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [journal, setJournal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [challenge, setChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /*
   * ROOM TRANSITION
   */ const [transitioning, setTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /*
   * =========================================================
   * ACTIVE CLUES
   * =========================================================
   */ const activeClues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[activeClues]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clues"].filter({
                "Game.useMemo[activeClues]": (clue)=>clue.layout <= layout && collected.includes(clue.id)
            }["Game.useMemo[activeClues]"])
    }["Game.useMemo[activeClues]"], [
        layout,
        collected
    ]);
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
   * ROOM OBJECTS
   * =========================================================
   */ const visibleObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[visibleObjects]": ()=>{
            if (layout === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$objects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objects"].map({
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
   * FIND NEAREST OBJECT
   * =========================================================
   */ const nearId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Game.useMemo[nearId]": ()=>{
            let best = null;
            let bestDistance = 8;
            for (const object of visibleObjects){
                const centerX = object.x + object.w / 2;
                const centerY = object.y + object.h / 2;
                const distance = Math.hypot(pos.x - centerX, pos.y - centerY);
                if (distance < bestDistance) {
                    bestDistance = distance;
                    best = object;
                }
            }
            return best?.id ?? null;
        }
    }["Game.useMemo[nearId]"], [
        pos,
        visibleObjects
    ]);
    const nearObj = visibleObjects.find((object)=>object.id === nearId) ?? null;
    /*
   * =========================================================
   * CURRENT CHALLENGE
   * =========================================================
   */ const currentChallenge = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["challenges"].find((challengeItem)=>challengeItem.id === challenge) ?? null;
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
         * Move horizontally and vertically separately.
         * This lets the player slide around objects.
         */ const nx = Math.max(6, Math.min(94, current.x + dx));
                    const xAllowed = !collides(nx, current.y);
                    const finalX = xAllowed ? nx : current.x;
                    const ny = Math.max(12, Math.min(89, current.y + dy));
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
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            const down = {
                "Game.useEffect.down": (event)=>{
                    const key = event.key.toLowerCase();
                    /*
       * PREVENT PAGE SCROLLING
       */ if (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright' || key === ' ') {
                        event.preventDefault();
                    }
                    /*
       * SAVE PRESSED KEY
       */ setKeys({
                        "Game.useEffect.down": (value)=>({
                                ...value,
                                [key]: true
                            })
                    }["Game.useEffect.down"]);
                    /*
       * JOURNAL
       */ if (key === 'j' && !interaction && !challenge) {
                        setJournal(true);
                    }
                    /*
       * INTERACTION
       */ if (key === 'e' && nearObj && !interaction && !journal && !challenge) {
                        setInteraction(nearObj);
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
        nearObj,
        interaction,
        journal,
        challenge
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
                    /*
       * CHECK WHETHER PLAYER IS MOVING
       */ const isMoving = dx !== 0 || dy !== 0;
                    setWalking(isMoving);
                    /*
       * CHARACTER DIRECTION
       *
       * Horizontal gets priority
       * when moving diagonally.
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
       * MOVE PLAYER
       */ if (isMoving && !interaction && !journal && !challenge && !transitioning) {
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
        interaction,
        journal,
        challenge,
        transitioning
    ]);
    /*
   * =========================================================
   * WALKING ANIMATION
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            /*
     * When standing still,
     * always show frame 0.
     */ if (!walking) {
                setFrame(0);
                return;
            }
            /*
     * Switch between PNG 1 and PNG 2.
     */ const timer = window.setInterval({
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
   * LAYOUT 1 → LAYOUT 2
   * =========================================================
   *
   * EXIT:
   *
   * X < 12
   * Y > 82
   *
   * Bottom-left corner.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (layout !== 1) {
                return;
            }
            if (transitioning) {
                return;
            }
            const reachedExit = pos.x < 12 && pos.y > 82;
            if (!reachedExit) {
                return;
            }
            setTransitioning(true);
            window.setTimeout({
                "Game.useEffect": ()=>{
                    setLayout(2);
                    setPos({
                        x: 50,
                        y: 75
                    });
                    setDirection('up');
                    setInteraction(null);
                    setJournal(false);
                    setChallenge(null);
                    setChoice(null);
                    setFeedback(null);
                    setTransitioning(false);
                }
            }["Game.useEffect"], 700);
        }
    }["Game.useEffect"], [
        pos.x,
        pos.y,
        layout,
        transitioning
    ]);
    /*
   * =========================================================
   * CHALLENGE PROGRESSION
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            const completed = activeChallenges.every({
                "Game.useEffect.completed": (challengeItem)=>solved.includes(challengeItem.id)
            }["Game.useEffect.completed"]);
            if (completed && activeChallenges.length && !transitioning) {
                if (layout < 4) {
                    const timer = window.setTimeout({
                        "Game.useEffect.timer": ()=>{
                            setLayout(layout + 1);
                            setPos({
                                x: 50,
                                y: 43
                            });
                            setDirection('down');
                            setInteraction(null);
                            setJournal(false);
                            setChallenge(null);
                            setChoice(null);
                            setFeedback(null);
                        }
                    }["Game.useEffect.timer"], 500);
                    return ({
                        "Game.useEffect": ()=>{
                            window.clearTimeout(timer);
                        }
                    })["Game.useEffect"];
                }
                setFinished(true);
            }
        }
    }["Game.useEffect"], [
        activeChallenges,
        layout,
        solved,
        transitioning
    ]);
    /*
   * =========================================================
   * COLLECT CLUE
   * =========================================================
   */ const collect = ()=>{
        const clue = interaction?.clueId ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clues"].find((clueItem)=>clueItem.id === interaction.clueId) : undefined;
        if (clue && clue.layout === layout && !collected.includes(clue.id)) {
            setCollected((value)=>[
                    ...value,
                    clue.id
                ]);
        }
        setInteraction(null);
    };
    /*
   * =========================================================
   * SUBMIT CHALLENGE
   * =========================================================
   */ const submit = ()=>{
        if (!currentChallenge || choice === null) {
            return;
        }
        if (choice === currentChallenge.answer) {
            setFeedback('correct');
            if (!solved.includes(currentChallenge.id)) {
                setSolved((value)=>[
                        ...value,
                        currentChallenge.id
                    ]);
            }
        } else {
            setFeedback('wrong');
        }
    };
    /*
   * =========================================================
   * OPEN NEXT CHALLENGE
   * =========================================================
   */ const openNextChallenge = ()=>{
        const next = activeChallenges.find((challengeItem)=>!solved.includes(challengeItem.id));
        if (next) {
            setChallenge(next.id);
            setChoice(null);
            setFeedback(null);
        }
    };
    /*
   * =========================================================
   * FINISHED SCREEN
   * =========================================================
   */ if (finished) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "game-shell flex min-h-screen items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel max-w-2xl p-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-black text-yellow-200",
                        children: "CONGRATULATIONS!"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 885,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 text-xl font-black text-cyan-200",
                        children: "YOU HAVE COMPLETED THE HEALTHCARE ENGLISH CHALLENGE."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 891,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-sm text-slate-400",
                        children: "You explored all four prototype layouts and completed all 20 English challenges."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 897,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "retro-btn mt-7 px-5 py-3",
                        onClick: ()=>location.reload(),
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 905,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 883,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 881,
            columnNumber: 7
        }, this);
    }
    /*
   * =========================================================
   * MAIN GAME
   * =========================================================
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "game-shell min-h-screen p-3 md:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 flex items-center justify-between text-[9px] text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "WASD / ARROWS: MOVE"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 937,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "E: INTERACT • J: JOURNAL"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 941,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                    lineNumber: 935,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/10] overflow-hidden border-4 border-[#20272e] bg-[#59606a] shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            roomObjects: visibleObjects,
                            nearId: nearId,
                            collected: new Set(collected),
                            onInteract: (object)=>setInteraction(object),
                            layout: layout
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 949,
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
                            lineNumber: 971,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            layout: layout,
                            clues: collected.filter((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clues"].find((clueItem)=>clueItem.id === id)?.layout <= layout).length,
                            clueTotal: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][layout].clueCount,
                            done: solved.filter((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["challenges"].find((challengeItem)=>challengeItem.id === id)?.layout === layout).length,
                            total: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][layout].challengeCount,
                            onJournal: ()=>setJournal(true)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 979,
                            columnNumber: 11
                        }, this),
                        nearObj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 left-1/2 z-30 -translate-x-1/2 border-2 border-yellow-300 bg-black/80 px-4 py-2 text-xs font-black text-yellow-100",
                            children: [
                                "[E] INTERACT —",
                                ' ',
                                nearObj.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1022,
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
                                        lineNumber: 1037,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-xs text-slate-300",
                                        children: "LAYOUT 2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 1035,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1033,
                            columnNumber: 13
                        }, this),
                        interaction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$InteractionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            object: interaction,
                            clue: interaction.clueId ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clues"].find((clueItem)=>clueItem.id === interaction.clueId && clueItem.layout === layout) : undefined,
                            collected: !!interaction.clueId && collected.includes(interaction.clueId),
                            onCollect: collect,
                            onClose: ()=>setInteraction(null)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1057,
                            columnNumber: 13
                        }, this),
                        journal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ClueJournal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            clues: activeClues,
                            onClose: ()=>setJournal(false)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1092,
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
                                setFeedback(null);
                                setChoice(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1108,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                    lineNumber: 947,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "retro-btn px-3 py-2 text-[10px]",
                            onClick: ()=>setJournal(true),
                            children: "CLUE JOURNAL"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "retro-btn px-3 py-2 text-[10px]",
                            onClick: openNextChallenge,
                            disabled: !activeChallenges.some((challengeItem)=>!solved.includes(challengeItem.id)) || collected.filter((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clues"].find((clueItem)=>clueItem.id === id)?.layout === layout).length < __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][layout].clueCount,
                            children: "OPEN NEXT CHALLENGE"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto px-2 py-2 text-[10px] text-slate-400",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][layout].description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 1203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                    lineNumber: 1157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 933,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
        lineNumber: 931,
        columnNumber: 5
    }, this);
}
_s(Game, "hTIKOrsKRoDFuHpa+R+kB4qqk1w=");
_c = Game;
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_healthcare-english-game_healthcare-english-game_356c5ff0._.js.map