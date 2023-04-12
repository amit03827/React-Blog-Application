import { Link } from "react-router-dom";

const NotFound =()=>{
    return(
        
        <div className="not-found">
            <h1>sorry</h1>
            <p>This Page cannot found be found 404</p>
            <Link to="/">Go to home Page</Link>
            </div>


    
    );
}

export default NotFound