# uc-side-drawer

```javascript
+ this will be highlighted in green
+ this will be highlighted in red
let a = "fd"; let b = 5;

```

## Basic description

This is some text as a description. The question is if it's going to stay?

## How to use it
### Do this:
- [x] Finish my changes
- [X] Push my commits to **GitHub**
- [X] Open a pull request

### Don't do this:
- [] bla bla bla
- [] never do that


|To do:| Not to do:|
|------|-----------|
|jkjl jkjk | jjiojo jiojo jiojoij|
|  | jjlkjl|
|```diff |
|+ this will be highlighted in green |
|- this will be highlighted in red |
|``` |

------------------

### Do this:
```diff
+ this will be highlighted in green
+ this will be highlighted in red
```

### Don't do this:
```diff
- this will be highlighted in green
- this will be highlighted in red
```


<!-- Auto Generated Below -->


## Properties

| Property             | Attribute   | Description                                                                                                                                                                                   | Type                                                    | Default         |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | --------------- |
| `infoType`           | `info-type` | The atribute should have one of following values:  **'information'**((default) only for 'information);  **'warning'** (for warning notification);  **'critical'** (for super important stuff) | `"critical" \| "information" \| "success" \| "warning"` | `'information'` |
| `open`               | `open`      | Property responsible for opening/closing of the sidebar                                                                                                                                       | `boolean`                                               | `false`         |
| `sideDrawerClosing`  | --          | Method to be executed while sideBar is being closed (Example: a method changing sideBar's parent state responsible for opening)                                                               | `() => any`                                             | `undefined`     |
| `test`               | `test`      | ## Just testing of documentation creation Use the package manager [pip](https://pip.pypa.io/en/stable/) to **`install`** foobar.                                                              | `string`                                                | `'information'` |
| `title` _(required)_ | `title`     | The title of the element                                                                                                                                                                      | `string`                                                | `undefined`     |
| `visible`            | `visible`   | Setting for the conent display.  **false** - no content **true**  - content Component opening is handled by atribute 'open' which is handled by css                                           | `boolean`                                               | `false`         |


## Methods

### `doNothing(arg?: any) => any`

A method that doesn't do anything. Just here because we are playing with
automatic documentation generation.

#### Parameters

| Name  | Type  | Description                        |
| ----- | ----- | ---------------------------------- |
| `arg` | `any` | A parameter that will not be used. |

#### Returns

Type: `any`

The arg parameter you specified or undefined.


## CSS Custom Properties

| Name            | Description |
| --------------- | ----------- |
| `--color-black` | black color |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
