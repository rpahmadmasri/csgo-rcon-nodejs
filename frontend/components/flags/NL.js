import {h} from 'preact';

/**
 * Returns the Add SVG
 *
 * @return {*}
 * @constructor
 */
const NL = () => {
    return (
        <svg style={{width: "50px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
            <rect fill="#21468B" width="9" height="6"/>
            <rect fill="#FFF" width="9" height="4"/>
            <rect fill="#AE1C28" width="9" height="2"/>
        </svg>
    )
};

export default NL;
