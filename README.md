Install and execution commands

Dowload the zip.
Go to the GLOR_Starter_Kit Folder (via console)
Type:

`$ npm install`  
`$ bower install`  
`$ node server` or `$ npm start`  

`http://localhost:3000` 

You should seen "GLOR!" on your console's browser



## Tests and compilation

Execute grunt:
```
$ grunt
```
Compiles SASS and executes the tests

To execute only the tests
```
$ grunt test
```

To execute the SASS compilation
```
$ grunt compile
```

There is a simple test on the tests folder for the module1.js



##Project structure should be:



```
├── bower.json                
├── jshint.json
├── Gruntfile.js              
├── package.json              
├── server.js                 
├── public
│   ├── js
│   │   ├── main.js          
│   │   ├── modules
│   │   │   |── module1.js   
|	|	|	
│   └── css           			# here the sass will be compiled
│   |   └── base.css
|	|-- images
|	|-- sass 				
|		|-- base.scss
              
├── test
│   ├── karma.conf.js        
│   ├── test-main.js          
│   ├── modules
│   │   └── module1.js    
│   │   
└── views
    ├── index.html            

```


