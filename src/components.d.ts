/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DsDesignSystem {
    /**
    * This is state: background description
    */
    'background': string;
    'componentsList': any[];
    'displayds': boolean;
  }
  interface DsDesignSystemAttributes extends StencilHTMLAttributes {
    /**
    * This is state: background description
    */
    'background'?: string;
    'componentsList'?: any[];
    'displayds'?: boolean;
  }

  interface DsSystemList {
    /**
    * This is state: background description
    */
    'background': string;
    /**
    * Main property to get and store the data
    */
    'wcDataProp': any;
  }
  interface DsSystemListAttributes extends StencilHTMLAttributes {
    /**
    * This is state: background description
    */
    'background'?: string;
    /**
    * Main property to get and store the data
    */
    'wcDataProp'?: any;
  }

  interface UcBackdrop {
    /**
    * QA required ID
    */
    'qa': string;
    /**
    * Just for testing the inner component method with output. Method returns an input string followed by Date.now() output
    */
    'testMethodWithOutput': (input: string) => string;
    'visbilityToggle': () => void;
    /**
    * visbility
    */
    'visible': boolean;
    /**
    * Clicked event handler
    */
    'wcClicked': (event: MouseEvent) => void;
  }
  interface UcBackdropAttributes extends StencilHTMLAttributes {
    /**
    * QA required ID
    */
    'qa': string;
    /**
    * visbility
    */
    'visible'?: boolean;
    /**
    * Clicked event handler
    */
    'wcClicked'?: (event: MouseEvent) => void;
  }

  interface UcButton {
    /**
    * Button Label (required)
    */
    'buttonlabel': string;
    /**
    * A callback function to be passed on clicking the button
    */
    'clicked': (event: MouseEvent) => void;
    /**
    * Visual variant atribute
    */
    'disabled': boolean;
    'doSomething': (arg?: any) => any;
    /**
    * Visual variant atribute
    */
    'ghoust': boolean;
    'returnShit': () => string;
    /**
    * Visual variant atribute. Handled by css class
    */
    'variant': 'primary' | 'secondary';
  }
  interface UcButtonAttributes extends StencilHTMLAttributes {
    /**
    * Button Label (required)
    */
    'buttonlabel': string;
    /**
    * A callback function to be passed on clicking the button
    */
    'clicked'?: (event: MouseEvent) => void;
    /**
    * Visual variant atribute
    */
    'disabled'?: boolean;
    /**
    * Visual variant atribute
    */
    'ghoust'?: boolean;
    /**
    * Visual variant atribute. Handled by css class
    */
    'variant'?: 'primary' | 'secondary';
  }

  interface UcSideDrawer {
    /**
    * A method that doesn't do anything. Just here because we are playing with automatic documentation generation.
    */
    'doNothing': (arg?: any) => any;
    /**
    * The atribute should have one of following values:  **'information'**((default) only for 'information);  **'warning'** (for warning notification);  **'critical'** (for super important stuff)
    */
    'infoType': 'warning'|'success'|'information'|'critical';
    /**
    * Property responsible for opening/closing of the sidebar
    */
    'open': boolean;
    /**
    * Method to be executed while sideBar is being closed (Example: a method changing sideBar's parent state responsible for opening)
    */
    'sideDrawerClosing': () => any;
    /**
    * ## Just testing of documentation creation Use the package manager [pip](https://pip.pypa.io/en/stable/) to **`install`** foobar.
    */
    'test': string;
    /**
    * The title of the element
    */
    'title': string;
    /**
    * Setting for the conent display.  **false** - no content **true**  - content Component opening is handled by atribute 'open' which is handled by css
    */
    'visible': boolean;
  }
  interface UcSideDrawerAttributes extends StencilHTMLAttributes {
    /**
    * The atribute should have one of following values:  **'information'**((default) only for 'information);  **'warning'** (for warning notification);  **'critical'** (for super important stuff)
    */
    'infoType'?: 'warning'|'success'|'information'|'critical';
    /**
    * Property responsible for opening/closing of the sidebar
    */
    'open'?: boolean;
    /**
    * Method to be executed while sideBar is being closed (Example: a method changing sideBar's parent state responsible for opening)
    */
    'sideDrawerClosing'?: () => any;
    /**
    * ## Just testing of documentation creation Use the package manager [pip](https://pip.pypa.io/en/stable/) to **`install`** foobar.
    */
    'test'?: string;
    /**
    * The title of the element
    */
    'title': string;
    /**
    * Setting for the conent display.  **false** - no content **true**  - content Component opening is handled by atribute 'open' which is handled by css
    */
    'visible'?: boolean;
  }

  interface DsApp {
    /**
    * visbility
    */
    'visibleds': boolean;
  }
  interface DsAppAttributes extends StencilHTMLAttributes {
    /**
    * visbility
    */
    'visibleds'?: boolean;
  }

  interface SnowBuggy {
    'visible': number;
  }
  interface SnowBuggyAttributes extends StencilHTMLAttributes {
    'visible'?: number;
  }

  interface SnowIcon {
    /**
    * Property responsible for displaying needed icon
    */
    'wcVariant': 'arrow-up'|'bookmark'|'calendar'|'check-list'|'check'|'circled-check'|'clock-incomplete'
    |'info'|'warning'|'success';
  }
  interface SnowIconAttributes extends StencilHTMLAttributes {
    /**
    * Property responsible for displaying needed icon
    */
    'wcVariant': 'arrow-up'|'bookmark'|'calendar'|'check-list'|'check'|'circled-check'|'clock-incomplete'
    |'info'|'warning'|'success';
  }

  interface SnowRailWarning {
    'label': string;
    'visible': boolean;
  }
  interface SnowRailWarningAttributes extends StencilHTMLAttributes {
    'label'?: string;
    'visible'?: boolean;
  }

  interface SnowRail {
    'label': string;
    'visible': boolean;
  }
  interface SnowRailAttributes extends StencilHTMLAttributes {
    'label'?: string;
    'visible'?: boolean;
  }

  interface SnowToast {
    'actionlink': string;
    'actionname': string;
    'message': string;
    'variant': string;
    'visible': number;
  }
  interface SnowToastAttributes extends StencilHTMLAttributes {
    'actionlink'?: string;
    'actionname'?: string;
    'message'?: string;
    'variant'?: string;
    'visible'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DsDesignSystem': Components.DsDesignSystem;
    'DsSystemList': Components.DsSystemList;
    'UcBackdrop': Components.UcBackdrop;
    'UcButton': Components.UcButton;
    'UcSideDrawer': Components.UcSideDrawer;
    'DsApp': Components.DsApp;
    'SnowBuggy': Components.SnowBuggy;
    'SnowIcon': Components.SnowIcon;
    'SnowRailWarning': Components.SnowRailWarning;
    'SnowRail': Components.SnowRail;
    'SnowToast': Components.SnowToast;
  }

  interface StencilIntrinsicElements {
    'ds-design-system': Components.DsDesignSystemAttributes;
    'ds-system-list': Components.DsSystemListAttributes;
    'uc-backdrop': Components.UcBackdropAttributes;
    'uc-button': Components.UcButtonAttributes;
    'uc-side-drawer': Components.UcSideDrawerAttributes;
    'ds-app': Components.DsAppAttributes;
    'snow-buggy': Components.SnowBuggyAttributes;
    'snow-icon': Components.SnowIconAttributes;
    'snow-rail-warning': Components.SnowRailWarningAttributes;
    'snow-rail': Components.SnowRailAttributes;
    'snow-toast': Components.SnowToastAttributes;
  }


  interface HTMLDsDesignSystemElement extends Components.DsDesignSystem, HTMLStencilElement {}
  var HTMLDsDesignSystemElement: {
    prototype: HTMLDsDesignSystemElement;
    new (): HTMLDsDesignSystemElement;
  };

  interface HTMLDsSystemListElement extends Components.DsSystemList, HTMLStencilElement {}
  var HTMLDsSystemListElement: {
    prototype: HTMLDsSystemListElement;
    new (): HTMLDsSystemListElement;
  };

  interface HTMLUcBackdropElement extends Components.UcBackdrop, HTMLStencilElement {}
  var HTMLUcBackdropElement: {
    prototype: HTMLUcBackdropElement;
    new (): HTMLUcBackdropElement;
  };

  interface HTMLUcButtonElement extends Components.UcButton, HTMLStencilElement {}
  var HTMLUcButtonElement: {
    prototype: HTMLUcButtonElement;
    new (): HTMLUcButtonElement;
  };

  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLDsAppElement extends Components.DsApp, HTMLStencilElement {}
  var HTMLDsAppElement: {
    prototype: HTMLDsAppElement;
    new (): HTMLDsAppElement;
  };

  interface HTMLSnowBuggyElement extends Components.SnowBuggy, HTMLStencilElement {}
  var HTMLSnowBuggyElement: {
    prototype: HTMLSnowBuggyElement;
    new (): HTMLSnowBuggyElement;
  };

  interface HTMLSnowIconElement extends Components.SnowIcon, HTMLStencilElement {}
  var HTMLSnowIconElement: {
    prototype: HTMLSnowIconElement;
    new (): HTMLSnowIconElement;
  };

  interface HTMLSnowRailWarningElement extends Components.SnowRailWarning, HTMLStencilElement {}
  var HTMLSnowRailWarningElement: {
    prototype: HTMLSnowRailWarningElement;
    new (): HTMLSnowRailWarningElement;
  };

  interface HTMLSnowRailElement extends Components.SnowRail, HTMLStencilElement {}
  var HTMLSnowRailElement: {
    prototype: HTMLSnowRailElement;
    new (): HTMLSnowRailElement;
  };

  interface HTMLSnowToastElement extends Components.SnowToast, HTMLStencilElement {}
  var HTMLSnowToastElement: {
    prototype: HTMLSnowToastElement;
    new (): HTMLSnowToastElement;
  };

  interface HTMLElementTagNameMap {
    'ds-design-system': HTMLDsDesignSystemElement
    'ds-system-list': HTMLDsSystemListElement
    'uc-backdrop': HTMLUcBackdropElement
    'uc-button': HTMLUcButtonElement
    'uc-side-drawer': HTMLUcSideDrawerElement
    'ds-app': HTMLDsAppElement
    'snow-buggy': HTMLSnowBuggyElement
    'snow-icon': HTMLSnowIconElement
    'snow-rail-warning': HTMLSnowRailWarningElement
    'snow-rail': HTMLSnowRailElement
    'snow-toast': HTMLSnowToastElement
  }

  interface ElementTagNameMap {
    'ds-design-system': HTMLDsDesignSystemElement;
    'ds-system-list': HTMLDsSystemListElement;
    'uc-backdrop': HTMLUcBackdropElement;
    'uc-button': HTMLUcButtonElement;
    'uc-side-drawer': HTMLUcSideDrawerElement;
    'ds-app': HTMLDsAppElement;
    'snow-buggy': HTMLSnowBuggyElement;
    'snow-icon': HTMLSnowIconElement;
    'snow-rail-warning': HTMLSnowRailWarningElement;
    'snow-rail': HTMLSnowRailElement;
    'snow-toast': HTMLSnowToastElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
