import { Component, Prop } from '@stencil/core';

@Component ({
    tag: 'snow-toast',
    styleUrl: 'snow-toast.less',
})



export class SnowRail {

    @Prop({mutable: true, reflectToAttr: true})
        variant = 'information';
        // information
        // warning
        // critical
        // success

    @Prop({mutable: true, reflectToAttr: true})
        message: string;

    @Prop({mutable: true, reflectToAttr: true})
        visible = 0;

    @Prop({mutable: true, reflectToAttr: true})
        actionlink: string;

    @Prop({mutable: true})
        actionname: string;


    render() {

        const getIcon = (name?) => {
            let svgContent;
            if (!name) {
                name = this.variant
            }

            switch (name) {
                case 'warning':
                    svgContent = [
                        <g class="st0">
                            <path class="st1" d="M28.3,28.7H3.7c-0.8,0-1.6-0.4-2-1.1s-0.4-1.5,0.1-2.2L14.1,4.1c0.4-0.7,1.1-1.2,1.9-1.2s1.5,0.5,1.9,1.3
		l12.3,21.2c0.6,1.1,0.3,1.9,0,2.3C30,28.1,29.5,28.7,28.3,28.7z M4.4,26.9L4.4,26.9L4.4,26.9z M5.1,25.7h21.8L16,6.9L5.1,25.7z
		 M15.3,5.6C15.3,5.7,15.3,5.7,15.3,5.6L15.3,5.6z M16.7,5.6L16.7,5.6L16.7,5.6z"/>
                        </g>,
                        <path d="M26.5,28H5.5c-1,0-1.8-0.5-2.3-1.3S2.8,25,3.2,24.1L13.8,5.9c0.5-0.8,1.3-1.4,2.2-1.4c0,0,0,0,0,0c0.9,0,1.7,0.5,2.2,1.4
	l10.5,18.2c0.5,0.8,0.5,1.8,0.1,2.6S27.5,28,26.5,28z M25.3,26.1C25.3,26.1,25.3,26.1,25.3,26.1L25.3,26.1z M6.7,26.1L6.7,26.1
	C6.7,26.1,6.7,26.1,6.7,26.1z M7.9,24h16.1L16,10L7.9,24z"/>
                    ]
                    break;

                case 'critical':
                    svgContent = [
                        <rect x="0.4" y="13.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6274 16)" width="31.1" height="5.7"/>,
                        <rect x="0.4" y="13.2" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 16 38.6274)" width="31.1" height="5.7"/>
                    ];
                    break;

                case 'success':
                    svgContent = [
                        <polygon class="st0" points="11.8,26.3 2.4,16.9 5.2,14.1 11.8,20.6 26.8,5.6 29.6,8.4 "/>,
                        <polygon points="12.4,26.9 1.3,15.7 4.8,12.2 12.4,19.8 27.2,5.1 30.7,8.6 "/>
                    ];
                    break;

                case 'delete':
                    svgContent = [
                        <path d="M25.8,27.8L4.2,6.2c-0.4-0.4-0.4-1.1,0-1.5l0.4-0.4c0.4-0.4,1.1-0.4,1.5,0l21.6,21.6c0.4,0.4,0.4,1.1,0,1.5l-0.4,0.4
	C26.9,28.2,26.2,28.2,25.8,27.8z"/>,
                        <path d="M6.2,27.8L27.8,6.2c0.4-0.4,0.4-1.1,0-1.5l-0.4-0.4c-0.4-0.4-1.1-0.4-1.5,0L4.2,25.8c-0.4,0.4-0.4,1.1,0,1.5l0.4,0.4
	C5.1,28.2,5.8,28.2,6.2,27.8z"/>
                    ];
                    break;

                default:
                    svgContent = [
                        <path d="M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2c7.7,0,14,6.3,14,14S23.7,30,16,30z M16,6C10.4,6,5.9,10.5,5.9,16
	c0,5.5,4.5,10,10.1,10s10.1-4.5,10.1-10C26.1,10.5,21.6,6,16,6z"/>
                    ]
            }

            return <svg version="1.1"
            baseProfile="full"
            width="16" height="16"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
                {svgContent}
            </svg>
        }

        if (this.variant !== 'critical') {
            setTimeout(()=>{
                this.visible = 0;
            }, 1000)
        }

        return (
            <div class={`c-Toast c-Toast-${this.variant}`} role="alert">

                <div class="c-Toast_Icon">
                    {getIcon()}
                </div>

                <div class="c-Toast_Content">
                    {this.message}
                </div>

                <button class="c-Toast_CloseButton" onClick={()=>this.visible=0}>{getIcon('delete')}</button>
            </div>
        )
    }

}