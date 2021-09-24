import React, { useState, useContext } from 'react';
import Button from '../button/Button';
import AppContext from '../../context/AppContext';
import './modal.css';

const createTicket = async (ticketInfo) => {
  return fetch("http://localhost:3001/api/v1/ticket", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Forwarded-For': '192.168.1.0',
    },
    body: JSON.stringify(ticketInfo)
  })
    .then(data => data.json())
    .catch(err => console.error(err))
}

const Modal = ({ hideModal, show, currentMovie }) => {
  const [time, setTime] = useState({ value: "18:00" });
  const [bought, setIsBought] = useState(false);


  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { title, image } = currentMovie;
  const { token } = useContext(AppContext);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = async (e) => {
    if(bought) {
      setIsBought(false);
      return;
    } 
    e.preventDefault();
    await createTicket({
      name: token ? token.name : "utente",
      lastName: token ? token.lastName : "",
      email: token ? token.email : "fabio_mangano@hotmail.it",
      movie: title,
      time,
      room: 1,
    });
    setIsBought(true);
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <h4 className="modal-title">Acquista Ticket</h4>
        </div>
        {bought ? (
          <div className="modal-content">
            <h3 className="modal-movie-title">{title}</h3>
            <img alt="Movie" className="modal-image" src={image} width="180px" height="250px" />
            <form className="modal-form" onSubmit={handleSubmit}>
              <div>Biglietto acquistato!</div>
              <div>Controlla la tua email per rivedere i dettagli.</div>
              <div className="modal-footer">
                <div className="space-btn">
                  <Button label="indietro" onClick={hideModal} />
                </div>
              </div>
            </form>
          </div>
        ) : (
            <div className="modal-content">
              <h3 className="modal-movie-title">{title}</h3>
              <img alt="Movie" className="modal-image" src={image} width="180px" height="250px" />

              <form className="modal-form" onSubmit={handleSubmit}>
                <label className="modal-label">
                  Seleziona l'orario:
                  <select value={time.value} onChange={handleChange}>
                    <option>{"18:00"}</option>
                    <option>{"19:00"}</option>
                  </select>
                </label>
                <div className="modal-footer">
                  <div className="space-btn">
                    <Button label="Acquista" />
                  </div>
                  <div className="space-btn">
                    <Button label="indietro" onClick={hideModal} />
                  </div>
                </div>
              </form>
            </div>
          )}
      </section>
    </div>
  );
};

export default Modal;