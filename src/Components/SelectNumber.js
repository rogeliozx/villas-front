/* eslint-disable no-use-before-define */
import React, { useEffect, useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const filter = createFilterOptions();
export default function SelectNumber({ saveNumber, codeSection }) {
  const [codes, setCodes] = useState(null);
  const fetchCodes = useCallback(async () => {
    if (!codeSection) {
      return;
    }
    try {
      const { data } = await axios.get(
        `http://192.168.100.3:3001/api/users-sections?section=${codeSection.name}`
      );
      const users = [];
      data.users.forEach((element) => {
        const user = {
          code: element,
        };
        users.push(user);
      });
      setCodes(users);
    } catch (error) {
      console.log(error);
    }
  }, [setCodes, codeSection]);
  useEffect(() => {
    fetchCodes();
  }, [fetchCodes]);
  return (
    <Autocomplete
      disabled={codes ? false : true}
      onChange={(event, newValue) => {
        if (newValue && newValue.inputValue) {
          saveNumber({
            title: newValue.inputValue,
          });

          return;
        }

        saveNumber(newValue);
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
      options={codes ? codes : []}
      getOptionLabel={(option) => {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        if (option.code) {
          return option.code;
        }
        return option.code;
      }}
      renderOption={(option) => option.code}
      style={{ width: 300, margin: '0 auto' }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label='Codigo de Casa' variant='outlined' />
      )}
    />
  );
}
