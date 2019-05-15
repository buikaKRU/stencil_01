# uc-button


## Basic description

This is some text as a description. The question is if it's going to stay? The button has a few properties like 'variant' and 'ghoust' and to pas a callback function for clicking it

## How to use it

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

| Property                   | Attribute     | Description                                             | Type                          | Default     |
| -------------------------- | ------------- | ------------------------------------------------------- | ----------------------------- | ----------- |
| `buttonlabel` _(required)_ | `buttonlabel` | Button Label (required)                                 | `string`                      | `undefined` |
| `clicked`                  | --            | A callback function to be passed on clicking the button | `(event: MouseEvent) => void` | `undefined` |
| `disabled`                 | `disabled`    | Visual variant atribute                                 | `boolean`                     | `false`     |
| `ghoust`                   | `ghoust`      | Visual variant atribute                                 | `boolean`                     | `false`     |
| `variant`                  | `variant`     | Visual variant atribute. Handled by css class           | `"primary" \| "secondary"`    | `'primary'` |


## Methods

### `doSomething(arg?: any) => any`



#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| `arg` | `any` |             |

#### Returns

Type: `any`



### `returnShit() => string`



#### Returns

Type: `string`




## CSS Custom Properties

| Name             | Description           |
| ---------------- | --------------------- |
| `--border-01`    | border for the button |
| `--color-black`  | black color           |
| `--local-height` | height of the button  |
| `--padding-01`   | standard pading       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
