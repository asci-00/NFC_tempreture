import React from 'react'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import WarningIcon from 'assets/img/icons/common/warning.png';

export default function Warning(props) {
    const { onClose, open, children } = props
    const handleClose = () => onClose()
    const textStyle = { color:'black', paddingLeft:'30px' }
    
    return (
        <Dialog 
            PaperProps= {{style : {backgroundColor:"#F6F4ED", }}}
            maxWidth="xs"
            onClose={handleClose}
            open={open}>
            <DialogContent>
                <table><tbody>
                    <tr>
                        <td><img src={WarningIcon} style={{
                            width : '20px',
                            height : '20px'
                        }}/></td>
                        <td style={textStyle}>{children}</td>
                    </tr>
                </tbody></table>
            </DialogContent>
        </Dialog>
    )
}