import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCheckLogin } from "../../helper/getLocalStorage";
import Navbar from "../../components/Layout/Navbar";

function Login() {
  const { userData, setUserData } = useCheckLogin();
  const navigate = useNavigate();
  AOS.init();
  const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDataForm, setUserDataForm] = useState(null);

  const [loginButton, setLoginButton] = useState(true);
  const [logoutButton, setLogoutButton] = useState(false);
  const [form, setForm] = useState(true);

  // logout via email
  const LogoutHandle = () => {
    signoutSuccess();
  };
  // Akhir Logout via email

  // Login via email
  const LoginHandle = () => {
    let isFoundUser = null;
    if (userDataForm) {
      isFoundUser = userDataForm.find((user) => {
        return email === user.email && password === user.password && user.role;
      });
    }
    if (isFoundUser && userDataForm.length) {
      localStorage.setItem("userlogin", JSON.stringify(isFoundUser));
      Swal.fire({
        title: "Sweet!",
        text: "Selamat anda berhasil Login",
        icon: "success",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
      navigate("/");
    } else {
      loginFailed();
    }
  };
  // Akhir login via email

  // Login via google
  const loginSuccess = (res) => {
    Swal.fire({
      title: "Sweet!",
      icon: "success",
      text: "Selamat anda berhasil Login",
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
    });
    navigate("/");
    localStorage.setItem("token", res.tokenId);
    setLoginButton(false);
    setLogoutButton(true);
    setForm(false);
  };
  // AKhir login via google

  const failureSuccess = (res) => {
    console.log("Login Failed! : ", res);
  };

  // Login Gagal
  const loginFailed = () => {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Data tidak boleh kosong atau data yang anda masukkan salah",
    });
  };
  // Akhir Login Gagal

  // Sign out
  const signoutSuccess = () => {
    Swal.fire({
      title: "Anda ingin Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "warning",
          title: "Anda telah logout!",
          confirmButtonText: '<i className="fa fa-times"></i> Silahkan Login Kembali!',
        });
        navigate("/");
        setLoginButton(true);
        setLogoutButton(false);
        setForm(true);
        localStorage.removeItem("token");
        localStorage.removeItem("userlogin");
        console.clear();
      }
    });
  };
  // Akhir Signout

  const user = localStorage.getItem("token");
  const user1 = localStorage.getItem("userlogin");

  useEffect(() => {
    let userlogin = localStorage.getItem("userRegist");
    setUserDataForm(JSON.parse(userlogin));
  }, []);

  if (user) {
    return (
      <>
        <Navbar />
        <div id="containerlogin">
          <div className="row d-flex justify-content-center">
            <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
              {user || user1 ? (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Logout
                    </h1>
                    <h5 className="section-subheading">Logout membuat akses anda terbatas</h5>
                    <hr />
                    <br />
                  </div>
                </>
              ) : (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Login
                    </h1>
                    <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
                    <hr />
                    <br />
                  </div>
                </>
              )}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-12" style={{ textAlign: "center", padding: "6rem" }}>
                <div className="col-12 mb-3">
                  <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={signoutSuccess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (user1) {
    return (
      <>
        <Navbar />
        <div id="containerlogin">
          <div className="row d-flex justify-content-center">
            <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
              {user || user1 ? (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Logout
                    </h1>
                    <h5 className="section-subheading">Logout membuat akses anda terbatas</h5>
                    <hr />
                    <br />
                  </div>
                </>
              ) : (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Login
                    </h1>
                    <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
                    <hr />
                    <br />
                  </div>
                </>
              )}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-12" style={{ textAlign: "center", padding: "6rem" }}>
                <div className="col-12 mb-3">
                  <button className="noselect" onClick={() => LogoutHandle()}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div id="containerlogin">
          <div className="row d-flex justify-content-center">
            <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
              <div id="services">
                <h1 id="tagline" className="section-heading">
                  Login
                </h1>
                <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
                <hr />
                <br />
              </div>
            </div>
            <div className="form-body">
              <div className="row">
                <div className="form-holder">
                  <div className="form-content" id="formlogin">
                    <div className="form-items">
                      <h3>Login</h3>
                      <p>Fill in the data below.</p>
                      <form className="requires-validation" noValidate>
                        <div className="col-md-12">
                          <input className="form-control" type="email" name="email" placeholder="E-mail Address" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="col-md-12">
                          <input className="form-control" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                          <div className="valid-feedback">Password field is valid!</div>
                        </div>

                        <div className="text-center mt-4">
                          <label className="form-check-label">
                            <h6>
                              <b>I confirm that all data are correct and can be responsible</b>
                            </h6>
                          </label>
                        </div>
                        <div className="form-button mt-3">
                          <button id="submit" type="submit" className="noselect" onClick={(e) => LoginHandle(e.preventDefault())}>
                            Login
                          </button>
                        </div>
                        <div className="col-12 mb-3">
                          <GoogleLogin clientId={clientId} buttonText="Continue With Google" onSuccess={loginSuccess} onFailure={failureSuccess} cookiePolicy={"single_host_origin"} />
                        </div>
                        <div className="text-center">
                          <h6>
                            Not a member?
                            <a style={{ textDecoration: "none" }} href="/Registrasi">
                              Register
                            </a>
                          </h6>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
