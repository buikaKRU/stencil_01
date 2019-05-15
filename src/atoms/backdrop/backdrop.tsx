import { Component, Prop, Method, Element } from '@stencil/core';


// const usage = {
//     test1: 'test'
// }

/** an Backdrop Atom. this is short description from over @Component decorator*/
@Component({
    tag: 'uc-backdrop',
    styleUrl: 'backdrop.less',
    // shadow: true,
})

export class Backdrop {

    /**Some element description */
    @Element() el: HTMLElement;

    /**visbility */
    @Prop({mutable: true, reflectToAttr: true}) visible = false;

    /**Interactivity: backdrop qould be weather blocking one or interactive one */
    @Prop() interactive: false;

    /**QA required ID */
    @Prop() qa!: string;

    /** Clicked event handler*/
    @Prop() clicked: any;
    // (MouseEvent) => void;
    

    @Method()
    visbilityToggle() {

    }

    /**Just for testing the inner component method with output. */
    /** Method returns an input string followed by Date.now() output*/ 
    @Method()
    testMethodWithOutput(/**input description before */input: string)/**there should be some description here */: string {
        var para = document.createElement("P");   
        para.style.textAlign = 'right'
        var t = document.createTextNode(`${input} - ${Date.now()}`);      
        para.appendChild(t);                                          
        this.el.appendChild(para);           
        
        return `${input} - ${Date.now()}`
    }



    render() {
        const classes = `uc-Backdrop ${!this.visible ? 'uc-Backdrop-hidden' : ''}`;
        return <div class={classes} onClick={this.clicked}><slot name="test"></slot></div>
    }
}