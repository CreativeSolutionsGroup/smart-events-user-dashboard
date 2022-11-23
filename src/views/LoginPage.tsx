import { Layout } from "../components/Layout"
import Login from "../components/Login"
import RankupDialog from "../components/RankupDialog"

export const LoginPage = () => {
    return (
        <Layout>
            <Login />
            <RankupDialog />
        </Layout>
    )
}