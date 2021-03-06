import {css} from 'styled-components';
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 991px) {
        ${props}
    }
    `;
}

export const mobilemd = (props) => {
    return css`
    @media only screen and (max-width: 768px) {
        ${props}
    }
    `;
}

export const mobilesm = (props) => {
    return css`
    @media only screen and (max-width: 585px) {
        ${props}
    }
    `;
}

export const desktop = (props) => {
    return css`
    @media only screen and (min-width: 991px) {
        ${props}
    }
    `;
}