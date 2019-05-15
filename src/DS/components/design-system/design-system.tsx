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

  
    convertDocs(string){

        //* # uc-side-drawer\n\n```javascript\n+ this will be highlighted in green\n+ this will be highlighted in red\nlet a = \"fd\"; let b = 5;\n\n```\n\n## Basic description\n\nThis is some text as a description. The question is if it's going to stay?\n\n## How to use it\n### Do this:\n- [x] Finish my changes\n- [X] Push my commits to **GitHub**\n- [X] Open a pull request\n\n### Don't do this:\n- [] bla bla bla\n- [] never do that\n\n\n|To do:| Not to do:|\n|------|-----------|\n|jkjl jkjk | jjiojo jiojo jiojoij|\n|  | jjlkjl|\n|```diff |\n|+ this will be highlighted in green |\n|- this will be highlighted in red |\n|``` |\n\n------------------\n\n### Do this:\n```diff\n+ this will be highlighted in green\n+ this will be highlighted in red\n```\n\n### Don't do this:\n```diff\n- this will be highlighted in green\n- this will be highlighted in red\n```\n\n

        
        let seth3 = [];
        seth3 = string.match(/### \s*(.*?)\s*\n/g);
        let seth3modified = [];
        if (seth3){
            seth3modified = seth3.map(str => {
               return str.replace(/### /g, '<h3>').replace(/\n/g, '</h3>');
            });
            seth3.forEach((el, i)=> {
                let newstring = string.replace(el, seth3modified[i])
                string = newstring;
            })
        }
        let seth2 = [];
        seth2 = string.match(/##\s*(.*?)\s*\n/g);
        let seth2modified = [];
        if (seth2){
            seth2modified = seth2.map(str => {
               return str.replace(/##/g, '<h2>').replace(/\n/g, '</h2>');
            });
            console.log('seth2modified = ', seth2modified);
            seth2.forEach((el, i)=> {
                let newstring = string.replace(el, seth2modified[i])
                string = newstring;
            })
        }
        let seth1 = [];
        seth1 = string.match(/# \s*(.*?)\s*\n/g);
        let seth1modified = [];
        if (seth1){
            seth1modified = seth1.map(str => {
               return str.replace(/# /g, '<h1>').replace(/\n/g, '</h1>');
            });
            seth1.forEach((el, i)=> {
                let newstring = string.replace(el, seth1modified[i])
                string = newstring;
            })
        }

        let code1 = [];
        code1 = string.match(/```diff \s*(.*?)\s*```/g);
        let code1modified = [];
        if (code1){
            code1modified = code1.map(codestr => {
               return codestr.replace(/```diff /g, '<code>').replace(/```/g, '</code>');
            });
            code1.forEach((el, i)=> {
                let newstring = string.replace(el, code1modified[i])
                string = newstring;
            })
        }



        let res = string
            .replace(/```diff\n/g, '<code>')
             .replace(/```javascript\n/g, '<code>')
             .replace(/```\n/g, '</code>')
             .replace(/\n\n/g, '<br>')
             .replace(/\n/g, '<br>')
        return res
    }


    appendContent = () => {
    
        if (this.state.data.components.length > 0 && this.displayds) {

            const parent = document.getElementById('componentsContainer');
            parent.innerHTML = null;

            this.state.data.components.forEach(el => {
                const tag = el.tag

                //check if this is not ds tag
                if (tag.search('ds-') === -1){

                    const
                        template = document.createElement('template'),
                        li = document.createElement('li'),
                        newComponent = document.createElement(`${tag}`),
                        tagTitle = document.createElement('h2'),
                        documentation = document.createElement('div'),
                        container = document.createElement('div'),
                        
                        // nodeDescription = document.createTextNode(el.readme),
                        nodeTitle = document.createTextNode(`<${tag}>`);

                        // console.log(el);
                        // this.convertDocs(el.readme);
                        
                    documentation.classList.add('documentation');
                    container.classList.add('container');
                    li.appendChild(tagTitle);
                    li.appendChild(documentation);
                    container.appendChild(newComponent);
                    li.appendChild(container);
                    tagTitle.appendChild(nodeTitle);
                    // documentation.appendChild(nodeDescription);
                    documentation.innerHTML =  this.convertDocs(el.readme)
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

                        console.log('returnshit', ifbutton.returnShit())
                        ifbutton.clicked = () => {
                            this.changeBackgroundHandler();
                            console.log('returnshit', ifbutton.returnShit())
                        };
                    }


    
                    parent.appendChild(li);
                }
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

            <ul id="componentsContainer" class={`bckg_${this.background}`}>
            
            </ul>,

            <ds-system-list data={this.state.data}></ds-system-list>,


        this.appendContent()
            
        ]
    }
}

