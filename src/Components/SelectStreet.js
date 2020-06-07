/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({ saveCode }) {
  const [seccions, setSeccions] = useState([]);
  useEffect(() => {
    fetchSeccions();
  }, []);
  const fetchSeccions = async () => {
    try {
      const result = await axios.get('http://localhost:3001/api/all-names');
      const { data } = result.data;
      setSeccions(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        if (newValue && newValue.inputValue) {
          console.log(newValue.inputValue);
          saveCode({
            title: newValue.inputValue,
          });
          return;
        }
        console.log(newValue);
        saveCode(newValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      id='free-solo-with-text-demo'
      options={seccions}
      getOptionLabel={(option) => {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') {
          console.log(option)
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ width: 300, margin: '0 auto' }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label='Codigo de Casa' variant='outlined' />
      )}
    />
  );
}
