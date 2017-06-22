'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.option('skip-install', {
      desc:     'Whether dependencies should be installed',
      defaults: false
    });
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the riveting ' + chalk.red('kylin-react') + ' generator!'
    ));

    var prompts = [ 
        {
            type: 'input',
            name: 'name',
            message: 'name of app:', default: "kylin-react"
        },
        {
            type: 'input',
            name: 'description',
            message: 'description:', default: "kylin-react"
        },
        {
            type: 'input',
            name: 'repo',
            message: 'git repository:', default: "https://github.com/ycjcl868/generator-react-kylin"
        },
        {
            type: 'input',
            name: 'license',
            message: 'license:', default: "MIT"
        },
        {
            type: 'input',
            name: 'author',
            message: 'author:', default: this.author
        }        
   ];

    this.prompt(prompts, function (props) {
        this.name = props.name;
        this.pkgName = props.name;
        this.repo = props.repo;
        this.license = props.license;
        this.author = props.author;
        this.description = props.description;
        done();
    }.bind(this));
  },

  writing: {
    config: function () {
      this.template('package.json', 'package.json');
      this.template('index.html','index.html')
    },
    file: function() {
      this.copy('.babelrc','.babelrc')
      this.copy('gitignore','.gitignore')
      this.copy('readme.md','readme.md')
      this.copy('tsconfig.json','tsconfig.json')
      this.copy('webpack.config.dev.js','webpack.config.dev.js')
      this.copy('webpack.config.js','webpack.config.js')
    },
    dir: function() {
      this.directory('src','src')
    }
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      callback: function() {
        console.log(chalk.green('安装成功'))
      }
    });
  },
  end: function() {
    // var done = this.async();
    this.log(chalk.green('进入目录运行：npm run dev 进入开发模式\n              npm run build 部署打包'));
    
    
  }
});