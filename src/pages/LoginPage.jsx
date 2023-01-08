import { Helmet } from "react-helmet"
import { AppContainer } from "components/App,styled"
import { LoginForm } from "components/LoginForm/LoginForm"

const Login = () => {
    return (
        <AppContainer>
            {/* <Helmet>
                <title>
                    Login
                </title>
            </Helmet> */}
<LoginForm/>
       </AppContainer> 
    )
}

export default Login