import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Hemat Waktu, hemat duit!</h1>
      <span className="mailDesc">Daftar dan kami akan mengirimkan penawaran terbaik kepada Anda</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="email anda" />
        <button>Langganan</button>
      </div>
    </div>
  )
}

export default MailList