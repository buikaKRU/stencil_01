import { Component, Element, State, Prop } from '@stencil/core';


/** DESIGN SYSTEM main Component
*/
@Component({
    tag: 'ds-design-system',
    styleUrl: 'design-system.less',
})

export class DesignSystem {

    /**Some element description */
    @Element() el: HTMLElement;

    @Prop() displayds = false;

    @Prop({mutable: true, reflectToAttr: true}) componentsList: any[];



    /**Main component's State object */
    @State() public state = {
        data: {
            components: []
        }, 
        ui: {}
    };


    /** This is state: background description */
    @Prop({mutable: true, reflectToAttr: true}) background = 'white';
    


    changeBackgroundHandler= () => {
        if (this.background === 'white') {
            this.background = 'gray';
        } else {
            this.background = 'white';
        }

    }

    /**Fetching for collection.json file */
    readTextFile = (file, callback) => {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4 && rawFile.status == 200) {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }



   



    componentWillLoad() {
        console.log('componentWillLoad');

        const jsonPath = 'http://localhost:8888/src/collection.json';

        if (this.displayds) {
            //usage of readTextFile()
            this.readTextFile(jsonPath, (text) => {
                var data = JSON.parse(text);
                console.log(`${data}`)
                let componentsData = data.components;
                const newStateData = {...this.state.data}
                const newState = {...this.state}
                newStateData.components = [...componentsData];
                newState.data = newStateData;
                this.state = newState

                this.componentsList = this.state.data.components.map((el, i) => {
                    return `${i}: < ${el.tag} >`
                })
            });
        };
    };


    render() {
        

        
        return [
            <h6>[ds-design-system]</h6>,
            <h1>DESIGN SYSTEM</h1>,

            this.state.data.components.length > 0 ? <ds-system-list wcDataProp={this.state.data}></ds-system-list> : null
            
        ]
    }
}

