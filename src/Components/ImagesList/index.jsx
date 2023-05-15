import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImagesList, setCurrentPage } from '../../store/features/imagesListSlice';
import { Loader, Pagination } from 'semantic-ui-react'

function ImagesList() {

    const { 
        searchQuery,
        imageType, 
        orientation, 
        minWidth, 
        minHeight, 
    } = useSelector(state => state.search);

    const { 
        imagesList, 
        isLoading,
        currentPage,
        totalPages,
    } = useSelector(state => state.imagesList);

    const dispatch = useDispatch();

    useEffect(() => {
        if(searchQuery === "") return;
        
        dispatch(fetchImagesList({ 
            searchQuery, 
            page: currentPage,
            imageType, 
            orientation, 
            minWidth, 
            minHeight, 
        }));
    }, [
        searchQuery, 
        imageType, 
        orientation, 
        minWidth, 
        minHeight,
        currentPage, 
        dispatch
    ]);

    if(isLoading) {
        return <Loader active inline='centered' />
    }

    if(imagesList.length === 0) {
        return null;
    }

    return (
        <div className="images-list">
            <Pagination 
                defaultActivePage={currentPage}
                totalPages={totalPages}
                onPageChange={(e, { activePage }) => dispatch(setCurrentPage(activePage))}
            />
            {imagesList.map((image, index) => (
                <div key={index} className="images-list__item">
                    <img src={image.webformatURL} alt={image.tags} />
                </div>
            ))}

        </div>
    )
}

export default ImagesList;