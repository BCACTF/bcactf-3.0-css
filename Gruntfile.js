const sass = require("node-sass");

module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                options: {
                    implementation: sass
                },
                files: {
                    "dist/app.css": "src/app.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-sass");

    grunt.registerTask("default", ["sass"]);
};
