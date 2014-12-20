import {escape} from "./reg-exp-escaper";

const compose = function(strings, values) {
    return strings.map(function(string, i) {
        if(i !== values.length) {
            string += values[i];
        }
        return string;
    }).join("");
};

export const escape = function(strings, ...values) {
    return compose(strings, values.map(escape));
};

export const re = function(strings, ...values) {
    if(strings[0].charAt(0) !== "/") {
        throw new Error("re tag: character 0 must be /");
    }
    strings[0] = strings[0].slice(1);

    const splittedLastString = strings.pop().split("/");
    if(splittedLastString.length !== 2) {
        throw new Error("re tag: string must end with / followed by the tags");
    }
    strings.push(splittedLastString[0]);

    return new RegExp(escape(strings, values), splittedLastString[1]);
};
