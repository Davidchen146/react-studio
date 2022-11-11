// TODO: create a component that displays a single bakery item

function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <h1>{props.item.name}</h1>
            
            <p>{props.item.description}</p>

            <p>Price: {props.item.price}</p>

            <img src= {props.item.image}/>

            <button onClick={() => {props.addToCart(props.item); props.updateTotal(props.item)} }>Add to Cart</button>
        </div>
    )
}

export default BakeryItem;
