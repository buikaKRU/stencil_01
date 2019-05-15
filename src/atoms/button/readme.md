# uc-button



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute     | Description                                             | Type                          | Default     |
| -------------------------- | ------------- | ------------------------------------------------------- | ----------------------------- | ----------- |
| `buttonlabel` _(required)_ | `buttonlabel` | Button Label (required)                                 | `string`                      | `undefined` |
| `clicked`                  | --            | A callback function to be passed on clicking the button | `(event: MouseEvent) => void` | `undefined` |
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




## CSS Custom Properties

| Name             | Description           |
| ---------------- | --------------------- |
| `--border-01`    | border for the button |
| `--color-black`  | black color           |
| `--local-height` | height of the button  |
| `--padding-01`   | standard pading       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
