import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import { useSelector, useDispatch } from 'react-redux'
import { closePopup } from '/actions/popup'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    title: {

    },
    message: {

    },
    buttonGroup: {

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

    const onClose = () => { dispatch(closePopup); config.onClose() }

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
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 className={classes.title}>{config.title}</h2>
                    <p className={classes.message}>{config.message}</p>
                    <div className={classes.buttonGroup}>
                        { config.submit && <Button variant="contained" color="primary" onClick={config.onSubmit}>{config.submitText}</Button> }
                        { config.cancel && <Button variant="contained" color="secondary"  onClick={config.onCancel}>{config.cancelText}</Button> }
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}
