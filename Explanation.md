# 002-external-stylesheet-react

when create a website with normal HTML, basically you can decorates the page using `.css` file, and the structure is like this  

```
projectRootDirectory
 | index.html
 | style.css
 | app.js
```
you can access the `style.css` using tag

```html
<head>
    <link href='app.css' rel='stylesheet'/>
</head>
```

In React case, the core functionality is the same. Now you can create the CSS file in the public directory, and the project structure is like this.  

```
projectRootDirectory
 └─── public
 |     | app.js
 |     | index.html
 |     | style.css
 └─── src
 |     | app.js
 | package.json 
```

1. Create the `css` file.

```css
body{
    background-color: black;
    margin: 0;
}

.box {
    width: 200px;
    height: 200px;
    background-color: white;
}
```
in the code above, we create `css class`, then we can use in our code.

2. JavaScript file

```html
<script>
    const root = document.querySelector("#root");

    const element = <div className="box"></div>;

    ReactDOM.render(element, root);
    
    /**
     * for the classname, you can dinamically call the className
     * for example
     * 
     * const className = "box"
     * 
     * const element = <div className={className}>
     * 
     * this might be useful if you use dinamic css class,
     * for example use conditional logic and apply it to the css.
     * example case: window_size: 100 -> yellow, 
     *               window_size: >100 -> green
     */
    
</script>
```