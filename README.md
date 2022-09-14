# 001-style-react-element-inlint

Normally when you code with HTML using css you can write the inline css, like:  

```html
<div style="width: 200px; height: 200px; background-color: blue">
</div>
```

if you add the code to `React Component` directly, like:

```html
<script>
    const root = document.querySelector("#root")

    const element = (
        <div style="width: 200px; height: 200px; background-color: blue">
        </div>
    )
    ReactDOM.render(element, root)
</script>
```

it will cause an erorr. and the error is

```txt
Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
    at assertValidProps (react-dom.development.js:2950:13)
    at setInitialProperties (react-dom.development.js:9930:5)
    at finalizeInitialChildren (react-dom.development.js:10960:5)
    at completeWork (react-dom.development.js:22203:19)
    at completeUnitOfWork (react-dom.development.js:26603:18)
    at performUnitOfWork (react-dom.development.js:26578:7)
    at workLoopSync (react-dom.development.js:26476:7)
    at renderRootSync (react-dom.development.js:26444:9)
    at performSyncWorkOnRoot (react-dom.development.js:26095:22)
    at flushSyncCallbacks (react-dom.development.js:12052:24)
```

to get it right **you have to make the inline style becomes Javascript Object**.

```html
<script>
    const root = document.querySelector("#root")

    const element = (
        <div style={ // first bracket is used for embed js notation 
            { // actual objet
                width: "200px",
                height: "200px", 
                backgroundColor: "blue"
            }}>
        </div>
    )
    ReactDOM.render(element, root)
</script>
```

* the value of the key object must be string, because it contain number and character.
* if the key has two word-root, you have to define it using camelCase. 

<details>
    <summary> Simplify the code to make it readable </summary>

```html
<script>
    const root = document.querySelector("#root")

    let elementStyle = {
                width: "200px",
                height: "200px", 
                backgroundColor: "blue"
    }
    const element = (
                        <div style={ elementStyle }>
                        </div>
                    )

    ReactDOM.render(element, root)

    /**
     *  Actually react is smart enough to understand you value, you can just type
     * {
     *      width: 200,
     *      height: 200,
     *      backgroundColor: 'blue'
     * } 
     * */


</script>
```
</details>
