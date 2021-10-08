import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  buttonGroup: {
    position:'relative',
    display:'block',
    borderRadius:'5px',
    margin: '10px 0',
    padding: '10px',
    textAlign: 'right',
    background: '#fff',
    '&:after': {
      display:'block',
      clear:'both',
      content:'\" \"'
    }
  },
  leftButtonGroup: {
    float:'left',
    width:'60%',
    textAlign:'left',
    '& button' : { marginRight:'10px' }
  },
  rightButtonGroup : {
    float:'right',
    width:'40%',
    textAlign:'right'
  }
});

export default componentStyles;
