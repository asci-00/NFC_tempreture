//react library
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { getGroupList } from 'apis/account';
import popupStyles from "assets/theme/popup/filtering.js";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(popupStyles);

const Register = (props) => {
  const classes = useStyles();
  const { open, onClose, onSubmit, name, email } = props;

  const [type, setType] = useState("exist");
  const [info, setInfo] = useState({
      groupName : '',
      groupCode : '',
      address: ''
  })
  const [groupList, setGroupList] = useState([])

  useEffect(() => {
    getGroupList().then(res => setGroupList(res.data.data)).catch(err=>console.log(err))
  }, []);

  const onChange = (key, value) => setInfo({...info, [key] : value})

  const groupForm = () => (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        value={type}
        onChange={(ev) => setType(ev.target.value)}
      >
        <FormControlLabel
          value="new"
          control={<Radio color="primary" />}
          label="새 그룹"
        />
        <FormControlLabel
          value="exist"
          control={<Radio color="primary" />}
          label="기존 그룹"
        />
      </RadioGroup>
    </FormControl>
  );

  return (
    groupList && <Dialog open={open} onClose={onClose} className={classes.paper}>
      <DialogTitle>안녕하세요 {name}님 회원가입을 위해 아래 정보를 기입하여주십시오</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {groupForm()}
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
                <FormLabel>이름</FormLabel>
                <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Name"
                value={name}
                disabled
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
                <FormLabel>E-mail</FormLabel>
                <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Name"
                value={email}
                disabled
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormGroup>
              <FormLabel>주소</FormLabel>
              <FormControl
                variant="filled"
                component={Box}
                width="100%"
                marginBottom="1rem!important"
              >
                <Box
                  paddingLeft="0.75rem"
                  paddingRight="0.75rem"
                  component={FilledInput}
                  disabled={type !== "new"}
                  autoComplete="off"
                  type="text"
                  value={info.address}
                  onChange={(e) => onChange("address", e.target.value)}
                />
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormGroup>
              {type === "new" ? (
                <>
                  <FormLabel>그룹이름</FormLabel>
                  <FormControl
                    variant="filled"
                    component={Box}
                    width="100%"
                    marginBottom="1rem!important"
                  >
                    <Box
                      paddingLeft="0.75rem"
                      paddingRight="0.75rem"
                      component={FilledInput}
                      autoComplete="off"
                      type="text"
                      value={info.groupName}
                      onChange={(e) => onChange("groupName", e.target.value)}
                    />
                  </FormControl>
                </>
              ) : (
                <FormControl fullWidth>
                  <FormLabel>그룹이름</FormLabel>
                  <Select
                    onChange={(ev) => {
                      const groupInfo = groupList.find(
                        (item) => item.Group_code === ev.target.value
                      );
                      const { name: groupName = "", address = "" } =
                        groupInfo || {};

                      setInfo({
                        ...info,
                        groupCode: ev.target.value,
                        groupName,
                        address,
                      });
                    }}
                    input={<FilledInput />}
                    value={info.groupCode}
                  >
                    {" "}
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {groupList &&
                      groupList.map((item, idx) => (
                        <MenuItem value={item.Group_code} key={idx}>
                          {item.Group_name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              )}
            </FormGroup>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => onSubmit(type, info)}
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

export default Register