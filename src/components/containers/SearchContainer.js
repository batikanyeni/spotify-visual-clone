import classes from './SearchContainer.module.css';

export const SearchContainer = () => {

    const img_data = {img_urls: ["./search_images/simg_1.png","./search_images/simg_2.png","./search_images/simg_3.png","./search_images/simg_4.png","./search_images/simg_5.png","./search_images/simg_6.png"
    ,"./search_images/simg_7.png","./search_images/simg_8.png","./search_images/simg_9.png","./search_images/simg_10.png","./search_images/simg_11.png","./search_images/simg_12.png","./search_images/simg_13.png"
    ,"./search_images/simg_14.png","./search_images/simg_15.png","./search_images/simg_16.png","./search_images/simg_17.png","./search_images/simg_18.png","./search_images/simg_19.png","./search_images/simg_20.png"
    ,"./search_images/simg_21.png","./search_images/simg_22.png"]};

    return <div className={classes['search-container']}>
        <h2>Browse all</h2>
        <div className={classes['img-container']}>
            {img_data.img_urls.map(e => <img alt='search-img' src= {e}/>)}
        </div>
    </div>
}