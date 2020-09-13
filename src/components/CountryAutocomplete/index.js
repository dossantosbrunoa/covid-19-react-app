import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import { SkeletonContainer } from "./styles";

import PropTypes from "prop-types";

const CountryAutocomplete = ({ defaultSlug }) => {
  const { countryOptionsList, countryLoading } = useSelector(
    (state) => state.covid
  );
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!countryOptionsList && countryOptionsList.length > 0) {
      const defaultValue = countryOptionsList.find(
        (c) => c.slug === defaultSlug
      );
      setSelectedCountry(defaultValue);
    }
  }, [countryOptionsList, defaultSlug]);

  const onCountryChangedHandler = (newCountry) => {
    if (newCountry) {
      setSelectedCountry(newCountry);
      dispatch(actions.getHistoryByCountry(newCountry.slug));
    }
  };

  return countryLoading ? (
    <SkeletonContainer>
      <Skeleton />
    </SkeletonContainer>
  ) : (
    <Autocomplete
      options={countryOptionsList}
      value={selectedCountry}
      onChange={(event, newValue) => {
        onCountryChangedHandler(newValue);
      }}
      getOptionLabel={(option) => option.name}
      style={{ width: "100%", marginBottom: "12px" }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Digite o nome do País"
        />
      )}
    />
  );
};

CountryAutocomplete.propTypes = {
  defaultSlug: PropTypes.string.isRequired,
}

export default CountryAutocomplete;
