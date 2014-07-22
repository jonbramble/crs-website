module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      production: {
        expand: true,
        cwd: '_site/css',
        src: ['_site/*.css'],
        dest: '_site/css'
      }
    },
    uglify: {
      production: {
        files: {
          '_site/js/app.min.js': '_site/js/app.js'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};


