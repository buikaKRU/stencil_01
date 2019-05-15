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
        console.log(`*** button clicked with changed STATE color: ${this.background}`); 

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

  

    appendContent = () => {

        console.log('displayDS = ', this.displayds)
        if (this.state.data.components.length > 0 && this.displayds) {
            const parent = document.getElementById('componentsContainer')
            parent.innerHTML = null;
            
            this.state.data.components.forEach(el => {
                const tag = el.tag,
                    template = document.createElement('template'),
                    li = document.createElement('li'),
                    newComponent = document.createElement(`${tag}`),
                    tagTitle = document.createElement('h2'),
                    node = document.createTextNode(`<${tag}>`);

                li.appendChild(tagTitle);
                li.appendChild(newComponent);
                tagTitle.appendChild(node);
                template.appendChild(li);
                
    

                if (tag === 'uc-button') {
                    const ifbutton = template.querySelector('uc-button');
                    ifbutton.variant = "secondary";
                    
                    if (this.background !== 'white') {
                        ifbutton.buttonlabel = 'switch of the background';
                        ifbutton.variant = 'primary';
                    } else {
                        ifbutton.buttonlabel = 'change background color'
                    }

                    ifbutton.clicked = () => {
                        this.changeBackgroundHandler();
                    }; 
                    
                }

                parent.appendChild(li);
            });
        }
    }



    componentWillLoad() {
        console.log('componentWillLoad');

        const jsonPath = 'http://localhost:8888/src/collection.json';

        if (this.displayds) {
            //usage of readTextFile()
            this.readTextFile(jsonPath, (text) => {
                var data = JSON.parse(text);
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
        
        

        

        // const htmlToElement = (html) => {
        //     var template = document.createElement('template');
        //     html = html.trim(); // Never return a text node of whitespace as the result
        //     template.innerHTML = html;

        //     // template.querySelector

        //     return template.content.firstChild;
        // }



        // const componentsToDisplay = () => {
            
            
        
        //     if (this.state.data.components.length > 0) {

        //         document.getElementById('testId').innerHTML = null;

        //         // let parent = document.createElement('div');

                
        //         this.state.data.components.map((el, i) => {
        //             const tag = el.tag
        //             console.log('tag = ', tag);
        
        //             const newWeb = document.createElement(`${tag}`);

        //             newWeb.setAttribute('buttonlabel', `button - ${i} -`);


        //             console.log(newWeb);
                    


        //             document.getElementById('testId').appendChild(newWeb);

        //             const parent = document.getElementById('testId');
        //             console.log('perent', parent);

        //             const ifbutton = document.querySelectorAll('uc-button');
        //             console.log('ifbutton' , ifbutton);
        //             ifbutton.forEach(el => {
        //                 el.clicked = ()=> {
        //                     console.log(el.buttonlabel)
        //                 }
        //             })











        //             // const generatedButton = htmlToElement(`<uc-button buttonlabel="button ${i}"></uc-button>`),
        //             // div = htmlToElement('<div><span>nested</span> <span>stuff</span></div>')
        //             // console.log(generatedButton, div)
        //             // document.getElementById('testId').appendChild(generatedButton);

                    

        //             // document.getElementById('testId').insertAdjacentHTML('beforeend', `<${tag} id="two">two</${tag}>`);

        //             // var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
        //             // let doc = new DOMParser().parseFromString(xmlString, "text/xml");
                    
        //             // console.log('doc is ======== ', doc)

                    
        //         });
           
        //     } else {
        //         return null;
        //     }

        // }



        // const componentToDisplay = (tag) => {
        //     var template = document.createElement('template');
        //     const newComponent = document.createElement(`${tag}`);

        //     template.appendChild(newComponent);

        //     console.log('template   =     ', template.firstChild)

        //     const ifbutton = template.querySelector('uc-button');
        //     ifbutton.buttonlabel = 'ifbuton'
        //     console.log('ifbutton = ', ifbutton)


 


        //     return () => nejsx;

        // }

        
        
        console.log('---render', this.state.data);
        console.log('STATE color', this.background);
        // this.el.style.background = this.background;

        
        return [
            <h6>[ds-design-system]</h6>,
            <h1>DESIGN SYSTEM</h1>,

            <ul id="componentsContainer" class={`bckg_${this.background}`}>
            
            </ul>,

            <ds-system-list data={this.state.data}></ds-system-list>,


        this.appendContent()
            
        ]
    }
}

