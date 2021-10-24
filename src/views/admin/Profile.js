import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import LocationOn from "@material-ui/icons/LocationOn";
import { getGroupList } from 'apis/account';
import componentStyles from "assets/theme/views/admin/profile.js";
import DataController from 'components/DataController';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import alert from 'func/common.js';
import React, { useMemo, useState } from "react";
import { useSelector } from 'react-redux';






const useStyles = makeStyles(componentStyles);

function Profile(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [editable, setEditable] = useState(false)
  const [info, setInfo] = useState(useSelector(state => state.auth))
  const [type, setType] = useState("exist")
  const { name, address } = useMemo(() => info, [])
  const { data: groupList } = props

  const onChange = (key, value) => setInfo({ ...info, [key]: value })
  const onSubmit = () => {
    console.log(info)
    setTimeout(() => alert({
      message: '변경요청이 완료되었습니다.',
      cancel: false,
      onSubmit: () => { }
    }), 0)
  }

  const groupForm = () => (
    <FormControl component="fieldset">
      <RadioGroup
        row aria-label="gender"
        name="row-radio-buttons-group"
        value={type}
        onChange={ev => setType(ev.target.value)}>
        <FormControlLabel value="new" control={<Radio color="primary" />} label="새 그룹" />
        <FormControlLabel value="exist" control={<Radio color="primary" />} label="기존 그룹" />
      </RadioGroup>
    </FormControl>
  )

  return (
    <>
      <UserHeader name={name} onClick={() => setEditable(true)} />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem"
            classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootSecondary,
              }}
            >
              <CardHeader
                subheader={

                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        My Account
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Tooltip title="승인이 필요한 변경사항은 적용에 시간이 걸릴 수 있습니다." classes={{ tooltip: classes.tooltip }}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => alert({
                              message: '변경사항을 적용하겠습니까?',
                              onSubmit
                            })}
                          >변경요청</Button>
                        </Tooltip>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>

                <Grid item xs="auto">
                  <Box
                    component={Typography}
                    variant="h6"
                    color={theme.palette.gray[600] + "!important"}
                    paddingTop=".25rem"
                    paddingBottom=".25rem"
                    fontSize=".75rem!important"
                    letterSpacing=".04em"
                    marginBottom="1.5rem!important"
                    classes={{ root: classes.typographyRootH6 }}>
                    User Information
                  </Box>
                </Grid>

                <div className={classes.plLg4}>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Username</FormLabel>
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
                            disabled={!editable}
                            autoComplete="off"
                            type="text"
                            value={info.name}
                            onChange={e => onChange('name', e.target.value)}
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Email</FormLabel>
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
                            disabled={true}
                            autoComplete="off"
                            type="email"
                            placeholder="name@example.com"
                            value={info.email}
                            onChange={e => onChange('email', e.target.value)}
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </div>
                <Box
                  component={Divider}
                  marginBottom="1.5rem!important"
                  marginTop="1.5rem!important"
                />
                <Box
                  component={Typography}
                  variant="h6"
                  color={theme.palette.gray[600] + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  Detail Information
                </Box>
                <div className={classes.plLg4}>
                  <Grid container>
                    <Grid item xs={12}>
                      {groupForm()}
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Address</FormLabel>
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
                            disabled={!editable || type !== 'new'}
                            autoComplete="off"
                            type="text"
                            value={info.address}
                            onChange={e => onChange('address', e.target.value)}
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        {
                          type === 'new' ?
                            <>
                              <FormLabel>Group name</FormLabel>
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
                                  disabled={!editable}
                                  autoComplete="off"
                                  type="text"
                                  value={info.groupName}
                                  onChange={e => onChange('groupName', e.target.value)}
                                />
                              </FormControl>
                            </>
                            :
                            <FormControl fullWidth>
                              <FormLabel>Group name</FormLabel>
                              <Select
                                onChange={(ev) => {
                                  const groupInfo = groupList.find(item => item.Group_code === ev.target.value)
                                  const { name : groupName = '', address = '' } = groupInfo || {}

                                  setInfo({
                                    ...info,
                                    groupCode: ev.target.value,
                                    groupName,
                                    address
                                  })
                                }}
                                input={<FilledInput disabled={!editable}/>}
                                value={info.groupCode}
                              > <MenuItem value=""><em>None</em></MenuItem>
                                {
                                  groupList && groupList.map((item, idx) => (
                                    <MenuItem value={item.Group_code} key={idx}>{item.Group_name}</MenuItem>
                                  ))
                                }
                              </Select>
                            </FormControl>
                        }
                      </FormGroup>
                    </Grid>
                  </Grid>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <Tooltip title="탈퇴한 계정은 복구되지 않습니다." classes={{ tooltip: classes.tooltip }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => alert({
                        message: '탈퇴하시겠습니까?',
                        onSubmit: () => { }
                      })}
                    >회원탈퇴</Button>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/*right summary information*/}
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.order1 + " " + classes.marginBottomXl0 }}
          >
            <Card classes={{ root: classes.cardRoot }}>
              <Box
                component={CardContent}
                classes={{ root: classes.ptMd4 }}
                paddingTop="0!important"
              >
                <Box textAlign="center">
                  <Typography variant="h3">
                    {name}
                  </Typography>
                  <Box
                    component={Typography}
                    variant="h5"
                    fontWeight="300!important"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      component={LocationOn}
                      width="1.25rem!important"
                      height="1.25rem!important"
                    ></Box>
                    {address}
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DataController(Profile, {
  dataRequest: getGroupList,
  dataTransform: (res) => res.data.data
});
