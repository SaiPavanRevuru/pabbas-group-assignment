import Navbar from "../Navbar"
import Banner from "../Banner"
import MainMenu from "../MainMenu"
import DetailedMenu from "../DetailedMenu"
import ReadyToEat from '../ReadyToEat'

import './index.css'

const menuHeadings = [
    {id:1,heading:"Specials"},{id:2,heading:"Classic Range"},{id:3,heading:"Vegetarian"},{id:4,heading:"Chicken"},{id:5,heading:"Meat"},
    {id:6,heading:"Seafood"},{id:7,heading:"Standard Slides"},{id:8,heading:"Classic slides"},{id:9,heading:"Favorite Slides"},{id:10,heading:"Pastas"},
    {id:11,heading:"Drinks"},{id:12,heading:"Desserts"}
]

const detailedMenuDetails = [
    {titleId:1,title:"Specials",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:2,title:"Classic range",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:3,title:"Vegetarian",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:4,title:"Chicken",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:5,title:"Meat",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:6,title:"Sea Food",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:7,title:"Standard Slides",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:8,title:"Classic Slides",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:9,title:"Favorite Slides",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:10,title:"Pastas",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:11,title:"Drinks",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]},
    {titleId:12,title:"Deserts",items : [{itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"},
    {itemName:"Just Sides", description:"Any two sides", price:"9.00"},{itemName:"Just Sides", description:"Any two sides", price:"9.00"}]}
]

const Main = () => (
    <div>
        
        <Navbar/>
        <Banner/>
        <div className = "middle-container">
            <MainMenu menuHeadings = {menuHeadings}/>
            <div className="detailed-menu-conatiner">
            {detailedMenuDetails.map(eachMenu => (
                <DetailedMenu key = {eachMenu.titleId} sectionDetails = {eachMenu}/>
            ))}
            </div>
            <ReadyToEat/>
        </div>
    </div>
)

export default Main