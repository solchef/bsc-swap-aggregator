import * as React from 'react';

import { INJECTED_DIV_CLASS } from '../constants';
import { ZeroExInstantContainer } from '../containers/zero_ex_instant_container';

import { ZeroExInstantProvider, ZeroExInstantProviderProps } from './zero_ex_instant_provider';

export type ZeroExInstantProps = ZeroExInstantProviderProps;

export const ZeroExInstant = (props: ZeroExInstantProps) => {
    return (
        <div className={INJECTED_DIV_CLASS}>
            <ZeroExInstantProvider {...props}>
                <ZeroExInstantContainer />
            </ZeroExInstantProvider>
        </div>
    );
};

ZeroExInstant.displayName = 'ZeroExInstant';
