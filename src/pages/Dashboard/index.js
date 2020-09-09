import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

import WorldMap from '../../components/WorldMap';
import CountriesList from '../../components/CountriesList';
import PageWrapper from '../../components/PageWrapper';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getSummary());
    }, [dispatch]);

    return (
        <PageWrapper pageTitle={'Dashboard'}>
            <WorldMap defaultDataType={'totalCases'} />
            <CountriesList />
        </PageWrapper>
    )
};

export default Dashboard;