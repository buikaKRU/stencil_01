import { Component, Prop } from '@stencil/core';

/**designated to display snow icons */
@Component ({
    tag: 'snow-icon',
    styleUrl: 'snow-icon.less',
})
export class SnowIcon {

    /** Property responsible for displaying needed icon */
    @Prop({mutable: true, reflectToAttr: true}) wcVariant!: 'arrow-up'|'bookmark'|'calendar'|'check-list'|'check'|'circled-check'|'clock-incomplete'
                        |'info'|'warning'|'success';


    render() {

        if (!this.wcVariant) {
            this.wcVariant = 'info';
        }

        return [

                // <svg><use href={`assets/images/icons/${this.wcVariant}.svg#${this.wcVariant}`}></use></svg>,
                <img src={`assets/images/icons/${this.wcVariant}.svg`} alt=""/>


        ]
    }
}