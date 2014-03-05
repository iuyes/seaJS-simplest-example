module.exports = function(grunt){
	
	//提取依赖，并为每个模块设置模块ID
	grunt.initConfig({
		transport: {
			helloworld:{
				files:[
					{
						src : ['./js/hello.js','./js/world.js'],
						dest: '.build'
					}
				]
			}
		},
		concat: {
			helloworld:{
				files:{
					'dist/hello.js' :['.build/js/hello.js', '.build/js/world.js']
				}
			}
		},
		uglify : {
			helloworld:{
				files:{
					'dist/hello.js':['dist/hello.js']
				}
			}
		}
	});
	
	
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('test', function(){
		console.log('Gruntfile JS OK!');
	});
	grunt.registerTask('trans', ['transport']);
	grunt.registerTask('cona', ['concat']);
	grunt.registerTask('ugli', ['uglify']);
}