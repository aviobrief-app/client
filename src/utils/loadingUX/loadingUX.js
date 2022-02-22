import ReactDOM from "react-dom";

import BackDrop from './BackDrop/BackDrop';

export const dimScreenInOut = (delay = 1000) => {

    if(!document.getElementById('loading-ux-container')) {
        return console.log(`[loadingUX.js] div with id 'loading-ux-container' not found!`)
    }

    ReactDOM.render(
        <BackDrop dimInOut={true} />,
        document.getElementById('loading-ux-container'))

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('loading-ux-container'))
    }, delay)
}

export const dimScreenIn = () => {
    if(!document.getElementById('loading-ux-container')) {
        return console.log(`[loadingUX.js] div with id 'loading-ux-container' not found!`)
    }

    ReactDOM.render(
        <BackDrop dimIn={true} />,
        document.getElementById('loading-ux-container'))

}

export const dimScreenOut = () => {
    if(!document.getElementById('loading-ux-container')) {
        return console.log(`[loadingUX.js] div with id 'loading-ux-container' not found!`)
    }

    setTimeout(() => {
        ReactDOM.render(
            <BackDrop dimOut={true} />,
            document.getElementById('loading-ux-container'))
    }, 500)

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('loading-ux-container'))
    }, 900)

}
