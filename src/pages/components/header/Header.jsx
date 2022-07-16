import { faBed, faCalendarDays, faCamera, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
  const [tujuan, setTujuan] = useState("");
  const [bukaTanggal, setBukaTanggal] = useState(false);
  const [tanggal, setTanggal] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [bukaPilihan, setBukaPilihan] = useState(false);
  const [pilihan, setPilihan] = useState({
    dewasa: 1,
    anak: 0,
    kamar: 1,
  });

  const handleOption = (name, operation) => {
    setPilihan((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? pilihan[name] + 1 : pilihan[name] - 1,
      };
    });
  };

 const navigate = useNavigate();


 const handleSearch = ()=>{
  navigate("/hotel", {state:{tujuan, tanggal, pilihan}});
 };


  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Penginapan</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Penerbangan</span>
                 </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Rental Mobil</span>
                 </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCamera} />
                    <span>Atraksi</span>
                 </div>
                 <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxi Bandara</span>
                </div>
            </div>
        { type !== "list" &&
          <>
            <h1 className="headerTitle">
              Diskon seumur hidup? dapatkan segera!
            </h1>
            <p className="headerDesc">
              Ada kejutan buat perjalanmu – Dapatkan diskon 10% atau 
              lebih dengan akun travelbooking gratis !
            </p>
            <button className="headerBtn">Login / Daftar</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="kemana tujuan anda?" className="headerSearchInput" onChange={(e) => setTujuan(e.target.value)} />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setBukaTanggal(!bukaTanggal)} className="headerSearchText">{`${format(tanggal[0].startDate, "dd/MM/yyyy")} ke ${format(tanggal[0].endDate, "dd/MM/yyyy")}`}</span>
                {bukaTanggal && (<DateRange
                  editableDateInputs={true}
                  onChange={item => setTanggal([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={tanggal}
                  className="date"
                  minDate={new Date()}
                />)}
              </div>
              
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setBukaPilihan(!bukaPilihan)} className="headerSearchText">{`${pilihan.dewasa} dewasa · ${pilihan.anak} anak · ${pilihan.kamar} kamar`}</span>
                
                  {bukaPilihan && ( <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Dewasa</span>
                      <div className="optionCounter">
                      <button disabled={pilihan.dewasa <= 1} className="optionCounterButton" onClick={() => handleOption("dewasa", "d")}>-</button>
                      <span className="optionCounterNumber">{pilihan.dewasa}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("dewasa", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Anak</span>
                      <div className="optionCounter">
                      <button disabled={pilihan.anak <= 0} className="optionCounterButton" onClick={() => handleOption("anak", "d")}>-</button>
                      <span className="optionCounterNumber">{pilihan.anak}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("anak", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Kamar</span>
                      <div className="optionCounter">
                      <button disabled={pilihan.kamar <= 1} className="optionCounterButton" onClick={() => handleOption("kamar", "d")}>-</button>
                      <span className="optionCounterNumber">{pilihan.kamar}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("kamar", "i")}>+</button>
                      </div>
                    </div>
                  </div>
                  )}
           
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Cari Tiket</button>
              </div>
            </div>
          </>
        }   
        </div>
    </div>
    
  );
};

export default Header;