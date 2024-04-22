import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { qauntProps } from "../types";
import data from "../assets/currency-flags.json";
import React, { FC } from "react";

interface CurrencyProps {
  setValueTo: (arg: string | undefined) => void;
  symbole2: qauntProps | undefined;
}
const CountrySelect: FC<CurrencyProps> = ({ setValueTo, symbole2 }) => {
  function handleChange(
    e: React.SyntheticEvent<Element, Event>,
    value: qauntProps | null
  ) {
    setValueTo(value?.currency.code);
    localStorage.setItem("currencyTo", JSON.stringify(value?.currency.code));
    console.log(e);
  }
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%", borderBlock: "none" }}
      options={countries}
      onChange={handleChange}
      defaultValue={symbole2}
      autoHighlight
      getOptionLabel={(option) =>
        `${option.currency.code} ~ ${option.currency.name}`
      }
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img loading="lazy" width="20" src={option.flag} alt="" />
          {option.currency.code} &#x2013; &nbsp;{" "}
          <p style={{ opacity: 0.7 }}>{option.currency.name}</p>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          defaultValue={{ value: "AFN", label: "AFN" }}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CountrySelect;

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly qauntProps[] = data;
