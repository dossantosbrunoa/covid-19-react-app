import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import { SkeletonContainer } from "./styles";

import PropTypes from "prop-types";

const CountryAutocomplete = ({ defaultIso2Code }) => {
  const { countriesList, loading } = useSelector(
    (state) => state.countries
  );
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!countriesList && countriesList.length > 0) {
      const defaultValue = countriesList.find(
        (c) => c.alpha2Code === defaultIso2Code
      );
      setSelectedCountry(defaultValue);
    }
  }, [countriesList, defaultIso2Code]);

  const onCountryChangedHandler = (newCountry) => {
    if (newCountry) {
      setSelectedCountry(newCountry);
      dispatch(actions.getHistoryByCountry(newCountry.alpha2Code));
    }
  };

  return loading ? (
    <SkeletonContainer>
      <Skeleton />
    </SkeletonContainer>
  ) : (
    <Autocomplete
      options={countriesList}
      value={selectedCountry}
      onChange={(event, newValue) => {
        onCountryChangedHandler(newValue);
      }}
      getOptionLabel={(option) => option.translations.br}
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
  defaultIso2Code: PropTypes.string.isRequired,
}

export default CountryAutocomplete;
