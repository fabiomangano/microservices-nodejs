import React from 'react';
import Loader from 'react-loader-spinner'
import style from './NowInCinema.module.css';
import Item from './item/Item';
import Modal from '../../components/modal/Modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const API_ENDPOINT = "http://localhost:3001/api/v1/movies";

const NowInCinema = () => {

  const [show, setShow] = React.useState(false);
  const [movie, setMovie] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentMovie, setCurrentMovie] = React.useState({})

  const showModal = (movie) => {
    setCurrentMovie(movie);
    setShow(true);
  };

  const hideModal = () => {
    setCurrentMovie({});
    setShow(false);
  };

  React.useEffect(() => {
    fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'X-Forwarded-For': '192.168.1.0'
      }
    }).then(data => data.json()).then(data => {
      setMovie(data);
      setIsLoading(false);
    }).catch(
      (error) => {
        console.log(error);
        setIsLoading(false);
      }
    )
  }, []);

  return (
    <>
      {
        isLoading ? (
          <div className={style.loader}>
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        ) :
          (
            <div className={style.container}>
              <h2 className={style.title}>Film in programmazione</h2>
              <br></br>
              <ul className={style.list}>
                {movie.map(movie =>
                  <Item
                    key={movie.id}
                    movie={movie}
                    showModal={showModal}
                  />)}
              </ul>
              <Modal
                show={show}
                currentMovie={currentMovie}
                hideModal={hideModal} />
            </div>
          )
      } 
      </>
  )
}

export default NowInCinema;
