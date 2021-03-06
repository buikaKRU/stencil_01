import { Component, Prop, Element, Method } from '@stencil/core';


/** THIS is a component short description. You can write w few words here.
 * It will not show up in autogenerated 'readme.md'
 * But it will showu up in autogenerated json 
 *  ---------
 * ```json
 * "snowDesignSystem": {
 *  "version": "fdaf",
 *  "versions": [
 *      {"variant": "01", "ghoust"}
 *  ]
 * }
 * ```  
*/
@Component({
    tag: 'uc-side-drawer',
    styleUrl: 'side-drawer.less',
    shadow: true,
})

export class SideDrawer {

    /**Some element description */
    @Element() el: HTMLElement;

    /** The title of the element*/
    @Prop({
        reflectToAttr: true,
        mutable: true
    }) title!: string;

    /** Setting for the conent display. 
     * **false** - no content
     * **true**  - content
     *  Component opening is handled by atribute 'open' which is handled by css
     */
    @Prop({
        reflectToAttr: true,
        mutable: true
    }) visible =  false;

    /**Method to be executed while sideBar is being closed (Example: a method changing sideBar's parent state responsible for opening) */
    @Prop() sideDrawerClosing: () => any;

    /**Property responsible for opening/closing of the sidebar */
    @Prop({
        reflectToAttr: true,
        mutable: true
    }) open =  false;



    /** 
     * ## Just testing of documentation creation
     * Use the package manager [pip](https://pip.pypa.io/en/stable/) to **`install`** foobar.
    */
    @Prop() test = 'information';


   /** The atribute should have one of following values:
    * 
     * **'information'**((default) only for 'information);
     *
     * **'warning'** (for warning notification);
     * 
     * **'critical'** (for super important stuff)
    
    */
    @Prop() infoType: 'warning'|'success'|'information'|'critical' = 'information';



      /**
     * A method that doesn't do anything. Just here because we are playing with
     * automatic documentation generation.
     *
     * @param arg A parameter that will not be used.
     * @returns The arg parameter you specified or undefined.
     */
    @Method()
    public doNothing(arg?: any): any {
        return arg;
    };

    public onCloseDrawer = () => {
        this.visible = false;
        this.el.removeAttribute('open');
        this.sideDrawerClosing();
    }

    render() {
        let content;

        this.infoType = 'success';

        const testBackdropMethod = () => {  
            const backdrop = this.el.querySelector('uc-backdrop')

            if (backdrop) {
                backdrop.testMethodWithOutput('from button')
            }
        }

        if (this.visible) {
            content = (
                <aside>
                    <header>
                        <h3>[uc-side-drawer]</h3>
                        <h6>{this.title}</h6>
                        <uc-button 
                            buttonlabel="close" 
                            onClick={this.onCloseDrawer}>
                        </uc-button>
                        <uc-button 
                            buttonlabel="test backdropMethod" 
                            variant="secondary"
                            ghoust
                            onClick={()=>{ testBackdropMethod(); alert('it wil work fi sidebar is not shadow')}}>
                        </uc-button>
                    </header>
                    <main>   
                        <slot /** this is test slot description which doesn't work*/ name="inner_slot"/>
                    </main>
                </aside>
            )
        } else{
            content = null
        }
        
        return [
            <div class="uc-SideDrawer">
                {content}
            </div>,
            <snow-icon wcVariant='warning'></snow-icon>,
            <uc-backdrop
                id='uc-test'
                qa="qa-12345" 
                visible={this.visible}
                wcClicked={this.onCloseDrawer}></uc-backdrop>
        ]
    }
}