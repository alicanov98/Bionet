import React, { useState } from "react";

const PriceQuoteSection = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Ad:", name);
    console.log("Numara:", number);
    console.log("Mesaj:", message);
  };

  return (
    <section className="priceQuoteSection">
      <div className="container">
        <div className="priceQuoteContent">
          <div className="priceQuoteTitle">
            <h2 className="title">Qiymət təklifi </h2>
            <p className="priceQuoteText">
              Vebsayt və ya mobil tətbiq üçün dizayn qiymətinin hesablanması
              istəyirsizsə bizə yazın və qiymət təklifi alın
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="formInput">
              <div className="formGroup">
                <label className="lableInput" htmlFor="name">
                  Ad və soyadınız
                </label>
                <input
                  className="formInputGrop"
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Adınızı və soyadınızı daxil edin"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <label className="lableInput" htmlFor="number">
                  Əlaqə nömrəniz
                </label>
                <input
                  className="formInputGrop"
                  placeholder="Əlaqə nömrənizi daxil edin"
                  type="text"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="formTextArea">
              <label className="lableInput" htmlFor="message">
                Necə bir məhsul istəyirsiz
              </label>
              <textarea
                className="formTextarea"
                placeholder="Məhsul haqqında"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
<div className="PriceQuoteFormBtnContainer">
<button className="PriceQuoteFormBtn" type="submit">Gönder</button>
</div>
            
          </form>
        </div>
      </div>
    </section>
  );
};
export default PriceQuoteSection;
