import { lazy, PureComponent } from 'preact/compat';
import DefaultBody from './svgs/default-body';
import DefaultEyes from './svgs/default-eyes';
import DefaultGradient from './svgs/default-gradient';


function randomRange(min, max) { 
    return Math.random() * (max - min) + min;
}


function randomNegative() {
    return Math.random() < 0.5 ? -1 : 1; 
}


function maybeLoadTemplate(folder, template){
    if(template === null || template === '' || template === undefined){
        if(folder === 'body'){
            return DefaultBody;
        }
        if(folder === 'eyes'){
            return DefaultEyes;
        }
        if(folder === 'gradient'){
            return DefaultGradient
        }
        return PureComponent;
    }
    else{
        return lazy(() => import(`./svgs/${folder}/${template}`));
    }
}


export { randomRange, randomNegative, maybeLoadTemplate }
