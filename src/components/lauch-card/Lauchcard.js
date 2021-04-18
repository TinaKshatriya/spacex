import React from 'react';
import PropTypes from 'prop-types';
import './index.css';






Lauchcard.propTypes = {
 data: PropTypes.array,
};
Lauchcard.defaultProps = {
    data:[],
};

 function Lauchcard(props) {
    const {data} = props;
    return (
         <div className="grid-container">
         {data.launches.map(item=> {
          return(
            
             <div  key={item.id.toString()}>
               <div className="photo"><img className="img" src={item.links.patch.small} alt="" /></div>
               <h3 className="b">{item.name}</h3><br/>
               <h3 className="details">{item.details}</h3>
               

             </div>
             
          )
         // <ul key={item.id.toString()}
         //    image={item.links.patch.small}
         //    title={item.name}
         //    description={item.details}></ul>
          
          })}
      </div> 
    );
}



export default Lauchcard;

