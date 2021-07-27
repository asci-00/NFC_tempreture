import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import { DateRangePicker } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
    divider : {
        width: 'calc(100% - 20px)',
        margin:'0px auto'
    },
    input : {
        marginTop:'-10px'
    },
    title : {
        background:'#eee'
    }
}));

export default function Form({data, onClick}) {
    const classes = useStyles()
    //const {displayname, email, UUID} = data

    const TextLabel = ({label, value, ...size}) => (
        <Grid item {...size}><Grid container>
            <Grid item xs={6}><div className={classes.paper}>{label}</div></Grid>
            <Grid item xs={6}><div className={classes.paper}>{value}</div></Grid>
        </Grid></Grid>
    )

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom className={`${classes.paper} ${classes.title}`}>정보조회</Typography>
            </Grid>
            <TextLabel xs={12} lg={6} label="name" value="displayname"/>
            <TextLabel xs={12} lg={6} label="email" value="email"/>
            <TextLabel xs={12} lg={6} label="UUID" value="uuid"/>
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom className={`${classes.paper} ${classes.title}`}>
                    동선검색
                    <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{float:'right'}}
                    onClick={onClick}
                    >동선 조회</Button>
                </Typography>
            </Grid>
            <TextLabel xs={12} lg={6} label="groupCode" value={
                <input placeholder="None" className={classes.input}/>
            }/>
            <TextLabel xs={12} lg={6} label="label" value="value"/>
            <TextLabel xs={12} lg={12} label="Date" value={
               <DateRangePicker/> 
            }/>
        </Grid>
    )
}