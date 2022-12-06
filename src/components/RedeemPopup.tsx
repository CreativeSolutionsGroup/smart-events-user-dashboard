import { BottomPaper } from "@creativesolutionsgroup/bottom-paper"
import { Button, Typography } from "@mui/material"
import { PropsWithChildren, useCallback } from "react"
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { IReward } from "../models/User"

interface PopupProps { reward: IReward, show?: boolean, onClose: Function };

export const RedeemPopup = ({ reward, show, onClose }: PropsWithChildren<PopupProps>) => {
  
  const particles_init = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <BottomPaper show={show ?? false} onClose={onClose}>
      <Particles options={{
          fpsLimit: 60,
          fullScreen: false,
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#c0c0c0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            size: {
              value: { min: 1, max: 1 },
            },
          },
          detectRetina: true,
        }} init={particles_init} />

      <Typography variant="h5">{reward.name ?? ""}</Typography>
      <Typography variant="body1">{reward.instructions ?? ""}</Typography>
      <Typography color="text.secondary">{reward.description ?? ""}</Typography>
      <Button sx={{mt: 3}} variant="outlined" onClick={() => onClose()}>Redeem</Button>
    </BottomPaper>
  )
}