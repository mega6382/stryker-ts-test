module.exports = function(config) {
    config.set({
        files: [
            "src/**/*.ts",
            "src/**/*.json"
        ],
        mutator: "typescript",
        packageManager: "npm",
        reporters: ["html", "clear-text", "progress"],
        testRunner: "mocha",
        transpilers: ["typescript"],
        testFramework: "mocha",
        coverageAnalysis: "perTest",
        tsconfigFile: "tsconfig.json",
        mochaOptions: {
            files: ["src/**/*.ts"],
            spec: ["build/test/**/*.test.js"],
            require: ['source-map-support/register'],
        },
        mutate: ["src/**/*.ts"]
    });
};