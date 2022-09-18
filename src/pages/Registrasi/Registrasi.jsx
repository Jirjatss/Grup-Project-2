import React, { useEffect, useState } from "react";
import "./Registrasi.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";

function Registrasi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  // const [jenis, setJenis] = useState("");
  const navigate = useNavigate();

  const [isiregist, setIsiRegist] = useState([]);

  const getRegister = () => {
    const formData = localStorage.getItem("userRegist");
    setIsiRegist(JSON.parse(formData));
  };

  const setUser = async () => {
    if (name === "" || email === "" || password === "" || role === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      Swal.fire({
        title: "Sweet!",
        text: "Selamat anda berhasil Login",
        icon: "success",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
      navigate("/");
      let dataRegist = {
        name,
        email,
        password,
        role,
      };

      fetch("https://631cc4864fa7d3264cb66955.mockapi.io/UserRegist", {
        method: "POST",
        body: JSON.stringify(dataRegist),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => JSON.parse(response))
        .then((data) => setIsiRegist(data));
      // if (isiregist === null) {
      //   setIsiRegist([dataRegist]);
      //   localStorage.setItem("userRegist", JSON.stringify([dataRegist]));
      // } else {
      //   localStorage.setItem("userRegist", JSON.stringify([...isiregist, dataRegist]));
      //   setIsiRegist([...isiregist, dataRegist]);
      // }
    }
  };
  useEffect(() => {
    getRegister();
  }, []);

  useEffect(() => {
    console.log(isiregist);
  }, [isiregist]);

  return (
    <>
      <Navbar />
      <div id="containerConsult">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 className="section-heading">Register</h1>
            <h5 className="section-subheading">Silahkan Registrasi terlebih dahulu!</h5>
            <hr />
          </div>
        </div>
      </div>
      <section id="register">
        <div class="container block">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <header class="mast">
                <div class="container-fluid hal">
                  <div class="masthead-subheading">
                    <img
                      className="poster"
                      src={"https://see.fontimg.com/api/renderfont4/K7axe/eyJyIjoiZnMiLCJoIjoxMTYsInciOjEyNTAsImZzIjo5MywiZmdjIjoiIzEyMTIxMiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QmFieSBDYXJl/hugh-is-life-personal-use-italic.png"}
                      alt=""
                    />
                  </div>
                  <div style={{ zIndex: "1" }} class="masthead-heading">
                    <img
                      className="poster"
                      src={"https://see.fontimg.com/api/renderfont4/gv11/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTI1MCwiZnMiOjQxLCJmZ2MiOiIjMTIxMjEyIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/eW91ciBiYWJ5IHNvbHV0aW9ucw/cookiemonster.png"}
                      alt=""
                    />
                  </div>
                </div>
              </header>
            </div>
            <div class="col-lg-6 col-sm-12">
              <form id="form">
                <fieldset>
                  <legend>
                    <b>Registrasi</b>
                  </legend>
                  <div class="field login">
                    <label className="text-center">Masukkan Nama</label>
                    <br />
                    <br />
                    <input id="email" type="nama" name="nama" onChange={(e) => setName(e.target.value)} />
                    <br />
                  </div>
                  <div class="field login">
                    <label className="text-center">Masukkan Email</label>
                    <br />
                    <br />
                    <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                  </div>
                  <div class="field login ">
                    <label>Masukkan Password</label>
                    <br />
                    <br />
                    <input id="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                  </div>
                  <div>
                    <select className="form-select mt-3" required onChange={(e) => setRole(e.target.value)}>
                      <option value="Dokter" selected disabled>
                        Position
                      </option>
                      <option value="Dokter">Dokter</option>
                      <option value="Pasien">Pasien</option>
                    </select>
                    <br />
                  </div>
                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="noselect" onClick={(e) => setUser(e.preventDefault())}>
                      Register
                    </button>
                  </div>
                  <div className="text-center">
                    <h6>
                      Already have an account?
                      <a style={{ textDecoration: "none" }} href="/Login">
                        Login
                      </a>
                    </h6>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            <form style={{ border: "10px double black", padding: "3rem", marginBottom: "2rem", borderRadius: "10px" }}>
              <h5 className="text-center">Register</h5>
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">
                  Enter your full name.
                </div> */}
      {/* 
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form className="requires-validation" noValidate>
                  <div className="col-md-12">
                    <input className="form-control" type="text" name="name" placeholder="Full Name" required onChange={(e) => setName(e.target.value)} />
                    <div className="valid-feedback">Username field is valid!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="col-md-12">
                    <select className="form-select mt-3" required onChange={(e) => setRole(e.target.value)}>
                      <option value="Dokter" selected disabled>
                        Position
                      </option>
                      <option value="Dokter">Dokter</option>
                      <option value="Pasien">Pasien</option>
                    </select>
                    <div className="valid-feedback">You selected a position!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <div className="valid-feedback">Password field is valid!</div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1 jenis" htmlFor="gender">
                      Gender :
                    </label>

                    <input type="radio" className="btn-check" name="gender" id="Laki-laki" autoComplete="off" required onChange={(e) => setJenis(e.target.id)} />
                    <label className="btn btn-sm btn-outline-warning jenis" htmlFor="Laki-laki">
                      Male
                    </label>

                    <input type="radio" className="btn-check" name="gender" id="Perempuan" autoComplete="off" required onChange={(e) => setJenis(e.target.id)} />
                    <label className="btn btn-sm btn-outline-warning jenis" htmlFor="Perempuan">
                      Female
                    </label>

                    <div className="valid-feedback mv-up">You selected a gender!</div>
                    <div className="invalid-feedback mv-up">Please select a gender!</div>
                  </div>
                  <div className="text-center mt-2">
                    <label className="form-check-label">
                      <b>I confirm that all data are correct and can be responsible</b>{" "}
                    </label>
                  </div>
                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="noselect" onClick={(e) => setUser(e.preventDefault())}>
                      Register
                    </button>
                  </div>
                  <div className="col-md-12 mt-3">
                    <h6>
                      Already have an account?
                      <a style={{ textDecoration: "none" }} href="/Login">
                        Login
                      </a>
                    </h6>
                  </div>
                </form>
</div>
</div>
</div>
</div>
</div> */}
    </>
  );
}

export default Registrasi;
