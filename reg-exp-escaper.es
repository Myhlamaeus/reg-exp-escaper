const chrs = "-[]/{}()*+?.\\^$|".split(""),
    escapeRegExp = new RegExp("(?:" + chrs.map(function(chr) {
        return "\\" + chr;
    }).join("|") + ")", "g"),
    escapeCallback = function(chr) {
        return "\\" + chr;
    },
    unescapeRegExp = new RegExp("(?:" + chrs.map(function(chr) {
        return "\\\\\\" + chr;
    }).join("|") + ")", "g"),
    unescapeCallback = function(chr) {
        return chr.slice(1);
    };

export const escape = function(str) {
    str.replace(escapeRegExp, escapeCallback);
};

export const unescape = function(str) {
    str.replace(unescapeRegExp, unescapeCallback);
};
