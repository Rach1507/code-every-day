### Rollup 

build: "rollup -c"
defines a script named build that is used to bundle your JavaScript files using Rollup.

 Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. The -c flag tells Rollup to use the default configuration file, typically named rollup.config.js, located in the root of your project.

This build script is typically executed by running npm run build from the command line. When run, it triggers Rollup to bundle your project's JavaScript according to the settings and options specified in your rollup.config.js file. This process can include tasks like transpiling modern JavaScript to a format compatible with older browsers, bundling modules into a single file, minifying code, and more, depending on how you've configured Rollup.


### Webpack 

indicates you're looking at the builder configuration within the Storybook setup, specifically using webpack5 as the builder.

babel
### Babel
Purpose: Babel is a JavaScript compiler (transpiler) that converts edge JavaScript (ES6+) into backward-compatible versions of JavaScript that can run in older browsers or environments. It allows developers to use the latest JavaScript features without worrying about support issues.
Usage: In the same repository, Babel would be used to transpile JavaScript code to ensure compatibility across a wide range of browsers and environments. It can be configured with presets and plugins to target specific JavaScript versions or features.



### builder vs bundler 

### Bundler
Purpose: A bundler is specifically focused on taking modules or packages and combining them into a smaller number of files, often just a single file, to be served to a browser. 
Ex: Rollup


### Builder




 a builder encompasses a broader range of build and compile tasks, potentially including bundling as one of those tasks. A bundler, on the other hand, is specifically focused on combining modules and assets into fewer files for efficient loading in a web environment.


### .npmignore 

The .npmignore file specifies patterns that should be ignored when publishing a package to the npm registry. When you run npm publish, npm looks for a .npmignore file. If it finds one, npm uses the patterns listed in the file to determine which files and directories should not be included in the package that is uploaded to the registry. If .npmignore is not present, npm will look for a .gitignore file and use its patterns instead, with some exceptions.