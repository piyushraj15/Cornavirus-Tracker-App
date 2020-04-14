import React from 'react'

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {

        
    if(!confirmed){
        return "Loading..."
    }
    else{
    console.log(confirmed.value)
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography varient="h5">
                        <CountUp start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography varient="h5">
                    <CountUp start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of Recovered cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Death</Typography>
                    <Typography varient="h5">
                    <CountUp start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of Death cases of COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    )
    }
}

export default Cards