import React, { useEffect, useState, Fragment } from 'react';
import PictureCard from '../Components/PictureCard';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: '10rem',
  },
  containerButton: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: '7rem',
    marginRight: '25%',
    marginLeft: '25%',
    marginTop: '6rem',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: '7rem',
    marginRight: '25%',
    marginLeft: '25%',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
  },
});

const Pictures = ({ data, setViewImage }) => {
  console.log(setViewImage);
  
  const [urlReady, setUrlReady] = useState(false);
  useEffect(() => {
    data.picture.ine = data.picture.ine.replace(/\\/g, '\\\\');
    data.picture.ife = data.picture.ife.replace(/\\/g, '\\\\');
    console.log(data);
    setUrlReady(true);
  }, [urlReady]);
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          {urlReady ? (
            <PictureCard
              url={
                'http://localhost:3001/api/get-picture?image=' +
                data.picture.ine
              }
            />
          ) : null}
          {urlReady ? (
            <PictureCard
              url={
                'http://localhost:3001/api/get-picture?image=' +
                data.picture.ife
              }
            />
          ) : null}
        </div>
        <div className={classes.containerButton}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.confirmButton}
            onClick={()=>{}}
          >
            Aceptar
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pictures;
