interface Yo {
    (strings, ...values) :any; 
    update(targetElement:Element, newElement, opts?) : any ;
}

declare module 'yo-yo' {
    const yo: Yo;
    export = yo;            
}
