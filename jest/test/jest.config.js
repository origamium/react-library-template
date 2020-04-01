module.exports = {
    rootDir: "../../",
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "./*\\.(test|spec)\\.tsx?$",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/jest/fileMock.js",
        "\\.(css|less)$": "<rootDir>/jest/styleMock.js"
    },
    moduleFileExtensions: ["js", "ts", "tsx"]
};
