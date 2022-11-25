import { Container, Typography } from "@mui/material"

export const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h5" color="text.secondary">That page was not found.</Typography>
    </Container>
  )
}