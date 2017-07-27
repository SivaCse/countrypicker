import React from 'react';

// components / utils
import CountryCard from '../components/CountryCard';
import { countryPropType } from '../utils/customPropTypes';
import { objectIsEmpty } from '../utils/helperFunctions';

const CountryDetailPage = ({ selectedCountry }) => (
  <div>
    { objectIsEmpty(selectedCountry) ?
      <div>Select a country to get more information!</div> :
      <CountryCard
        title={selectedCountry.name}
        subTitle={selectedCountry.region}
        image={selectedCountry.flag}
        languages={selectedCountry.languages}
        capitalCity={selectedCountry.capital}
        currencies={selectedCountry.currencies}
        population={selectedCountry.population}
      />
    }
  </div>
);

CountryDetailPage.propTypes = {
  selectedCountry: countryPropType.isRequired
};

export default CountryDetailPage;
