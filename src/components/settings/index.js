import { useState, useEffect } from 'react'
// material
import {
  Box,
  Backdrop,
  Paper,
  Tooltip,
  Divider,
  Typography,
  Stack,
  IconButton
} from '@material-ui/core'
//
import SettingMode from './SettingMode'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260

export default function Settings() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      />

      <Box
        sx={{
          top: 12,
          bottom: 12,
          right: 0,
          position: 'fixed',
          zIndex: 2001,
          ...(open && { right: 12 }),
        }}
      >

        <Paper
          sx={{
            height: 1,
            width: '0px',
            overflow: 'hidden',
            boxShadow: (theme) => theme.customShadows.z24,
            transition: (theme) => theme.transitions.create('width'),
            ...(open && { width: DRAWER_WIDTH }),
          }}
        >
          <Divider />

          <Stack spacing={4} sx={{ pt: 3, px: 3, pb: 15 }}>
            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Mode</Typography>
              <SettingMode />
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}
