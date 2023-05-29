// import {Link} from "react-router-dom";

export default function List({heading,keyId}){
    // const capHeading = heading.charAt(0).toUpperCase() + heading.slice(1);
    return (
        <li className="link" id={keyId}>
            {/* <Link to={heading==="home" ? "/" : `/${heading}`}>{capHeading}</Link> */}
            <a href="#">{heading}</a>
        </li>
    );
}