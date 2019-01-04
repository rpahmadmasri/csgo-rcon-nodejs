import {h} from 'preact';

/**
 * Returns the Add SVG
 *
 * @return {*}
 * @constructor
 */
const DE = () => {
    return (
        <svg style={{width: "50px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
            <rect width="5" height="3" y="0" x="0" fill="#000"/>
            <rect width="5" height="2" y="1" x="0" fill="#D00"/>
            <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
        </svg>
    )
};

export default DE;
