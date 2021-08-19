import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from '@react-spring/web'; // web.cjs is required for IE 11 support

import { useSelector, useDispatch } from 'react-redux'
import { closePopup } from 'actions/popup'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: '400px'
    },
    title: {

    },
    message: {
        textAlign: 'center',
        minHeight: '100px',
        lineHeight: '100px',
        verticalAlign: 'middle',
        fontSize:'20px',
    },
    buttonGroup: {
        textAlign: 'center'
    }
}))
const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => { if (open && onEnter) onEnter() },
        onRest: () => { if (!open && onExited) onExited() },
    });

    return <animated.div ref={ref} style={style} {...other}>{children}</animated.div>
})

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
}

export default function Alert() {
    const config = useSelector(state => state.popup)
    const dispatch = useDispatch()
    const classes = useStyles();

    const onClose = () => { config.onClose(); dispatch(closePopup()); }
    const onSubmit = () => { config.onSubmit(); onClose() }
    const onCancel = () => { config.onCancel(); onClose() }
    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={config.visible}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}>
            <Fade in={config.visible}>
                <div className={classes.paper}>
                    {config.type === 'html' ? config.message : 
                        <div>
                            {config.title && <h2 className={classes.title}>{config.title}</h2>}
                            <div className={classes.message}>{config.message}</div>
                            <div className={classes.buttonGroup}>
                                { config.submit && <Button variant="contained" color="primary" onClick={onSubmit}>{config.submitText}</Button> }
                                { config.cancel && <Button variant="contained" color="secondary" onClick={onCancel}>{config.cancelText}</Button> }
                            </div>
                        </div>
                    }                    
                </div>
            </Fade>
        </Modal>
    )
}
