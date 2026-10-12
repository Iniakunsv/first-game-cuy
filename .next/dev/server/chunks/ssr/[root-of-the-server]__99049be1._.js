module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Player.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Room
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Room({ roomObjects, nearId, collected, onInteract, layout }) {
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
   */ const [debugMode, setDebugMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'F2') {
                event.preventDefault();
                setDebugMode((current)=>!current);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            debugMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            debugMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute bottom-2 left-2 z-[250] max-h-[45%] max-w-[80%] overflow-auto border-2 border-white bg-black/95 p-3 text-[8px] font-bold text-white ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "OBJECT COUNT: ",
                            roomObjects.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-red-300",
                        children: "RED = SOLID"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-yellow-300",
                        children: "YELLOW = INTERACTIVE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-green-300",
                        children: "GREEN = NEAR"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-cyan-300",
                        children: "NEAR ID:"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: nearId ?? 'NONE'
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: roomObjects.map((object)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-white/10 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: object.id
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/clues.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        objectId: 'l2_table_left',
        title: 'A Hidden Letter',
        text: 'You found something hidden around the student desk. Save these two letters. They may be useful later.',
        letter: 'MI'
    },
    {
        id: 'layout2-clue-left-curtain',
        layout: 2,
        objectId: 'l2_left_curtain',
        title: 'A Hidden Letter',
        text: 'You found something hidden behind the left curtain. Save these two letters. They may be useful later.',
        letter: 'NE'
    },
    {
        id: 'layout2-clue-right-curtain',
        layout: 2,
        objectId: 'l2-right-curtain',
        title: 'A Hidden Letter',
        text: 'You found something hidden behind the right curtain. Save these two letters. They may be useful later.',
        letter: 'DC'
    },
    {
        id: 'layout2-clue-black-decoration',
        layout: 2,
        objectId: 'l2-black-decoration',
        title: 'A Hidden Letter',
        text: 'You found something hidden in the dark decoration. Save these two letters. They may be useful later.',
        letter: 'EI'
    }
];
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChallengeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ChallengeModal({ challenge, index, total, choice, setChoice, shortAnswer, setShortAnswer, onSubmit, onContinue, feedback, onClose }) {
    const isShortAnswer = challenge.type === 'short-answer';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-[60] flex items-center justify-center bg-black/65 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel w-full max-w-xl p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-cyan-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 text-lg font-black text-white",
                    children: challenge.question
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                isShortAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 text-xs font-black text-yellow-200",
                            children: "ENTER THE KEYWORD"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                !isShortAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-2",
                    children: (challenge.options ?? []).map((option, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                feedback === 'wrong' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border border-red-500/60 bg-red-950/30 p-3 text-sm text-red-200",
                    children: "Not quite. Review your clues and try again."
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                feedback === 'correct' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border border-green-500/60 bg-green-950/30 p-3 text-sm text-green-200",
                    children: [
                        "Correct!",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                feedback === 'correct' && isShortAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onContinue,
                    className: "retro-btn mt-4 w-full py-3 font-black",
                    children: "GO TO QUESTIONS →"
                }, void 0, false, {
                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/challenges.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout1Objects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout2Objects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        clueId: 'layout2-clue-left-curtain',
        color: 'transparent',
        description: 'A classroom curtain.'
    },
    /*
   * =========================================================
   * RIGHT CURTAIN
   * =========================================================
   */ {
        id: 'l2-right-curtain',
        name: 'Right Curtain',
        kind: 'object',
        x: 56,
        y: 5.5,
        w: 23,
        h: 18,
        solid: true,
        interactive: true,
        clueId: 'layout2-clue-right-curtain',
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
        clueId: 'layout2-clue-student-desk',
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
        id: 'l2-black-decoration',
        name: 'Wall Decoration',
        kind: 'object',
        x: 91.5,
        y: 30,
        w: 4,
        h: 13,
        solid: true,
        interactive: true,
        clueId: 'layout2-clue-black-decoration',
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout3Objects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout4Objects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Player$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Player.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Room$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Room.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/clues.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ChallengeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/components/ChallengeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/challenges.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout1Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout1Objects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout2Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout2Objects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout3Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout3Objects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout4Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/healthcare-english-game/healthcare-english-game/data/layout4Objects.ts [app-ssr] (ecmascript)");
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
const SPEED = 0.25;
function Game() {
    /*
   * =========================================================
   * GAME STATE
   * =========================================================
   */ const [layout, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 75
    });
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('down');
    const [walking, setWalking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [keys, setKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [collectedClues, setCollectedClues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeClue, setActiveClue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [challenge, setChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shortAnswer, setShortAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /*
   * Fake interaction popup
   */ const [fakeMessage, setFakeMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [passwordInput, setPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [passwordOpen, setPasswordOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [teacherDeskUnlocked, setTeacherDeskUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transitioning, setTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /*
   * =========================================================
   * DEBUG COLLISION MODE
   * =========================================================
   *
   * Press F2 to show/hide collision boxes.
   */ const [debugCollision, setDebugCollision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /*
   * =========================================================
   * ACTIVE CHALLENGES
   * =========================================================
   */ const activeChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["challenges"].filter((challengeItem)=>challengeItem.layout === layout);
    }, [
        layout
    ]);
    /*
   * =========================================================
   * CURRENT CHALLENGE
   * =========================================================
   */ const currentChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$challenges$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["challenges"].find((challengeItem)=>challengeItem.id === challenge) ?? null;
    }, [
        challenge
    ]);
    /*
   * =========================================================
   * CURRENT LAYOUT PROGRESS
   * =========================================================
   */ const solvedInCurrentLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return activeChallenges.filter((challengeItem)=>solved.includes(challengeItem.id)).length;
    }, [
        activeChallenges,
        solved
    ]);
    /*
   * =========================================================
   * CURRENT LAYOUT COMPLETED
   * =========================================================
   */ const currentLayoutCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return activeChallenges.length > 0 && activeChallenges.every((challengeItem)=>solved.includes(challengeItem.id));
    }, [
        activeChallenges,
        solved
    ]);
    /*
   * =========================================================
   * LAYOUT 1 — WHITEBOARD PROGRESS
   * =========================================================
   */ const whiteboardChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return activeChallenges.filter((challengeItem)=>challengeItem.id.startsWith('layout1-whiteboard-'));
    }, [
        activeChallenges
    ]);
    const solvedWhiteboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return whiteboardChallenges.filter((challengeItem)=>solved.includes(challengeItem.id)).length;
    }, [
        whiteboardChallenges,
        solved
    ]);
    const whiteboardCompleted = whiteboardChallenges.length > 0 && solvedWhiteboard === whiteboardChallenges.length;
    /*
   * =========================================================
   * LAYOUT 1 — DRAWER PROGRESS
   * =========================================================
   */ const drawerChallenges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return activeChallenges.filter((challengeItem)=>challengeItem.id.startsWith('layout1-drawer-'));
    }, [
        activeChallenges
    ]);
    const solvedDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return drawerChallenges.filter((challengeItem)=>solved.includes(challengeItem.id)).length;
    }, [
        drawerChallenges,
        solved
    ]);
    const drawerCompleted = drawerChallenges.length > 0 && solvedDrawer === drawerChallenges.length;
    /*
   * =========================================================
   * DRAWER UNLOCK STATUS
   * =========================================================
   */ const drawerUnlocked = layout !== 1 || whiteboardCompleted;
    /*
   * =========================================================
   * ROOM OBJECTS
   * =========================================================
   */ const visibleObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (layout === 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout1Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout1Objects"];
        }
        if (layout === 2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout2Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout2Objects"];
        }
        if (layout === 3) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout3Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout3Objects"];
        }
        if (layout === 4) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$layout4Objects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout4Objects"];
        }
        return [];
    }, [
        layout
    ]);
    /*
   * =========================================================
   * NEAREST INTERACTIVE OBJECT
   * =========================================================
   */ const nearObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let nearest = null;
        let bestDistance = 8;
        for (const object of visibleObjects){
            if (!object.interactive) {
                continue;
            }
            /*
       * Check distance to the NEAREST POINT
       * of the interaction rectangle.
       *
       * This is better than checking only
       * the center of the object.
       */ const closestX = Math.max(object.x, Math.min(pos.x, object.x + object.w));
            const closestY = Math.max(object.y, Math.min(pos.y, object.y + object.h));
            const distance = Math.hypot(pos.x - closestX, pos.y - closestY);
            /*
       * Interaction radius
       */ if (distance <= 6 && distance < bestDistance) {
                bestDistance = distance;
                nearest = object;
            }
        }
        return nearest;
    }, [
        pos.x,
        pos.y,
        visibleObjects
    ]);
    /*
   * =========================================================
   * GET INTERACTION TYPE
   * =========================================================
   */ const getInteractionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((object)=>{
        if (!object) {
            return null;
        }
        const objectId = String(object.id ?? '').toLowerCase();
        const objectName = String(object.name ?? '').toLowerCase();
        /*
         * WHITEBOARD
         */ if (objectId.includes('whiteboard') || objectName.includes('whiteboard')) {
            return 'whiteboard';
        }
        /*
         * DRAWER
         */ if (objectId.includes('drawer') || objectName.includes('drawer')) {
            return 'drawer';
        }
        /*
 * TEACHER DESK
 */ if (objectId === 'l2_teacher_desk' || objectName.includes('teacher desk')) {
            return 'teacher-desk';
        }
        return null;
    }, []);
    /*
   * =========================================================
   * COLLECT CLUE
   * =========================================================
   */ const collectClue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((object)=>{
        if (!object.clueId) {
            return;
        }
        const clue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$data$2f$clues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clues"].find((clueItem)=>clueItem.id === object.clueId);
        if (!clue) {
            return;
        }
        /*
         * Already collected
         */ if (collectedClues.includes(clue.id)) {
            setFakeMessage(`You already found this clue. The letter ${clue.letter} is saved in your book.`);
            return;
        }
        /*
 * =========================================================
 * LAYOUT 2 — TEACHER DESK PASSWORD
 * =========================================================
 */ const submitTeacherDeskPassword1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            const password = passwordInput.trim().toLowerCase();
            if (password !== 'medicine') {
                setFakeMessage('INCORRECT PASSWORD!\n\nThe password is not correct. Collect the hidden clues and try again.');
                return;
            }
            /*
     * Correct password
     */ setTeacherDeskUnlocked(true);
            setPasswordOpen(false);
            setPasswordInput('');
            setFakeMessage('PASSWORD ACCEPTED!\n\nThe teacher desk is unlocked. Your next healthcare English challenge is ready.');
        }, [
            passwordInput
        ]);
        /*
         * Save clue
         */ setCollectedClues((current)=>[
                ...current,
                clue.id
            ]);
        /*
         * Show clue message
         */ setFakeMessage(`YOU FOUND A CLUE!\n\nYou found a clue! Save this letter in your book. Maybe it'll be useful.\n\nLETTER: ${clue.letter}`);
    }, [
        collectedClues
    ]);
    /*
   * =========================================================
   * FAKE INTERACTION MESSAGE
   * =========================================================
   */ const getFakeInteractionMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((objectId)=>{
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
            case 'l2_projector':
                return 'The classroom projector is mounted above the room.';
            case 'l2_left_curtain':
                return 'The classroom curtain is closed.';
            case 'l2_right_curtain':
                return 'The classroom curtain is closed.';
            case 'l2_wall_decoration_upper':
                return 'A decoration hangs on the classroom wall.';
            case 'l2_whiteboard':
                return 'A board.';
            case 'l2_wall_decoration_lower':
                return 'A dark wall decoration is mounted here.';
            default:
                return 'There is nothing interesting here.';
        }
    }, []);
    /*
   * =========================================================
   * OPEN NEXT CHALLENGE
   * =========================================================
   */ const openNextChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetObject)=>{
        const object = targetObject ?? nearObj;
        if (!object) {
            return;
        }
        const interactionType = getInteractionType(object);
        /*
         * =====================================================
         * WHITEBOARD
         * =====================================================
         */ if (layout === 1 && interactionType === 'whiteboard') {
            const nextWhiteboard = whiteboardChallenges.find((challengeItem)=>!solved.includes(challengeItem.id));
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
            if (!whiteboardCompleted) {
                setFakeMessage(`The drawer is locked. Complete all ${whiteboardChallenges.length} whiteboard challenges first.`);
                return;
            }
            const nextDrawer = drawerChallenges.find((challengeItem)=>!solved.includes(challengeItem.id));
            if (!nextDrawer) {
                setFakeMessage('All 5 drawer challenges have already been completed.');
                return;
            }
            setFakeMessage(null);
            setChallenge(nextDrawer.id);
            setChoice(null);
            setFeedback(null);
            return;
        }
        /*
         * =====================================================
         * OTHER OBJECTS / OTHER LAYOUTS
         * =====================================================
         */ const next = activeChallenges.find((challengeItem)=>!solved.includes(challengeItem.id));
        if (!next) {
            return;
        }
        setFakeMessage(null);
        setChallenge(next.id);
        setChoice(null);
        setFeedback(null);
    }, [
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
 * TEACHER DESK PASSWORD
 * =========================================================
 */ /*
   * =========================================================
   * MOVEMENT + COLLISION
   * =========================================================
   */ const tryMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((dx, dy)=>{
        setPos((current)=>{
            const playerW = 2;
            const playerH = 3;
            const collides = (x, y)=>{
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
            };
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
        });
    }, [
        visibleObjects
    ]);
    /*
   * =========================================================
   * KEYBOARD INPUT
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const down = (event)=>{
            const key = event.key.toLowerCase();
            /*
         * Prevent page scrolling
         */ if (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright' || key === ' ' || key === 'f2') {
                event.preventDefault();
            }
            /*
         * =====================================================
         * F2 — DEBUG COLLISION
         * =====================================================
         *
         * event.repeat is blocked so holding F2 does not
         * toggle the mode multiple times.
         */ if (key === 'f2' && !event.repeat) {
                setDebugCollision((current)=>!current);
                return;
            }
            /*
         * Save pressed key
         */ setKeys((value)=>({
                    ...value,
                    [key]: true
                }));
            /*
         * =====================================================
         * ESCAPE
         * =====================================================
         */ if (key === 'escape') {
                event.preventDefault();
                if (challenge) {
                    setChallenge(null);
                    setChoice(null);
                    setFeedback(null);
                }
                if (fakeMessage) {
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
                const interactionType = getInteractionType(nearObj);
                /*
 * TEACHER DESK
 */ if (interactionType === 'teacher-desk' && layout === 2) {
                    if (teacherDeskUnlocked) {
                        openNextChallenge();
                        return;
                    }
                    setPasswordInput('');
                    setPasswordOpen(true);
                    return;
                }
                /*
           * REAL CHALLENGE
           */ if (interactionType === 'whiteboard' || interactionType === 'drawer') {
                    openNextChallenge();
                    return;
                }
                /*
 * TEACHER DESK
 */ if (interactionType === 'teacher-desk' && layout === 2) {
                    if (teacherDeskUnlocked) {
                        openNextChallenge();
                        return;
                    }
                    setPasswordInput('');
                    setPasswordOpen(true);
                    return;
                }
                /*
 * CLUE INTERACTION
 */ if (nearObj && nearObj.clueId) {
                    collectClue(nearObj);
                    return;
                }
                /*
           * FAKE INTERACTION
           */ setFakeMessage(getFakeInteractionMessage(nearObj.id));
            }
        };
        const up = (event)=>{
            const key = event.key.toLowerCase();
            setKeys((value)=>({
                    ...value,
                    [key]: false
                }));
        };
        const blur = ()=>{
            setKeys({});
        };
        window.addEventListener('keydown', down);
        window.addEventListener('keyup', up);
        window.addEventListener('blur', blur);
        return ()=>{
            window.removeEventListener('keydown', down);
            window.removeEventListener('keyup', up);
            window.removeEventListener('blur', blur);
        };
    }, [
        challenge,
        fakeMessage,
        nearObj,
        transitioning,
        openNextChallenge,
        getInteractionType,
        getFakeInteractionMessage,
        collectClue,
        teacherDeskUnlocked
    ]);
    /*
   * =========================================================
   * MOVEMENT LOOP
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let animationFrame = 0;
        const updateMovement = ()=>{
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
        };
        animationFrame = requestAnimationFrame(updateMovement);
        return ()=>{
            cancelAnimationFrame(animationFrame);
        };
    }, [
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
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!walking) {
            setFrame(0);
            return;
        }
        const timer = window.setInterval(()=>{
            setFrame((current)=>current === 0 ? 1 : 0);
        }, 150);
        return ()=>{
            window.clearInterval(timer);
        };
    }, [
        walking
    ]);
    /*
   * =========================================================
   * ROOM TRANSITIONS
   * =========================================================
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (transitioning) {
            return;
        }
        /*
     * LAYOUT 1 → 2
     */ if (layout === 1 && currentLayoutCompleted && pos.x < 12 && pos.y > 82) {
            setTransitioning(true);
            window.setTimeout(()=>{
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
            }, 700);
            return;
        }
        /*
     * LAYOUT 2 → 3
     */ if (layout === 2 && currentLayoutCompleted && pos.x < 12 && pos.y > 82) {
            setTransitioning(true);
            window.setTimeout(()=>{
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
            }, 700);
            return;
        }
        /*
     * LAYOUT 3 → 4
     */ if (layout === 3 && currentLayoutCompleted && pos.x > 42 && pos.x < 58 && pos.y < 18) {
            setTransitioning(true);
            window.setTimeout(()=>{
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
            }, 700);
            return;
        }
        /*
     * LAYOUT 4 → 3
     */ if (layout === 4 && currentLayoutCompleted && pos.x >= 12 && pos.x <= 29 && pos.y >= 29 && pos.y <= 32) {
            setTransitioning(true);
            window.setTimeout(()=>{
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
            }, 700);
            return;
        }
    }, [
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
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (layout === 4 && currentLayoutCompleted) {
            setFinished(true);
        }
    }, [
        layout,
        currentLayoutCompleted
    ]);
    /*
   * =========================================================
   * SUBMIT CHALLENGE
   * =========================================================
   */ const continueToWhiteboardQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const firstQuestion = whiteboardChallenges.find((challengeItem)=>!solved.includes(challengeItem.id));
        if (!firstQuestion) {
            return;
        }
        setChallenge(firstQuestion.id);
        setChoice(null);
        setShortAnswer('');
        setFeedback(null);
    }, [
        whiteboardChallenges,
        solved
    ]);
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!currentChallenge) {
            return;
        }
        /*
       * SHORT ANSWER
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
       * CORRECT ANSWER
       */ setFeedback('correct');
        /*
       * Mark challenge as solved
       */ setSolved((value)=>{
            if (value.includes(currentChallenge.id)) {
                return value;
            }
            return [
                ...value,
                currentChallenge.id
            ];
        });
        /*
       * Short answer currently stops here.
       */ if (currentChallenge.type === 'short-answer') {
            return;
        }
        /*
       * Find next question
       */ window.setTimeout(()=>{
            const solvedAfterCurrent = solved.includes(currentChallenge.id) ? solved : [
                ...solved,
                currentChallenge.id
            ];
            /*
         * WHITEBOARD
         */ if (currentChallenge.id.startsWith('layout1-whiteboard-')) {
                const nextWhiteboard = whiteboardChallenges.find((challengeItem)=>!solvedAfterCurrent.includes(challengeItem.id));
                if (nextWhiteboard) {
                    setChallenge(nextWhiteboard.id);
                    setChoice(null);
                    setShortAnswer('');
                    setFeedback(null);
                    return;
                }
                setChallenge(null);
                setChoice(null);
                setShortAnswer('');
                setFeedback(null);
                setFakeMessage('WHITEBOARD COMPLETE! The drawer is now unlocked. Go to the drawer and press E.');
                return;
            }
            /*
         * DRAWER
         */ if (currentChallenge.id.startsWith('layout1-drawer-')) {
                const nextDrawer = drawerChallenges.find((challengeItem)=>!solvedAfterCurrent.includes(challengeItem.id));
                if (nextDrawer) {
                    setChallenge(nextDrawer.id);
                    setChoice(null);
                    setShortAnswer('');
                    setFeedback(null);
                    return;
                }
                setChallenge(null);
                setChoice(null);
                setShortAnswer('');
                setFeedback(null);
                setFakeMessage('DRAWER COMPLETE! All Layout 1 challenges are complete. The exit is now unlocked.');
                return;
            }
            /*
         * OTHER LAYOUTS
         */ const nextQuestion = activeChallenges.find((challengeItem)=>!solvedAfterCurrent.includes(challengeItem.id));
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
        }, 700);
    }, [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "game-shell fixed inset-0 z-50 flex min-h-screen items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel max-w-2xl p-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-black text-yellow-200",
                        children: "CONGRATULATIONS!"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2003,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 text-xl font-black text-cyan-200",
                        children: "YOU HAVE COMPLETED THE HEALTHCARE ENGLISH CHALLENGE."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2009,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-sm text-slate-400",
                        children: "You explored all four layouts and completed all healthcare English challenges."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2015,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "retro-btn mt-7 px-5 py-3",
                        onClick: ()=>location.reload(),
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2023,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 2001,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 1999,
            columnNumber: 7
        }, this);
    }
    /*
   * =========================================================
   * MAIN GAME
   * =========================================================
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "game-shell fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] h-[100vh] max-h-screen w-auto max-w-screen overflow-hidden border-4 border-[#20272e] bg-[#59606a] shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Room$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        roomObjects: visibleObjects,
                        nearId: nearObj?.id ?? null,
                        collected: new Set(),
                        onInteract: (object)=>{
                            if (!object.interactive || challenge || fakeMessage || transitioning) {
                                return;
                            }
                            const interactionType = getInteractionType(nearObj);
                            /*
 * =====================================================
 * LAYOUT 2 — TEACHER DESK PASSWORD
 * =====================================================
 */ if (layout === 2 && nearObj.id === 'l2_teacher_desk') {
                                if (teacherDeskUnlocked) {
                                    openNextChallenge();
                                    return;
                                }
                                setPasswordOpen(true);
                                setPasswordInput('');
                                return;
                            }
                            /*
 * REAL CHALLENGE
 */ if (interactionType === 'whiteboard' || interactionType === 'drawer') {
                                openNextChallenge();
                                return;
                            }
                            /*
                 * REAL CHALLENGE
                 */ if (interactionType === 'whiteboard' || interactionType === 'drawer') {
                                openNextChallenge();
                                return;
                            }
                            /*
                 * FAKE INTERACTION
                 */ /*
 * CLUE INTERACTION
 */ if (object.clueId) {
                                collectClue(object);
                                return;
                            }
                            /*
 * FAKE INTERACTION
 */ setFakeMessage(getFakeInteractionMessage(object.id));
                        },
                        layout: layout
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2062,
                        columnNumber: 11
                    }, this),
                    debugCollision && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-[35]",
                        "aria-hidden": "true",
                        children: visibleObjects.filter((object)=>object.solid).map((object)=>{
                            const isInteractive = object.interactive;
                            const isNear = nearObj?.id === object.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute box-border border-2 ${isNear ? 'border-yellow-300 bg-yellow-300/20' : isInteractive ? 'border-cyan-300 bg-cyan-300/10' : 'border-red-400 bg-red-400/10'}`,
                                style: {
                                    left: `${object.x}%`,
                                    top: `${object.y}%`,
                                    width: `${object.w}%`,
                                    height: `${object.h}%`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute -top-4 left-0 whitespace-nowrap px-1 text-[7px] font-black ${isNear ? 'bg-yellow-300 text-black' : isInteractive ? 'bg-cyan-300 text-black' : 'bg-red-400 text-black'}`,
                                    children: [
                                        object.name,
                                        isNear && ' [NEAR]'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2250,
                                    columnNumber: 25
                                }, this)
                            }, `debug-${object.id}`, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2233,
                                columnNumber: 23
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2211,
                        columnNumber: 13
                    }, this),
                    debugCollision && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute right-3 top-3 z-[60] border-2 border-yellow-300 bg-black/85 px-3 py-2 text-[9px] font-black text-yellow-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "COLLISION DEBUG: ON"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2287,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-red-300",
                                children: "RED = SOLID"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2291,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-cyan-300",
                                children: "CYAN = INTERACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2295,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-yellow-200",
                                children: "YELLOW = NEAREST"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2299,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-white",
                                children: "PRESS F2 TO HIDE"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2303,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2285,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$Player$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        x: pos.x,
                        y: pos.y,
                        direction: direction,
                        walking: walking,
                        frame: frame
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-3 top-3 z-40 border-2 border-[#20272e] bg-black/75 px-3 py-2 text-[10px] font-black text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "LAYOUT ",
                                    layout
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 2335,
                                columnNumber: 13
                            }, this),
                            !currentLayoutCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-yellow-200",
                                children: "COMPLETE ALL CHALLENGES"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2345,
                                columnNumber: 15
                            }, this),
                            currentLayoutCompleted && layout < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-green-300",
                                children: "EXIT UNLOCKED"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2356,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2329,
                        columnNumber: 11
                    }, this),
                    nearObj && !challenge && !fakeMessage && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 z-50 -translate-x-1/2 border-2 border-yellow-300 bg-black/85 px-5 py-3 text-center text-xs font-black text-yellow-100",
                        children: [
                            "[E] INTERACT —",
                            ' ',
                            nearObj.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2376,
                        columnNumber: 15
                    }, this),
                    passwordOpen && layout === 2 && !challenge && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[95] flex items-center justify-center bg-black/70 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xl border-4 border-[#20272e] bg-[#111820] shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b-4 border-yellow-300 bg-black/80 px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-black tracking-widest text-yellow-300",
                                            children: "TEACHER DESK"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2400,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xl font-black text-white",
                                            children: "ENTER PASSWORD"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2406,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2398,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-slate-600 bg-black/50 p-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-sm font-bold leading-relaxed text-slate-200",
                                                children: [
                                                    "You found several hidden letters around the classroom.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                        lineNumber: 2423,
                                                        columnNumber: 15
                                                    }, this),
                                                    "Put the letters together to unlock the Teacher Desk."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                lineNumber: 2419,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2417,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoFocus: true,
                                            type: "text",
                                            value: passwordInput,
                                            onChange: (event)=>setPasswordInput(event.target.value),
                                            onKeyDown: (event)=>{
                                                if (event.key === 'Enter') {
                                                    submitTeacherDeskPassword();
                                                }
                                                if (event.key === 'Escape') {
                                                    setPasswordOpen(false);
                                                    setPasswordInput('');
                                                }
                                            },
                                            placeholder: "ENTER PASSWORD",
                                            className: "mt-6 w-full border-4 border-cyan-300 bg-black px-4 py-4 text-center text-lg font-black uppercase tracking-[0.3em] text-white outline-none placeholder:text-slate-600 focus:border-yellow-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2432,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "retro-btn px-7 py-3 text-xs font-black",
                                                    onClick: submitTeacherDeskPassword,
                                                    children: "UNLOCK"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                    lineNumber: 2469,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "border-2 border-slate-500 bg-black px-7 py-3 text-xs font-black text-slate-300",
                                                    onClick: ()=>{
                                                        setPasswordOpen(false);
                                                        setPasswordInput('');
                                                    },
                                                    children: "CANCEL"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                    lineNumber: 2482,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2467,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 text-center text-[9px] font-black text-slate-500",
                                            children: "PRESS ENTER TO SUBMIT • ESC TO CANCEL"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2501,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2415,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 2396,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2394,
                        columnNumber: 5
                    }, this),
                    fakeMessage && !challenge && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[90] flex items-center justify-center bg-black/60 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xl border-4 border-[#20272e] bg-[#111820] shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b-4 border-cyan-300 bg-black/80 px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-black tracking-widest text-cyan-300",
                                            children: "INTERACTION"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2530,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xl font-black text-white",
                                            children: nearObj?.name ?? 'OBJECT'
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2536,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2528,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-slate-600 bg-black/50 p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "whitespace-pre-line text-base font-bold leading-relaxed text-slate-100",
                                                children: fakeMessage
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                lineNumber: 2549,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2547,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 text-center text-[10px] font-black text-slate-400",
                                            children: "PRESS ESC TO CLOSE"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2558,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "retro-btn px-8 py-3 text-xs font-black",
                                                onClick: ()=>setFakeMessage(null),
                                                children: "CLOSE"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                lineNumber: 2567,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2565,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2545,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 2526,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2524,
                        columnNumber: 15
                    }, this),
                    (layout === 1 && pos.x < 12 && pos.y > 82 && !currentLayoutCompleted || layout === 2 && pos.x < 12 && pos.y > 82 && !currentLayoutCompleted || layout === 3 && pos.x > 42 && pos.x < 58 && pos.y < 18 && !currentLayoutCompleted || layout === 4 && pos.x >= 12 && pos.x <= 29 && pos.y >= 29 && pos.y <= 32 && !currentLayoutCompleted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 z-50 -translate-x-1/2 border-2 border-red-400 bg-black/85 px-5 py-3 text-center text-xs font-black text-red-200",
                        children: [
                            "🔒 EXIT LOCKED",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-[9px] text-white",
                                children: "COMPLETE ALL CHALLENGES FIRST"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                lineNumber: 2624,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2620,
                        columnNumber: 13
                    }, this),
                    transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[100] flex items-center justify-center bg-black/70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-black text-yellow-200",
                                    children: "ENTERING NEXT ROOM..."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2645,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-slate-300",
                                    children: layout < 4 ? `LAYOUT ${layout + 1}` : 'RETURNING'
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2651,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 2643,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2641,
                        columnNumber: 13
                    }, this),
                    passwordOpen && layout === 2 && !challenge && !transitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[95] flex items-center justify-center bg-black/70 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xl border-4 border-[#20272e] bg-[#111820] shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b-4 border-cyan-300 bg-black/80 px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-black tracking-widest text-cyan-300",
                                            children: "TEACHER DESK"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2680,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xl font-black text-white",
                                            children: "PASSWORD REQUIRED"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2686,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2678,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-slate-600 bg-black/50 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-sm font-bold leading-relaxed text-slate-200",
                                                    children: "Enter the password you discovered from the hidden clues."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                    lineNumber: 2698,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: passwordInput,
                                                    onChange: (event)=>setPasswordInput(event.target.value),
                                                    onKeyDown: (event)=>{
                                                        if (event.key === 'Enter') {
                                                            submitTeacherDeskPassword();
                                                        }
                                                        if (event.key === 'Escape') {
                                                            setPasswordOpen(false);
                                                            setPasswordInput('');
                                                        }
                                                    },
                                                    autoFocus: true,
                                                    placeholder: "ENTER PASSWORD",
                                                    className: "mt-6 w-full border-2 border-cyan-300 bg-black px-4 py-4 text-center text-lg font-black uppercase tracking-widest text-white outline-none placeholder:text-slate-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                    lineNumber: 2705,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2696,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "retro-btn px-6 py-3 text-xs font-black",
                                                    onClick: submitTeacherDeskPassword,
                                                    children: "UNLOCK"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                    lineNumber: 2743,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "retro-btn px-6 py-3 text-xs font-black",
                                                    onClick: ()=>{
                                                        setPasswordOpen(false);
                                                        setPasswordInput('');
                                                    },
                                                    children: "CANCEL"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                                    lineNumber: 2755,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2741,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 text-center text-[10px] font-black text-slate-400",
                                            children: "PRESS ENTER TO SUBMIT • ESC TO CLOSE"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                            lineNumber: 2773,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                                    lineNumber: 2694,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                            lineNumber: 2676,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                        lineNumber: 2674,
                        columnNumber: 5
                    }, this),
                    challenge && currentChallenge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$healthcare$2d$english$2d$game$2f$healthcare$2d$english$2d$game$2f$components$2f$ChallengeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 2794,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
                lineNumber: 2055,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
            lineNumber: 2053,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/healthcare-english-game/healthcare-english-game/components/Game.tsx",
        lineNumber: 2051,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__99049be1._.js.map