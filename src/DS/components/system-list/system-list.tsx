import { Component, Element, Prop } from '@stencil/core';



/** DESIGN SYSTEM list to display components
*/
@Component({
    tag: 'ds-system-list',
    styleUrl: 'system-list.less',
})


export class DSListItem {

    @Element() el: HTMLElement;

    /**Main property to get and store the data */
    @Prop({mutable: true}) public wcDataProp;
    
    /** This is state: background description */
    @Prop({mutable: true, reflectToAttr: true}) background = 'white';




    changeBackgroundHandler= () => {
        if (this.background === 'white') {
            this.background = 'gray';
        } else {
            this.background = 'white';
        }

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

        if (this.wcDataProp) {
            const parent = document.getElementById('componentsContainer');
            parent.innerHTML = null;

            this.wcDataProp.components.forEach(el => {
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
                            // console.log('returnshit', ifbutton.returnShit())
                        };
                    }
    
                    parent.appendChild(li);
                }
            });
            }
        }
    








    render() {

        
        return [
            <h6>[ds-system-list]</h6>,

            <ul id="componentsContainer" >
            
            </ul>
        ]
    }






    componentDidLoad() {
        console.log('system-list wcDataProp = ', this.wcDataProp)
        this.appendContent()

    }
}

