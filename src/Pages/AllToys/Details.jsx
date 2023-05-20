import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    const toy = data[0];
    const { product_name, price, sub_category, seller, _id, photo, quantity
        , rating
    } = toy;
    console.log(toy)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;