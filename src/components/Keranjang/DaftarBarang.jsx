import Aos from "aos";
import React from "react";
import "./Daftar.css";

function DaftarBarang(props) {
  const harga = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.harga);
  Aos.init();
  return (
    <>
      <div className="col">
        <div id="container" key={props.id}>
          <div className="row d-flex-justify-content-center">
            <div className="col-4">
              <div className="product-details text-center">
                <h4>{props.title}</h4>

                <p className="information"></p>
              </div>
            </div>
            <div className="col-3 product-details">
              <button className="plus ms-2" onClick={props.DelCart}>
                <span style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                  <img className="mt-12" style={{ width: 30, height: 30 }} src={require("../../assets/au.png")} alt="" />
                </span>
              </button>
            </div>
            <div className="col-5">
              <div className="product-image">
                <img src={props.url} alt="" />

                <div className="info">
                  <p className="q"> Description</p>

                  <div>
                    <span className="p">
                      <strong>Kategori : </strong>

                      {props.deskripsi}
                    </span>
                  </div>
                  <div>
                    <span className="p">
                      <strong>Harga : </strong>
                      {harga}
                    </span>
                  </div>
                  <div>
                    <span className="p">
                      <strong>Kondisi : </strong>
                      {props.Kondisi}
                    </span>
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

export default DaftarBarang;
