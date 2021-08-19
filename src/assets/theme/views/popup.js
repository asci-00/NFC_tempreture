const default_popup = (theme) => ({
    wrapper: { }, 
    head: {
        width: '80%',
        paddingBottom: '5px',
        borderBottom: '1px solid grey',
        margin:'0 auto'
    },
    text: {
        fontSize: '15px',
        textAlign: 'center',
        margin: '10px auto',
    },
    icon: {
        display: 'block',
        width: '90px',
        height: '90px',
        margin:'10px auto',
        padding: '15px',
        borderRadius: '50%',
        backgroundColor: '#ff9966',
        textAlign: 'center',
        '& img' : { width:'80%', height:'80%' }
    }
  });
  
  export default default_popup;
  