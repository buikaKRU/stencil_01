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

    /**A callback function to be passed on clicking the button */
    @Prop({mutable: true}) public clicked: (event: MouseEvent) => void;
    

    @Method()
    public doSomething(arg?: any): any {
        console.log('this is whatever arg', arg)
        console.log('opacity', this.el.style.opacity)
    };


    render() {
        const classes = `uc-Button uc-Button-${capitalizeFirst(this.variant)}`

        return <button class={classes} onClick={this.clicked}>{this.buttonlabel}</button>
    }
}