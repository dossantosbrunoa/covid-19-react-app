import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

import PageWrapper from "../../components/PageWrapper";
import Graph from "../../components/Graph";
import CountryAutocomplete from "../../components/CountryAutocomplete";

const PerCountry = () => {
  const dispatch = useDispatch();
  const defaultSlug = "brazil";

  useEffect(() => {
    dispatch(actions.getHistoryByCountry(defaultSlug));
    dispatch(actions.getCountryOptions());
  }, [dispatch]);

  return (
    <PageWrapper pageTitle={"Por País"}>
      <CountryAutocomplete defaultSlug={defaultSlug} />
      <Graph />
    </PageWrapper>
  );
};

export default PerCountry;
