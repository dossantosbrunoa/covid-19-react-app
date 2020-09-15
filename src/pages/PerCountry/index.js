import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

import PageWrapper from "../../components/PageWrapper";
import Graph from "../../components/Graph";
import CountryAutocomplete from "../../components/CountryAutocomplete";

const PerCountry = () => {
  const dispatch = useDispatch();
  const defaultIso2Code= "BR";

  useEffect(() => {
    dispatch(actions.getHistoryByCountry(defaultIso2Code));
    dispatch(actions.getCountries());
  }, [dispatch]);

  return (
    <PageWrapper pageTitle={"Por País"}>
      <CountryAutocomplete defaultIso2Code={defaultIso2Code} />
      <Graph />
    </PageWrapper>
  );
};

export default PerCountry;
