const myModule = require("./MyClass");

const myModuleAlt = require("../SRC/MyClass");

const myClassInstance = new myModule.MyClass();

if (myClassInstance instanceof myModuleAlt.MyClass) {
  console.log("instanceof passed");
} else {
  console.log("instanceof not passed");
}
