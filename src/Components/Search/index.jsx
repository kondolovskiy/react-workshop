import React, { useState } from "react";
import { Input, Button, Grid, Dropdown } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { 
    setSearchQuery, 
    setImageType,
    setOrientation,
    setMinWidth,
    setMinHeight, 
} from '../../store/features/searchSlice';

// "all", "photo", "illustration", "vector"
const imageTypeOtions = [
    { key: "all", text: "All", value: "all", },
    { key: "photo", text: "Photo", value: "photo", },
    { key: "illustration", text: "Illustration", value: "illustration", },
    { key: "vector", text: "Vector", value: "vector", },
];

//  "all", "horizontal", "vertical"

const orientationOptions = [
    { key: "all", text: "All", value: "all", },
    { key: "horizontal", text: "Horizontal", value: "horizontal", },
    { key: "vertical", text: "Vertical", value: "vertical", },
]

function Search() {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const { 
        imageType, 
        orientation, 
        minWidth, 
        minHeight 
    } = useSelector(state => state.search);

    return (
        <div className="search">
            <div>
                <Input
                    size='huge'
                    icon='search'
                    placeholder='Search...'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />

                <Button
                    size='huge'
                    primary
                    onClick={() => dispatch(setSearchQuery(search))}
                >Search</Button>
            </div>

            <Grid columns={4}>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown
                            clearable
                            placeholder="Image type"
                            options={imageTypeOtions}
                            selection
                            value={imageType}
                            onChange={(e, { value }) => dispatch(setImageType(value))}
                            className='icon' />
                    </Grid.Column>

                    <Grid.Column>
                        <Dropdown
                            clearable
                            placeholder="Orientation"
                            options={orientationOptions}
                            selection
                            value={orientation}
                            onChange={(e, { value }) => dispatch(setOrientation(value))}
                            className='icon' />
                    </Grid.Column>

                    <Grid.Column>
                        <Input 
                            placeholder='Min width' 
                            value={minWidth} 
                            onChange={(e) => dispatch(setMinWidth(e.target.value))}
                            />
                    </Grid.Column>

                    <Grid.Column>
                        <Input 
                            placeholder='Min height' 
                            value={minHeight} 
                            onChange={(e) => dispatch(setMinHeight(e.target.value))}
                            />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    )

}

export default Search;