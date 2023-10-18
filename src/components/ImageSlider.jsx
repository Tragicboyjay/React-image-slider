const ImageSlider = ({ imageUrl, changeFunction}) => {
    return ( 
        <div style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"


        }} className="image-slider">
        <button
            onClick={() => changeFunction('left')}

            style={{
                position: "absolute",
                top: '50%',
                left: '2.5%',
                transform: "translate(-2.5%, -50%)"
            }}
        ><i className="fa-solid fa-arrow-left"></i></button>

        <button
            onClick={() => changeFunction('right')}
            
            style={{
                position: "absolute",
                top: '50%',
                right: '2.5%',
                transform: "translate(2.5%, -50%)"
            }}
        ><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
}
 
export default ImageSlider;