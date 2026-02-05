import './Login.css'
import './Login.js'

const Login = () => {

    return (

        <>
        <div className="login">

        <form action="" className="login__form">
          <h1 className="login__title">login</h1>

          <div className="login__content">
            <div className="login__box">
                <i className="bx bx-lock-alt"></i>
              
                <div className="login__box-input">
                    <input type="email" required className="login__input" placeholder=""/>
                <label htmlFor="login__input" className="login__label">Nome de Usuário</label>
              </div>
            </div>

            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>


              <div className="login__box-input">
                <input type="password" required className="login__input" id="login-pas" placeholder="" />
                <label htmlFor="login-pas" className="login__label">Senha</label>
                <i className="ri-eye-off-line login__eye"></i>
               </div>
            </div>
          </div>

          <div className="login__check">
            <div className="login__check-group">
                <input type="checkbox" className="login__check-input" />
              <label htmlFor="login__check-input" className="login__check-label">Remember me</label>
            </div>

              <a href="#" className="login__forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="login__button">Login</button>

          <p className="login__register">
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>

    </>

    )


}

export default Login