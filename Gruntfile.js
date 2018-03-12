module.exports = function(grunt) {

	grunt.initConfig({
		concat_css: {
			all: {
				src: ['css/lightbox.css', 'css/owl.carousel.min.css', 'css/royalslider.css', 'css/rs-default.css', 'css/materialize.min.css', 'css/style.css', 'css/responsive.css'],
				dest: "css/bundle.css"
			}
		},
		watch: {
			css: {
		        files: ['css/lightbox.css', 'css/owl.carousel.min.css', 'css/royalslider.css', 'css/rs-default.css', 'css/materialize.min.css', 'css/style.css', 'css/responsive.css'],
		        tasks: ['concat_css']
		      }
		}
	});
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
	
}