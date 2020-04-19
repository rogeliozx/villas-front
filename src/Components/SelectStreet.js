/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({ saveCode }) {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (newValue && newValue.inputValue) {
          saveCode({
            title: newValue.inputValue
          });

          return;
        }

        saveCode(newValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`
          });
        }

        return filtered;
      }}
      id='free-solo-with-text-demo'
      options={top100Films}
      getOptionLabel={option => {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={option => option.title}
      style={{ width: 300, margin: '0 auto' }}
      freeSolo
      renderInput={params => (
        <TextField {...params} label='Codigo de Casa' variant='outlined' />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: ' ALBI' },
  { title: 'ALEG' },
  { title: 'ANDA' },
  { title: 'ANKA' },
  { title: ' CATA' }
];
