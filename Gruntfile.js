module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                files: {
                    "dist/app.css": "src/app.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("default", ["sass"]);
};
