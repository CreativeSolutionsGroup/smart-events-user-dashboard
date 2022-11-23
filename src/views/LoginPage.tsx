import { Box } from "@mui/material"
import { Layout } from "../components/Layout"
import Login from "../components/Login"
import RankupDialog from "../components/RankupDialog"

export const LoginPage = () => {
  return (
    <Layout>
      <Box display="flex" flex="1" justifyContent="center" alignItems="center" height={1}>
        <Login />
      </Box>
      <RankupDialog />
    </Layout>
  )
}