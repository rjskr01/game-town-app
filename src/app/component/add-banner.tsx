const AddBanner = () => {
   
    const addCount: number = 3;

    return (
        <div id="adsHolder" className="adsHolder">
            {
                Array(addCount).fill(
                    <img src="assets/images/bannerads.jpg" className="w-[70%]" />
                )
            }
        </div>
    )
}

export default AddBanner;