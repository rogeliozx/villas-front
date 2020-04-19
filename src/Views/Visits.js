import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '../Components/SelectStreet';
import SelectNumber from '../Components/SelectNumber';
import Reason from '../Components/Reason';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: '0 auto',
    width: '40rem',
    marginTop: '10rem'
  }
});

export default function Visits() {
  const classes = useStyles();
  const [code, saveCode] = useState('');
  const [number, saveNumber] = useState('');
  const [reason, saveReason] = useState('');
  const getImages = async () => {
    const date = moment().format('YYYY-M-D-h-mm-ss');
    console.log(code);
    console.log(number);
    console.log(reason);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Select saveCode={saveCode} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectNumber saveNumber={saveNumber} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Reason saveReason={saveReason} />
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={getImages}
          >
           Registrar Visita
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
