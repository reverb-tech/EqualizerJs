module.exports = function(grunt) {

  var config = {
    distFolder: '',
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      
      dist_scripts: {
        src: [
          //framework files
          'framework/validation/email.js',
          'framework/validation/number.js',

          'framework/formatHelper/phoneNumber.js',
          'framework/formatHelper/mobileNumber.js',
          'framework/formatHelper/integerNumber.js',
          'framework/formatHelper/decimalNumber.js',
          'framework/formatHelper/datetimeFormat.js',
        ],
        dest: "dist/equalizer.js",
      },
    },

    uglify: {
      options: {
        mangle: {
          reserved: ['jQuery', 'Backbone']
        }
      },
      my_target: {
        files: {
          'dist/equalizer.min.js': ['dist/equalizer.js']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','uglify','less']
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //tasks
  grunt.registerTask('publishjs', ['jshint', 'concat:dist_scripts', 'uglify']);

};