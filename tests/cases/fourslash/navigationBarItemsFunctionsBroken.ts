/// <reference path="fourslash.ts"/>

////function f() {
////    function;
////}

verify.navigationBar([
    {
        "text": "<global>",
        "kind": "module",
        "childItems": [
            {
                "text": "f",
                "kind": "function"
            }
        ]
    },
    {
        "text": "f",
        "kind": "function",
        "childItems": [
            {
                "text": "<function>",
                "kind": "function"
            }
        ],
        "indent": 1
    }
]);
