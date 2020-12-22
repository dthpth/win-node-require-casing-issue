``` js
const myModule = require("./MyClass");

const myModuleAlt = require("../src/MyClass");

const myClassInstance = new myModule.MyClass();

if (myClassInstance instanceof myModuleAlt.MyClass) {
  console.log("instanceof passed");
} else {
  console.log("instanceof not passed");
}
```

```
> node src/index.js
instanceof passed
```

```
> node SRC/index.js
instanceof not passed
```

---
### Another Window-specific cases

``` js
const myModule = require("./MyClass");

const myModuleAlt = require("../SRC/MyClass");

const myClassInstance = new myModule.MyClass();

if (myClassInstance instanceof myModuleAlt.MyClass) {
  console.log("instanceof passed");
} else {
  console.log("instanceof not passed");
}
```

```
> node src/index-win.js
instanceof not passed
```

```
> node SRC/index-win.js
instanceof passed
```
