import * as React from "react";
import { login } from "../../functions/general";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

export default function SignIn() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(user)
      .then((res) => {
        if (res.data.status === "error") {
          toast.error(res.data.message);
        } else {
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("user", res.data.user.id);
          dispatch({
            type: "LOGIN",
            user: {
              token: res.data.token,
              id: res.data.user.id,
              username: res.data.user.username,
              role: res.data.user.role,
            },
          });
          navigate("/" + res.data.user.role, { replace: true });
        }
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.data);
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          {/* Same as */}
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className=" flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="username"
                              onChange={handleChange}
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              ชื่อผู้ใช้งาน
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className=" flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              onChange={handleChange}
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              รหัสผ่าน
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <a href="/register">สมัครสมาชิก</a>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            เข้าสู่ระบบ
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
