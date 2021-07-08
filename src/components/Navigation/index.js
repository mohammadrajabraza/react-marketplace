import { Link } from "react-router-dom";
export default function Navigation(){

    const links = [
        {text: "Mobile Phones", link: '/categories/mobilephones'},
        {text: "Cars", link: '/categories/cars'},
        {text: "Motorcycles", link: '/categories/motorcycles'},
        {text: "Houses", link: '/categories/houses'},
        {text: "TV-Video-Audio", link: '/categories/tvaudiovideo'},
        {text: "Tablets", link: '/categories/tablets'},
        {text: "Lands & Plots", link: '/categories/landsnplots'}
    ]
    return <div className="nav">
        <div className="nav-mega">
            ALL Categories
        </div>
        <div className="nav-bar">
            <ul>
                {   links.map((item) => {
                        return <li>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}