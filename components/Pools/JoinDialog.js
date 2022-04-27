import { Dialog, DialogTitle, Box, DialogContent, DialogActions, Button, Typography, Stack, alpha, useTheme, Divider, TextField } from "@mui/material";
import { useState } from "react";
import URow from "components/common/URow";

const JoinDialog = (props) => {
  const { onClose, open } = props;
  const [info, setInfo] = useState(false)

  const theme = useTheme()
  const labelColor = alpha(theme.palette.common.white, 0.4)

  const handleClose = () => {
    onClose()
    setInfo(false)
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth='xs'
      PaperProps={{
        style: {
          background: '#14264B',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '32px',
          width: '100%',
        }
      }}
    >
      {
        !info && (
          <Box>
            <DialogTitle>
              Disclaimer
            </DialogTitle>
            <DialogContent>
              <Box sx={{ height: '300px', marginTop: '20px', overflowY: 'scroll' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus justo, nunc sed tincidunt habitasse quis elit. Cursus tristique purus eget tellus. Et feugiat elementum morbi etiam eu tincidunt. Sed adipiscing cursus neque mattis. Molestie nisl viverra dictum quis eget dui in id mi. Varius nec et donec ornare lectus in consectetur. Lacus egestas urna id urna nunc, pharetra ullamcorper. Eu integer ut massa id quis amet. Mattis pellentesque egestas arcu, massa et tincidunt sit vivamus massa. Etiam rhoncus, quisque velit ultrices id. Ultricies egestas proin sed enim sem id purus lectus lorem. Odio convallis at iaculis at vestibulum. Neque ac eget etiam nunc feugiat netus congue dui. Mi, aenean turpis pulvinar orci, nisi, adipiscing.
                Malesuada eget mollis feugiat erat enim. Et at viverra eget nunc egestas pharetra amet at. Vulputate enim non dignissim et sapien, at elit interdum. Tortor feugiat viverra vestibulum, nunc venenatis. Elementum amet dictumst elit iaculis vitae viverra erat sagittis morbi. Quam molestie orci faucibus iaculis nec enim urna. Condimentum et lectus mauris pellentesque nisi enim, pretium diam elit. Adipiscing leo vitae dapibus varius in.
                Vitae est pretium tortor ultrices sem. At morbi adipiscing velit, porttitor fringilla libero nibh felis, ut. Lectus posuere tempus libero venenatis malesuada interdum a. Massa adipiscing ipsum leo nam consectetur. In phasellus diam eleifend arcu.
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={()=>setInfo(true)} sx={{ width: '100%' }}>Continue</Button>
            </DialogActions>
          </Box>
        )
      }
      {
        info && (
          <Box>
            <DialogTitle>
              Join Pool
            </DialogTitle>
            <DialogContent>
              <Typography variant="body2" color={labelColor} mt={3}>From</Typography>
              <URow>
                <TextField
                  type="number"
                  placeholder="0.00"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontSize: "32px" }
                  }}
                />
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button variant="outlined" size="small">MAX</Button>
                  <Typography variant="body1">PHTR</Typography>
                </Stack>
              </URow>
              <Divider sx={{ my: 3 }} />
              <Typography variant="body2" color={labelColor}>To</Typography>
              <URow>
                <TextField
                  type="number"
                  placeholder="0.00"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontSize: "32px" }
                  }}
                />
                <Typography variant="body1">PHTR</Typography>
              </URow>
              <Divider sx={{ my: 3 }} />
              <URow>
                <Typography variant="body1" color={labelColor}>Balance</Typography>
                <Typography variant="body1">0.518 ETH</Typography>
              </URow>
              <URow sx={{mt: 1}}>
                <Typography variant="body1" color={labelColor}>Remaining</Typography>
                <Typography variant="body1">0.518 ETH</Typography>
              </URow>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" sx={{ width: '100%' }}>Purchase</Button>
            </DialogActions>
          </Box>
        )
      }

    </Dialog>
  )
}

export default JoinDialog
