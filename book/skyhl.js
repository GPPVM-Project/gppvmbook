hljs.registerLanguage("sky", function (hljs) {
    return {
        name: 'SkyLC',
        keywords: 'let def return if else for while match',
        contains: [
            hljs.C_LINE_COMMENT,
            hljs.C_BLOCK_COMMENT,
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            {
                className: 'function',
                beginKeywords: 'def',
                end: /[{;]/,
                excludeEnd: true,
                contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w+/ })]
            }
        ]
    };
});
