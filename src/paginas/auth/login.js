import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-box">
      <div className="login-logo">
          <b>Iniciar Sesion</b>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Inicia tus credenciales</p>
          <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recordarme</label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Inicia Sesion
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <p className="mb-1">
            <Link to="forgot-password.html">Recuperar Contraseña</Link>
          </p>
          <p className="mb-0">
            <Link to ="register.html" className="text-center">
              Registarme
            </Link>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  );
};

export default Login;
