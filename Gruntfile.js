module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Server
    connect: {
      app: {
        options: {
          port: 4657,
          base: 'app',
          keepalive: true
        }
      }
    },
    // Compass to compile SCSS file
    compass: {
      dist: {
        options: {
          config: 'app/config.rb',
          sassDir: 'app/sass',
          cssDir: 'app/stylesheets'
        }
      }
    },
    // Task to watch changes in files
    watch: {
      all: {
        options: {
          livereload: true,

        },
        files: ['app/scripts/*.js'],
        tasks: ['jshint']
      }
    },
    githubPages: {
      target: {
        options: {
          // The default commit message for the gh-pages branch
          commitMessage: 'gh-pages push'
        },
        // The folder where your gh-pages repo is
        src: '_ghpages'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        quotmark: 'single',
        globals: {
          jQuery: true
        }
      },
      files: {
        src: ['app/scripts/*.js']
      }
    },
    concurrent: {
      target1: ['server']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-github-pages');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', function(){
    grunt.task.run([
                   'concurrent:target1',
                   'watch'
                   ]);
  });
  grunt.registerTask('gh-pages', ['githubPages:target']);
  grunt.registerTask('server', ['connect']);

};
