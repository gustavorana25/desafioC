import theme from '../theme';

import { colors } from '../../styles';

const paginationButtonTypes = theme('type', {
    default: `
        color: ${colors.primary};
        font-size:20px;
    `,
    selected: `
        border:1px solid ${colors.primary};
        box-shadow: inset 0 0 0 2px ${colors.lightPrimary};
        background: ${colors.primary};
        color: ${colors.lightPrimary};
        transform:scale(1.5);
        margin:0 16px;
    `
});

export default paginationButtonTypes;