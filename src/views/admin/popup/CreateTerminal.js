//react library
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilledInput from "@material-ui/core/FilledInput";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import popupStyles from "assets/theme/popup/filtering.js";
import Map from 'components/Map/Map';
import React, { useMemo, useState } from "react";
import { useSelector } from 'react-redux';

const useStyles = makeStyles(popupStyles);

/**
 * building_name : string
 * detail_position : string
 * kiosk_SN : string,
 * latitude : number, longitude : number
 */

const CreateTerminal = (props) => {
  const classes = useStyles();
  const groupCode = useSelector(state => state.auth.groupCode)
  const { open, onClose, onSubmit, name, email } = props;

  const [info, setInfo] = useState({
    building_name : '',
    detail_position : '',
    kiosk_SN: '',
    latitude : 	37.517235, longitude : 127.047325 //기본값 서울
  })

  const onChange = (key, value) => setInfo({...info, [key] : value})

  return (
    <Dialog open={open} onClose={onClose} className={classes.paper}>
      <DialogTitle>디바이스 정보를 기입하여주십시오</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormGroup>
                <FormLabel>그룹코드</FormLabel>
                <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Name"
                value={groupCode}
                disabled
              />
            </FormGroup>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormGroup>
                  <FormLabel>건물이름</FormLabel>
                  <FilledInput
                  autoComplete="off"
                  type="text"
                  placeholder="Building name"
                  value={info.building_name}
                  onChange={ev => onChange('building_name', ev.target.value)}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                  <FormLabel>시리얼넘버</FormLabel>
                  <FilledInput
                  autoComplete="off"
                  type="text"
                  placeholder="Serial number"
                  value={info.kiosk_SN}
                  onChange={ev => onChange('kiosk_SN', ev.target.value)}
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
                <FormLabel>상세주소</FormLabel>
                <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Detail Address"
                value={info.detail_position}
                onChange={ev => onChange('detail_position', ev.target.value)}
              />
            </FormGroup>
          </Grid>
        </Grid>
        {useMemo(()=><Map clickAble={true} onClick={(latitude, longitude) => {
          setInfo({...info, latitude, longitude})
        }}/>, [])}
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => onSubmit({groupCode, ...info})}
          color="primary"
          variant="contained"
        >
          생성
        </Button>
        <Button onClick={onClose} autoFocus color="default" variant="contained">
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTerminal