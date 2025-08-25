(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/register/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RegisterPage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "student"
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try {
            localStorage.setItem("user", JSON.stringify(formData));
            router.push("/");
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An error occurred during registration");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-white relative overflow-hidden text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-300/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/register/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/register/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/register/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/register/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full m-4 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo_sd.png",
                                        alt: "Logo",
                                        width: 120,
                                        height: 120,
                                        className: "mx-auto mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/register/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-blue-600",
                                    children: "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-gray-600",
                                    children: "Join StudyEase to start your learning journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 pt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-6",
                                    onSubmit: handleSubmit,
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-red-100 text-red-600 text-sm px-4 py-3 rounded-lg",
                                            role: "alert",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block sm:inline",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "firstname",
                                                                    className: "block text-sm font-medium text-black",
                                                                    children: "First Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/register/page.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "firstname",
                                                                        name: "firstname",
                                                                        type: "text",
                                                                        required: true,
                                                                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200",
                                                                        placeholder: "First Name",
                                                                        value: formData.firstname,
                                                                        onChange: handleChange
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/register/page.tsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/register/page.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "lastname",
                                                                    className: "block text-sm font-medium text-black",
                                                                    children: "Last Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/register/page.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "lastname",
                                                                        name: "lastname",
                                                                        type: "text",
                                                                        required: true,
                                                                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200",
                                                                        placeholder: "Last Name",
                                                                        value: formData.lastname,
                                                                        onChange: handleChange
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/register/page.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/register/page.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "block text-sm font-medium text-black",
                                                            children: "Email address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "email",
                                                                name: "email",
                                                                type: "email",
                                                                autoComplete: "email",
                                                                required: true,
                                                                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200",
                                                                placeholder: "Enter your email",
                                                                value: formData.email,
                                                                onChange: handleChange
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/register/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "password",
                                                            className: "block text-sm font-medium text-black",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "password",
                                                                name: "password",
                                                                type: "password",
                                                                autoComplete: "new-password",
                                                                required: true,
                                                                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200",
                                                                placeholder: "Create a password",
                                                                value: formData.password,
                                                                onChange: handleChange
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/register/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "role",
                                                            className: "block text-sm font-medium text-black",
                                                            children: "Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "role",
                                                                name: "role",
                                                                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200",
                                                                value: formData.role,
                                                                onChange: handleChange,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "student",
                                                                        children: "Student"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/register/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "professor",
                                                                        children: "Professor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/register/page.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/register/page.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/register/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "relative w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white overflow-hidden group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transition-transform group-hover:scale-[1.02] duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/register/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative",
                                                        children: "Create Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/register/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            "Already have an account?",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "font-medium text-blue-600 hover:text-blue-800 transition-colors",
                                                children: "Sign in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/register/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/register/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/register/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useState } from "react";
 // import { useRouter } from "next/navigation";
 // import Link from "next/link";
 // import Image from "next/image";
 // export default function RegisterPage() {
 //   const [formData, setFormData] = useState({
 //     firstname: "",
 //     lastname: "",
 //     email: "",
 //     password: "",
 //     role: "student",
 //   });
 //   const [error, setError] = useState("");
 //   const router = useRouter();
 //   const handleChange = (
 //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
 //   ) => {
 //     const { name, value } = e.target;
 //     setFormData((prev) => ({
 //       ...prev,
 //       [name]: value,
 //     }));
 //   };
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     setError("");
 //     try {
 //       localStorage.setItem("user", JSON.stringify(formData));
 //       router.push("/");
 //     } catch (error) {
 //       if (error instanceof Error) {
 //         setError(error.message);
 //       } else {
 //         setError("An error occurred during registration");
 //       }
 //     }
 //   };
 //   return (
 //     <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
 //       {/* Background gradient effects */}
 //       <div className="absolute inset-0 overflow-hidden">
 //         <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-3xl" />
 //         <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-pink-500/20 blur-3xl" />
 //         <div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-3xl" />
 //       </div>
 //       {/* Register card */}
 //       <div className="max-w-md w-full m-4 relative">
 //         <div className="bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20">
 //           {/* Logo section */}
 //           <div className="p-8 text-center">
 //             <div className="flex justify-center mb-6">
 //               <Image
 //                 src="/logo.svg"
 //                 alt="StudyEase Logo"
 //                 width={280}
 //                 height={60}
 //               />
 //             </div>
 //             <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
 //               Create Account
 //             </h2>
 //             <p className="mt-2 text-sm text-muted-foreground">
 //               Join StudyEase to start your learning journey
 //             </p>
 //           </div>
 //           {/* Form section */}
 //           <div className="p-8 pt-0">
 //             <form className="space-y-6" onSubmit={handleSubmit}>
 //               {error && (
 //                 <div
 //                   className="bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-lg"
 //                   role="alert"
 //                 >
 //                   <span className="block sm:inline">{error}</span>
 //                 </div>
 //               )}
 //               <div className="space-y-4">
 //                 <div className="grid grid-cols-2 gap-4">
 //                   <div>
 //                     <label
 //                       htmlFor="firstname"
 //                       className="block text-sm font-medium text-foreground"
 //                     >
 //                       First Name
 //                     </label>
 //                     <div className="mt-1">
 //                       <input
 //                         id="firstname"
 //                         name="firstname"
 //                         type="text"
 //                         required
 //                         className="appearance-none block w-full px-3 py-2 border border-input/50 rounded-lg bg-background/50 backdrop-blur-sm shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all duration-200"
 //                         placeholder="First Name"
 //                         value={formData.firstname}
 //                         onChange={handleChange}
 //                       />
 //                     </div>
 //                   </div>
 //                   <div>
 //                     <label
 //                       htmlFor="lastname"
 //                       className="block text-sm font-medium text-foreground"
 //                     >
 //                       Last Name
 //                     </label>
 //                     <div className="mt-1">
 //                       <input
 //                         id="lastname"
 //                         name="lastname"
 //                         type="text"
 //                         required
 //                         className="appearance-none block w-full px-3 py-2 border border-input/50 rounded-lg bg-background/50 backdrop-blur-sm shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all duration-200"
 //                         placeholder="Last Name"
 //                         value={formData.lastname}
 //                         onChange={handleChange}
 //                       />
 //                     </div>
 //                   </div>
 //                 </div>
 //                 <div>
 //                   <label
 //                     htmlFor="email"
 //                     className="block text-sm font-medium text-foreground"
 //                   >
 //                     Email address
 //                   </label>
 //                   <div className="mt-1">
 //                     <input
 //                       id="email"
 //                       name="email"
 //                       type="email"
 //                       autoComplete="email"
 //                       required
 //                       className="appearance-none block w-full px-3 py-2 border border-input/50 rounded-lg bg-background/50 backdrop-blur-sm shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all duration-200"
 //                       placeholder="Enter your email"
 //                       value={formData.email}
 //                       onChange={handleChange}
 //                     />
 //                   </div>
 //                 </div>
 //                 <div>
 //                   <label
 //                     htmlFor="password"
 //                     className="block text-sm font-medium text-foreground"
 //                   >
 //                     Password
 //                   </label>
 //                   <div className="mt-1">
 //                     <input
 //                       id="password"
 //                       name="password"
 //                       type="password"
 //                       autoComplete="new-password"
 //                       required
 //                       className="appearance-none block w-full px-3 py-2 border border-input/50 rounded-lg bg-background/50 backdrop-blur-sm shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all duration-200"
 //                       placeholder="Create a password"
 //                       value={formData.password}
 //                       onChange={handleChange}
 //                     />
 //                   </div>
 //                 </div>
 //                 <div>
 //                   <label
 //                     htmlFor="role"
 //                     className="block text-sm font-medium text-foreground"
 //                   >
 //                     Role
 //                   </label>
 //                   <div className="mt-1">
 //                     <select
 //                       id="role"
 //                       name="role"
 //                       className="appearance-none block w-full px-3 py-2 border border-input/50 rounded-lg bg-background/50 backdrop-blur-sm shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all duration-200"
 //                       value={formData.role}
 //                       onChange={handleChange}
 //                     >
 //                       <option value="student">Student</option>
 //                       <option value="professor">Professor</option>
 //                     </select>
 //                   </div>
 //                 </div>
 //               </div>
 //               <div>
 //                 <button
 //                   type="submit"
 //                   className="relative w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white overflow-hidden group"
 //                 >
 //                   {/* Button gradient background */}
 //                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform group-hover:scale-[1.02] duration-200" />
 //                   {/* Button content */}
 //                   <span className="relative">Create Account</span>
 //                 </button>
 //               </div>
 //             </form>
 //             {/* Sign in link */}
 //             <div className="mt-6 text-center">
 //               <p className="text-sm text-muted-foreground">
 //                 Already have an account?{" "}
 //                 <Link
 //                   href="/login"
 //                   className="font-medium text-foreground hover:text-primary transition-colors"
 //                 >
 //                   Sign in
 //                 </Link>
 //               </p>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // }
_s(RegisterPage, "xGmtYnPuSB7hvu8m+oycJA+4j3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RegisterPage;
var _c;
__turbopack_context__.k.register(_c, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_register_page_tsx_e3da4879._.js.map