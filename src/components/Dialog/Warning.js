import React from 'react'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
// import Avatar from '@material-ui/core/Avatar'
import WarningIcon from '@material-ui/icons/Warning';

export default function Warning(props) {
    const { onClose, open, children } = props
    const handleClose = () => onClose() 
    const textStyle = {
        display:'inline-block',
        marginLeft:'30px',
        color:'black'
    }
    return (
        <Dialog 
            PaperProps= {{style : {backgroundColor:"pink", }}}
            maxWidth="xs"
            onClose={handleClose}
            open={open}>
            <DialogContent>
                <WarningIcon color="primary"/>
                <span style={textStyle}>{children}</span>
            </DialogContent>
        </Dialog>
    )
}