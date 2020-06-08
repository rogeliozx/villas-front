import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Select from '../Components/SelectStreet';
import SelectNumber from '../Components/SelectNumber';
import Reason from '../Components/Reason';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: '0 auto',
    width: '40rem',
  },
  iframe: {
    width: '35rem',
    height: '25rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr 1fr',
  },
  loadingContainer: {
    width: '14rem',
    margin: ' 0 auto',
    minWidth: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '2rem',
    height: '10rem',
  },
  loading: {
    width: '5rem !important',
    height: '5rem !important',
  },
});
export default function Visits({ setViewImage, setData }) {
  const classes = useStyles();
  const [code, saveCode] = useState('');
  const [number, saveNumber] = useState('');
  const [reason, saveReason] = useState('');
  const [loading, setLoading] = useState(false);
  const getImages = async () => {
    setLoading(true);
    if (validator(code) || validator(number) || validator(reason)) {
      setLoading(false);
      alert("Introdusca todos los campos correctamente");
      return;
    }
    const codeHouse = number.code;
    try {
      const { data } = await axios.post('http://localhost:3001/api/new-visit', {
        codeHouse,
        section: code.name,
        reason,
      });
      setLoading(true);
      setData(data);
      setViewImage(true);
    } catch (error) {
      console.log(error);
    }
  };
  const validator = (state) => {
    if (state === undefined || state === '' || state === null) {
      return true;
    }
  };
  return (
    <Fragment>
      <div className={classes.gridContainer}>
        <iframe
          title='This is a unique title'
          src='http://localhost:3001/index'
          className={classes.iframe}
          referrerPolicy='strict-origin'
        ></iframe>
      </div>
      {loading ? (
        <Card className={classes.loadingContainer}>
          <CircularProgress className={classes.loading} />
        </Card>
      ) : (
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Select saveCode={saveCode} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectNumber
                  saveNumber={saveNumber}
                  codeSection={code ? code : null}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Reason saveReason={saveReason} />
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
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
      )}
    </Fragment>
  );
}
