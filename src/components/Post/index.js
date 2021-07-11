import { Link, useRouteMatch } from "react-router-dom"
export default function Post({post : {id, title, price, imagesUrl}}) {

    let match = useRouteMatch()
    return <div className="post">
            <div className="post-image-container">
                <img src={imagesUrl[0]} alt={title}/>
            </div>
            <h3 className="post-title">
                <Link to={`${match.url}posts/${id}`}>{title}</Link>
            </h3>
            <h2 className="post-price">{price}</h2>
    </div>
}