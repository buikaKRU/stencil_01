import { Component, Element, Prop } from '@stencil/core';


/** DESIGN SYSTEM list to display components
*/
@Component({
    tag: 'ds-system-list',
    styleUrl: 'system-list.less',
})

export class DesignSystem {

    @Element() el: HTMLElement;

    /**Main property to get the data */
    @Prop({mutable: true}) public data
  




    render() {

        
        return [
            <h6>[ds-system-list]</h6>,
       


            
        ]
    }
}

