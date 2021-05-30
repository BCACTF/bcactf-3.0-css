const sass = require("node-sass");

module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                files: {
                    "dist/app.css": "src/app.scss"
                }
            }
        },
        watch: {
            scripts: {
                files: ["src/**/*.scss", "src/**/*.sass"],
                tasks: ["sass"],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["sass"]);
};
