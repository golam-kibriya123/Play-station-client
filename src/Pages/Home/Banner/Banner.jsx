

const Banner = () => {
    return (
        <div className="carousel w-full h-[90vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/large-robot-is-front-cityscape_621302-370.jpg?size=626&ext=jpg&ga=GA1.2.293727738.1671602860&semt=sph" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/black-red-color-big-size-robot_621302-339.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=sph" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/robot-with-word-robot-it_621302-361.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=sph" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/robot-with-large-face-words-iron-man-front_883586-3348.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=sph" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;