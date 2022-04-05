import { useReducer } from "react";
import React from "react";
import reducer from "./reducer";

const Login = () => {
  const initialUser = {
    nombre: "",
    password: "",
  };

  const [state, dispatch] = useReducer(reducer, initialUser);
  console.log("from reducer", state);

  return (
    <div className="card animate__animated animate__zoomIn">
      <div className="image">
        <figure className="image is-256x256">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWlRt9IuRhQHG24NixMul3Q62vabTJNLsCw&usqp=CAU" />
        </figure>
      </div>
      <div className="card-header is-flex is-justify-content-center">
        <h1 className="animate__animate animate__bounce card-header-title is-centered has-text-danger is-size-4">
          Welcome!
        </h1>
      </div>
      <div className="card-content">
        <form action="submit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                onChange={(e) =>
                  dispatch({
                    type: "login",
                    payload: { nombre: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                onChange={(e) =>
                  dispatch({
                    type: "login",
                    payload: { password: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <div className="card-footer">
            <button className="button is-info card-footer-item">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
