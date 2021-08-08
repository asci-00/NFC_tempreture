const componentStyles = (theme) => ({
  removeUnderline : {
    '& .MuiInput-underline' : {
      '&:after, &:before' : {
        borderBottom:'none !important'
      }
    }
  },
  paper : {
      width:'100%',
      minHeight:'565px',
      overflow:'hidden'
  },
  tableToolbar: {
    '& .MuiTypography-h6' : {
      fontSize : '20px'
    },
    '& input' : { width:'160px'}
  }
});

export default componentStyles;
