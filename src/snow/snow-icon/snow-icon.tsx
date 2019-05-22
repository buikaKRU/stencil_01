import { Component, Prop } from '@stencil/core';

@Component ({
    tag: 'snow-icon',
    // styleUrl: 'snow-icon.less',
})
export class SnowIcon {

    @Prop() wcVariant: 'arrow-up'|'bookmark'|'calendar'|'check-list'|'check'|'circled-check'|'clock-incomplete'
                        |'info'|'warning'|'success';


    render() {


        return (
            <span>icon ${this.wcVariant}</span>
        )
    }
}