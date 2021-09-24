import React from 'react';
import Loader from 'react-loader-spinner'
import style from "./Home.module.css";
import "./tableStyle.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const API_ENDPOINT = "http://localhost:3001/api/v1/assets";

const Section = ({ title, description, children }) => (
  <section className={style.section}>
    <div className={style.content}>
      <h2 className={style.title}>{title}</h2>
      {description.map(row => <p className={style.p}>{row}</p>)}
      {children}
    </div>
  </section>
)

const Table = ({ data }) => (
  <div className="table-container">
    <table id='students'>
      <tbody>
        <tr> {Object.keys(data[0]).map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
        })
        }</tr>
        {
          data.map((d) => {
            const keys = Object.keys(d);
            return (
              <tr key={d[keys[0]]}>
                {keys.map(key => <td>{d[key]}</td>)}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
);

const Home = () => {
  const [info, setInfo] = React.useState({});
  const [rooms, setRooms] = React.useState({});
  const [prices, setPrices] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'X-Forwarded-For': '192.168.1.0'
      }
    }).then(data => data.json()).then(data => {
      setInfo(data[0].info);
      setPrices(data[0].prices);
      setRooms(data[0].rooms);
      setIsLoading(false);
    }).catch(
      (error) => {
        console.log(error);
        setIsLoading(false);
      }
    )
  }, []);

  return (
    <div>
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
          <div>
            <div className={style.poster} />
            <div className={style.container}>
              <Section
                title={info.title}
                description={info.description} />
              <Section
                title={rooms.title}
                description={rooms.description} >
                <Table data={rooms.details} />
              </Section>
              <Section
                title={prices.title}
                description={prices.description} >
                <Table data={prices.details} />
              </Section>  
              
            </div>
          </div>
          )}
    </div>
  )
}

export default Home;