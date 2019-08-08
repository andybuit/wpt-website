import React from 'react'
import { withTranslation } from '../../i18n'

interface Props {
    t(m: string): string;
}
const A = (props: Props) => {
    return <div>{props.t('h1')}</div>;
}

export default withTranslation(['common'])(A);
