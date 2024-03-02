# Understanding how to run the program using provided command

-   Build command : `yarn build`
-   serving command : `yarn server`

To make it seamlesly to run the program and auto update the page, you have to
open two terminal, one for watching the build process, another is used to serving
the program.

# 003-react-event-handling

[Responding to Events](https://react.dev/learn/adding-interactivity)

# Development Stage

-   how to add key for `children` list of element?

Current Solution

```JavaScript
const element = React.createElement("div", {
  children: [
    React.createElement(ButtonHandlerBind, { key: "buttonKey" }),
    React.createElement(MainApp, { key: "mainAppKey" }),
  ],
});
```

Equivalent jsx

```jsx
const element = (
    <div>
        <ButtonHandlerBind key="buttonKey" />
        <MainApp key="mainAppKey" />
    </div>
);
```

Another example of solution

```javascript
function BeritaHome() {
  let [mainBerita, ...berita] = DaftarBerita.databerita;

  const secondaryBeritaElements = berita.map((item, index) =>
    React.createElement(SecondaryBerita, { berita: item, key: index })
  );

  return React.createElement('div', null, secondaryBeritaElements);
}
```

Equivalent with

```jsx
function BeritaHome() {
    let [mainBerita, ...berita] = DaftarBerita.databerita;

    return (
        <div>
            {berita.map((item, index) => {
                return <SecondaryBerita berita={item} key={index} />;
            })}
        </div>
    );
}
```