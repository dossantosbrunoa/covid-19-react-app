import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

import PageWrapper from '../../components/PageWrapper';
import Graph from '../../components/Graph';

const PerCountry = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getHistoryByCountry());
    }, [dispatch]);

    return (
    <PageWrapper pageTitle={'Por País'}>
        <Graph />
    </PageWrapper>
    )
};

export default PerCountry;