import "./cariitem.css";

const CariItem = () => {
    return (
        <div className="searchItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m dari pusat</span>
            <span className="siTaxiOp">Free taxi bandara</span>
            <span className="siSubtitle">
              Apartemen studio dengan Air Conditioning
            </span>
            <span className="siFeatures">
              Seluruh studio • 1 kamar mandi • 21m² 1 tempat tidur
            </span>
            <span className="siCancelOp">Free pembatalan </span>
            <span className="siCancelOpSubtitle">
              Anda dapat membatalkannya nanti, dapatkan harga bagus ini hari ini!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Luar biasa</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">Rp 1.2 jt</span>
              <span className="siTaxOp">Termasuk pajak dan biaya</span>
              <button className="siCheckButton">Cek Ketersediaan</button>
            </div>
          </div>
        </div>
      );
    };

export default CariItem