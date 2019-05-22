import { Component, Prop } from '@stencil/core';


/**Testing components th check out <slot> conditional rendering */
@Component({
  tag: 'snow-buggy',
  styleUrl: 'snow-buggy.less'
})
export class MyComponent {


  @Prop({mutable: true, reflectToAttr: true})
    visible = 1;



  render() {

    const content = () => {
        if (this.visible === 1) {
            return (
                <div class="buggy_container">
                <p>
                  <svg><use href="assets/images/test.svg#circle"></use></svg>
                  <svg><use href="assets/images/test.svg#ellipse"></use></svg>
                  <svg><use href="assets/images/svgstoreicons.svg#trash"></use></svg>
                </p>
                    <h1>the buggy component</h1>
                    <slot></slot>
                </div>
            )
        } else {
            return [
                <div style={{border: '1px solid black'}}>
                    <h1>Maybe I'm not broken</h1>
                    <h2>couse I've eatten a slot</h2>
                </div>,
                <div style={{display: 'none'}}><slot></slot></div>
            ]
        }
    }

    return content()
  }
}