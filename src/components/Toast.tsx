import { Snackbar, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { ToastType } from './types/Toast'

type ToastProps = {
    toast: ToastType
}

const Toast = ({ toast }: ToastProps) => {
    const { variant = 'info', message } = toast

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, [])

    const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
            <Alert
                onClose={handleClose}
                severity={variant}
                sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Toast
