import {React,useEffect,useState} from 'react'

export default function Home() {

    const url = "https://api.tomorrow.io/v4/weather/realtime?location=lucknow&apikey=YnQ8E5paghcejYou7J6Soc0IB6PkkwwT${key}";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
  
  
    useEffect(() => {
      fetchInfo();
    }, []);

  return (
    <div>
        <center>
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.time}</p>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.id}</p>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.title}</p>
            </div>
          );
      </center>
    </div>
  )
}
