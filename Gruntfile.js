module.exports = function (grunt)
{
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: '*',
                    livereload: true,
                    open: {
                        target: 'http://127.0.0.1:1337'
                    },
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        csslint: {
            strict: {
                src: ['assets/css/style.css'],
                options: {
                    import: 2
                }
            }
        },
        jshint: {
            files: ['assets/js/main.js']
        },
        less: {
            build: {
                files: {
                    'assets/css/style.css': 'assets/less/style.less'
                },
                options: {
                    cleancss: true
                }
            }
        },
        validation: {
            files: {
                src: ['*.html']
            }
        },
        watch: {
            build: {
                files: [
                    'assets/js/**',
                    'assets/less/**',
                    '*.html'
                ],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('serve', ['less', 'connect', 'watch']);
    grunt.registerTask('default', ['serve']);
};
