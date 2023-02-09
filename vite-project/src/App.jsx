import { useQuery } from "@tanstack/react-query"; 
import { useState } from "react";
import axios from "axios";


function App() {

const [stock, setStock] = useState("tsla");

const options = {
  method: 'GET',
  url: `https://realstonks.p.rapidapi.com/${stock}`,
  headers: {
    'X-RapidAPI-Key': '74a1b0fbacmsh5a2e6403238ad21p147d2djsn6c9b84b706ed',
    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
  }
};

const queryFin = axios.request(options).then(function (response) {
  return response.data;
}).catch(function (error) {
  console.error(error);
});

const { data: stockInfo, isError, isLoading, refetch, isFetching } = useQuery({
  queryKey: ["users"],
  queryFn: () => { return queryFin},
});

console.log(stockInfo);

const handleOnClick = (e) => {
  e.preventDefault();
  refetch();
};
  
return (
  <div className="App">
    <label htmlFor="fname">Input Value</label><br></br>
    <input type="string" placeholder="enter a stock" onChange={(e)=>{setStock(e.target.value)}} value={stock}></input>
    <button onClick={(e) => { handleOnClick(e) } }>Submit</button>
    <h3>Stock entered: {stock}</h3>
    {isError ? "N/A" : <h3>info received: 
      { isFetching ? "it takes a minute, please be patient..." : stockInfo?.price}
      </h3>}
  </div>
)
}

export default App
