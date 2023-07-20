import './index.css'

const DetailedItem = (props) => {
    const {itemDetails} = props
    const {itemName, description, price} = itemDetails

    return (
        <>
        <li className="list-item-container">
            <div className="list-head-container">
                <h1 className="heading">{itemName}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="money-container">
                <p className="price">${price}</p>
            </div>
        </li>
        <hr/>
        </>
    )
}

export default DetailedItem