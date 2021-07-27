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
  }
});

export default componentStyles;
