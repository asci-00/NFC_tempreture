const componentStyles = (theme) => ({
  toolbar : {
    fontSize: '20px',
    '& .MuiTypography-h6' : {
      fontSize : '20px',
      marginTop: '5px',
    },
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
  smallSearch: {    
    '& input' : { width:'160px'}
  },
});

export default componentStyles;
