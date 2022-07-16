import "./list.css";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import CariItem from "../components/cariItem/CariItem";


const List = () => {

  const lokasi = useLocation("");
  const [tujuan, setTujuan] = useState(lokasi.state.tujuan);
  const [tanggal, setTanggal] = useState(lokasi.state.tanggal);
  const [openTanggal, setOpenTanggal] = useState(false);
  const [pilihan, setPilihan] = useState(lokasi.state.pilihan);

  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Cari.</h1>
            <div className="lsItem">
              <label>Tujuan</label>
              <input placeholder={tujuan} type="text" />
            </div>
            <div className="lsItem">
              <label>Tanggal Check-in</label>
              <span onClick={() => setOpenTanggal(!openTanggal)}>{`${format(
                tanggal[0].startDate,
                "MM/dd/yyyy"
              )} ke ${format(tanggal[0].endDate, "dd/MM/yyyy")}`}</span>
               {openTanggal && (
                <DateRange
                  onChange={(item) => setTanggal([item.selection])}
                  minDate={new Date()}
                  ranges={tanggal}
                />
               )}
            </div>

            <div className="lsItem">
              <label>Pilihan</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min harga <small>per malam</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max harga <small>per malam</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Dewasa</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={pilihan.dewasa}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Anak-anak</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={pilihan.anak}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Kamar</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={pilihan.kamar}
                  />
                </div>
              </div>
            </div>
            <button>Cari.</button>
          </div>
          <div className="listResult">
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
                <CariItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;