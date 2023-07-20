import './index.css' 

const MainMenu = (props) => {
    const {menuHeadings} = props

    return (
        <ul className='list-container'>
        {menuHeadings.map(eachHeading => (
            <li className='list-item' key = {eachHeading.id}>{eachHeading.heading}</li>
        ))}
    </ul>
    )
    
}

export default MainMenu