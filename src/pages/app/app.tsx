import { Component, Prop, Element, State } from '@stencil/core';


/** an App Page. this is short description from over @Component decorator*/
@Component({
    tag: 'ds-app',
    styleUrl: 'app.less',
    // shadow: true,
})

export class App{

    /**Some element description */
    @Element() el: HTMLElement;

    /**visbility */
    @Prop({mutable: true, reflectToAttr: true}) visibleds = false;

    @State() sideBarVisible = false;

    



    

    render() {

        const openSideBarHandler = () => {
            console.log(this.sideBarVisible);
            this.sideBarVisible = !this.sideBarVisible;
            // const sd = document.querySelector('uc-side-drawer');
            // sd.open = true;
            // sd.visible = true;

            // const sdb = document.createElement('uc-button');
            // sdb.setAttribute('buttonlabel', 'test button label') ;
            // console.log('sdb = ', sdb)
            // document.getElementById('testId').appendChild(sdb);
        }
        

        const anatherTestFunction = () => {
            console.log('lets close this shig')
            this.sideBarVisible = false;
        }


        
        return [

            <h6>[ds-app] visibleDS {this.visibleds}</h6>,
            <uc-button 
                buttonlabel="open sidebar"
                clicked={openSideBarHandler}>
            </uc-button>,

            <uc-side-drawer
                visible={this.sideBarVisible} 
                open={this.sideBarVisible} 
                title="test"
                sideDrawerClosing={anatherTestFunction}>
                <nav>
                    <ul>
                    <li><a href="/">Item 01</a></li>
                    <li><a href="/">Item 01</a></li>
                    <li><a href="/">Item 01</a></li>
                    </ul>
                </nav>
            </uc-side-drawer>,



            <ds-design-system displayds={this.visibleds}></ds-design-system>,

            <div id='testId' style={{position: 'fixed', right: '0'}}>sidebarvisible = {this.sideBarVisible.toString()}</div>,

            
        
        //   <script>
        //             const buttonOpenSidedrawer = document.getElementById('button-open-sidedrawer');
        // buttonOpenSidedrawer.addEventListener('click', () => {
        //     sideDrawer.visible = true;
        //     sideDrawer.setAttribute('open', 'true');
        // })
    
    
        // const sideDrawer = document.querySelector('uc-side-drawer');
        // setTimeout(()=>{
        //     sideDrawer.title = 'changed title'
        //     sideDrawer.visible = true;
        //     sideDrawer.setAttribute('open', 'true')
        // }, 50000);
    
        // setTimeout(()=>{
        //     sideDrawer.setAttribute('title', 'this is a new title')
        // }, 5000)
        //   </script>
        ]
    }

        
}