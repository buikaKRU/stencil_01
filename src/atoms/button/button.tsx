import { Component, Prop, Method, Element } from '@stencil/core';
import { capitalizeFirst } from '../../utils/utils';


/** Button component to be used all across the project */
@Component({
    tag: 'uc-button',
    styleUrl: 'button.less',
    // shadow: true,
})

export class Button {

    /**Some element description */
    @Element() el: HTMLElement;

    /**Button Label (required)*/
    @Prop({reflectToAttr: true, mutable: true}) buttonlabel!: string;

    /**Visual variant atribute. Handled by css class */
    @Prop({reflectToAttr: true, mutable: true}) variant: 'primary' | 'secondary' = 'primary'

    /**Visual variant atribute */
    @Prop({reflectToAttr: true, mutable: true}) ghoust = false;

    /**Visual variant atribute */
    @Prop({reflectToAttr: true, mutable: true}) disabled = false;

    /**A callback function to be passed on clicking the button */
    @Prop({mutable: true}) public clicked: (event: MouseEvent) => void;
    

    @Method()
    public doSomething(arg?: any): any {
        console.log('this is whatever arg', arg)
    };

    
    @Method()
    public returnShit() {
        return this.thisIsSpecialNameVariable;
        // this.thisIsSpecialNameVariable;
    }

    thisIsSpecialNameVariable = `
    "timestamp": "2019-05-15T22:00:43",
    "compiler": {
        "name": "@stencil/core",
      "version": "0.16.2",
      "typescriptVersion": "3.2.2",
      "thisIsSpecialNameVariable2": "thisIsSpecialNameVariable3"
    },
    "components": [
      {
          "tag": "ds-design-system",
        "readme": "# ds-design-system\n\n\n",
        "docs": "DESIGN SYSTEM main Component",
        "usage": {},
        "props": [
            {
            "name": "background",
            "type": "string",
            "mutable": true,
            "attr": "background",
            "reflectToAttr": true,
            "docs": "This is state: background description",
            "default": "'white'",
            "optional": false,
            "required": false
          },
          {
            "name": "componentsList",
            "type": "any[]",
            "mutable": true,
            "reflectToAttr": true,
            "docs": "",
            "optional": false,
            "required": false
        },
        {
            "name": "displayds",
            "type": "boolean",
            "mutable": false,
            "attr": "displayds",
            "reflectToAttr": false,
            "docs": "",
            "default": "false",
            "optional": false,
            "required": false
        }
    ],
        "methods": [],
        "events": [],
        "styles": [
            {
                "name": "--color-black",
            "annotation": "prop",
            "docs": "black color"
        }
    ]
},
      {
          "tag": "ds-system-list",
        "readme": "# ds-design-system\n\n\n",
        "docs": "DESIGN SYSTEM list to display components",
        "usage": {},
        "props": [
          {
              "name": "data",
              "type": "any",
              "mutable": true,
            "attr": "data",
            "reflectToAttr": false,
            "docs": "Main property to get the data",
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [
          {
            "name": "--color-black",
            "annotation": "prop",
            "docs": "black color"
        }
        ]
      },
      {
        "tag": "uc-backdrop",
        "readme": "# uc-backdrop\n\n##slots\n\nNo slots. Don't paste any content within tag\n",
        "docs": "an Backdrop Atom. this is short description from over @Component decorator",
        "usage": {},
        "props": [
          {
            "name": "clicked",
            "type": "any",
            "mutable": false,
            "attr": "clicked",
            "reflectToAttr": false,
            "docs": "Clicked event handler",
            "optional": false,
            "required": false
    `
       
 
    


    render() {
        const classes = `uc-Button uc-Button-${capitalizeFirst(this.variant)}`

        return <button 
            class={classes} 
            onClick={this.clicked}
            disabled={this.disabled}>
                {this.buttonlabel}
            </button>
    }
}