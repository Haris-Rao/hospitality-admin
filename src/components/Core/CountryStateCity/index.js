"use client";
import { City, Country, State } from "country-state-city";
import { Col } from "react-bootstrap";
import { DropDown } from "../DropDown";
import { Input } from "../Input";
import classes from "./CountryStateCity.module.css";

const CountryStateCity = ({
  selectedCountry,
  setSelectedCountry,
  countryLabel = "Country",
  countryPlaceholder = "Select Country",
  countryStyle,
  selectedState,
  setSelectedState,
  stateLabel = "State",
  statePlaceholder = "Select State",
  selectedCity,
  setSelectedCity,
  cityLabel = "City",
  cityPlaceholder = "Select City",
  cityIndicatorColor,
  cityIndicatorIcon,
  cityStyle,
  columnWidth = 6,
  countryIndicatorColor,
  countryIndicatorIcon,
  isVirtualized = false,
  countryError,
  countryErrorText,
  stateError,
  stateErrorText,
  cityError,
  cityErrorText,
}) => {
  const getStatesOfCountry = (country) => {
    if (typeof country == "string") {
      return State?.getStatesOfCountry(
        Country.getAllCountries()?.find((item) => item?.name == country)
          ?.isoCode
      );
    } else {
      return State?.getStatesOfCountry(country?.isoCode);
    }
  };
  const getCitiesOfState = (state, country) => {
    if (typeof state == "string") {
      return City.getCitiesOfState(
        Country.getAllCountries()?.find((item) => item?.name == country)
          ?.isoCode,
        State?.getStatesOfCountry(
          Country.getAllCountries()?.find((item) => item?.name == country)
            ?.isoCode
        )?.find((item) => item?.name == state)?.isoCode
      );
    } else {
      return City.getCitiesOfState(state?.countryCode, state?.isoCode);
    }
  };
  return (
    <>
      <style>{`
            .DropdownOptionContainer__indicator {
              padding:5px;
            }
      `}</style>
      {setSelectedCountry && (
        <Col md={columnWidth} className={classes.mb16}>
          <DropDown
            options={Country.getAllCountries()}
            optionLabel={"name"}
            optionValue={"name"}
            label={countryLabel}
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            value={
              typeof selectedCountry == "string"
                ? Country.getAllCountries()?.find(
                    (item) => item?.name == selectedCountry
                  )
                : selectedCountry
            }
            setter={(e) => {
              setSelectedState && setSelectedState("");
              setSelectedCity && setSelectedCity("");
              setSelectedCountry(e);
            }}
            customStyle={{
              ...countryStyle,
            }}
            placeholder={countryPlaceholder}
            isSearchable={true}
            indicatorColor={countryIndicatorColor}
            indicatorIcon={countryIndicatorIcon}
            isVirtualized={isVirtualized}
            error={countryError}
            errorText={countryErrorText}
          />
        </Col>
      )}
      {setSelectedState && (
        <Col md={columnWidth} className={classes.mb16}>
          {getStatesOfCountry(selectedCountry)?.length === 0 &&
          selectedCountry ? (
            <Input
              placeholder={statePlaceholder}
              label={stateLabel}
              value={selectedState}
              setter={setSelectedState}
              error={stateError}
              errorText={stateErrorText}
            />
          ) : (
            <DropDown
              options={getStatesOfCountry(selectedCountry)}
              optionValue={"name"}
              optionLabel={"name"}
              value={
                typeof selectedState == "string"
                  ? State?.getStatesOfCountry(
                      Country.getAllCountries()?.find(
                        (item) => item?.name == selectedCountry
                      )?.isoCode
                    )?.find((item) => item?.name == selectedState)
                  : selectedState
              }
              setter={(e) => {
                setSelectedState(e);
                setSelectedCity("");
              }}
              placeholder={statePlaceholder}
              label={stateLabel}
              customStyle={{}}
              isVirtualized={isVirtualized}
              error={stateError}
              errorText={stateErrorText}
            />
          )}
        </Col>
      )}
      {setSelectedCity && (
        <Col md={columnWidth} className={classes.mb16}>
          {(getCitiesOfState(selectedState, selectedCountry)?.length === 0 &&
            selectedState) ||
          (getStatesOfCountry(selectedCountry)?.length === 0 &&
            selectedCountry) ? (
            <Input
              value={selectedCity}
              setter={setSelectedCity}
              label={cityLabel}
              placeholder={cityPlaceholder}
              error={cityError}
              errorText={cityErrorText}
            />
          ) : (
            <DropDown
              options={
                setSelectedState
                  ? getCitiesOfState(selectedState, selectedCountry)
                  : City.getCitiesOfCountry(
                      Country.getAllCountries()?.find(
                        (item) =>
                          item?.name ===
                          (typeof selectedCountry === "string"
                            ? selectedCountry
                            : selectedCountry.name)
                      )?.isoCode
                    )
              }
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              optionLabel={"name"}
              optionValue={"name"}
              value={
                typeof selectedCity == "string" && selectedState
                  ? City.getCitiesOfState(
                      Country.getAllCountries()?.find(
                        (item) => item?.name == selectedCountry
                      )?.isoCode,
                      State?.getStatesOfCountry(
                        Country.getAllCountries()?.find(
                          (item) => item?.name == selectedCountry
                        )?.isoCode
                      )?.find((item) => item?.name == selectedState)?.isoCode
                    )?.find((item) => item?.name == selectedCity)
                  : typeof selectedCity == "string" && !selectedState
                  ? City.getCitiesOfCountry(
                      Country.getAllCountries()?.find(
                        (item) => item?.name == selectedCountry
                      )?.isoCode
                    )?.find((item) => item?.name == selectedCity)
                  : selectedCity
              }
              setter={setSelectedCity}
              placeholder={cityPlaceholder}
              customStyle={{
                ...cityStyle,
              }}
              label={cityLabel}
              indicatorColor={cityIndicatorColor}
              indicatorIcon={cityIndicatorIcon}
              isVirtualized={isVirtualized}
              error={cityError}
              errorText={cityErrorText}
            />
          )}
        </Col>
      )}
    </>
  );
};
export default CountryStateCity;
