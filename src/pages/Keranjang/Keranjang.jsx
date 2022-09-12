import React from "react";
import KeranjangSaya from "../../components/Keranjang/KeranjangSaya";
import DaftarBarang from "../../components/Keranjang/DaftarBarang";
import TotalHarga from "../../components/Keranjang/TotalHarga";
import { useAuthState, useAuthDispatch } from "../../context/store";
import { useEffect } from "react";

function Keranjang() {
  const state = useAuthState();
  useEffect(() => {
    console.log("ini state", state);
  }, [state]);
  return (
    <>
      <section className="page-section" id="babyshop">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Keranjang Saya
            </h2>
            <h5 className="section-subheading">Daftar Barang Yang Saya Beli</h5>
            <hr />
          </div>
        </div>
      </section>
      <KeranjangSaya />
      {state.items.map((list) => (
        <DaftarBarang title={list.title} harga={list.harga} deskripsi={list.deskripsi} url={list.url} />
      ))}
      <TotalHarga />
    </>
  );
}

export default Keranjang;
