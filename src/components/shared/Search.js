import React,{useState,useEffect} from 'react';
import "../lauch-card/index.css";
import axios from "axios";




function Search() {
    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[search,setSearch]=useState('');
    const[filteredData,setFilteredData]=useState([]);

    useEffect(() => {
        setLoading(true);
        axios
          .get("https://api.spacexdata.com/v4/launches/past?limit=10")
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      useEffect(() => {
        setFilteredData(
         data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search]);
    
      if (loading) {
        return <p>Loading item...</p>;
      }
      
    return (
        <div>
            <input className="search"type="text" placeholder="search" text="white"onChange={(e) => setSearch(e.target.value)}/>
            {filteredData.map((item, id) => (
        <NameDetails key={id} {...item} />
      ))}
        </div>
    );
};
const NameDetails = (props) => {
    const { name,details } = props;
    return (
        <>
        <p>{name}</p>
          <p>
          <div className="details">{details}</div>
          </p>
          
        </>
      );
};




export default Search;

