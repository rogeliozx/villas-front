import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup({saveReason}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Visita');

  const handleChange = event => {
    setValue(event.target.value);
    saveReason(value)
  };

  return (
    <Fragment>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
          <FormControlLabel
            value="Visita"
            control={<Radio color="primary" />}
            label="Visita"
            labelPlacement="start"
          />
          <FormControlLabel
            value="Servicio"
            control={<Radio color="primary" />}
            label="Servicio"
            labelPlacement="start"
          />
          <FormControlLabel
            value="Oxxo"
            control={<Radio color="primary" />}
            label="Oxxo"
            labelPlacement="start"
          />
        </RadioGroup>
        <FormHelperText>Razon de visita</FormHelperText>
      </FormControl>
    </Fragment>
  );
}