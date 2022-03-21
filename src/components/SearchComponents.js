import React, { memo } from "react";
import PageButtons from "./PageButtons";
import ReturnHomeButton from "./ReturnHomeButton";
import SearchBar from "./SearchBar";

function SearchComponents(props) {
    if (props.isLoading) {
        return (
            <div>
                <SearchBar handleSearch={props.handleSearch} />
            </div>
        );
    } else if (props.onSearch) {
        return (
            <div>
                <SearchBar handleSearch={props.handleSearch} />
                <br />
                <ReturnHomeButton backToHome={props.backToHome} />
            </div>
        );
    } else
        return (
            <div>
                <SearchBar handleSearch={props.handleSearch} />
                <br />
                <PageButtons changePage={props.changePage} />
            </div>
        );
}

export default memo(SearchComponents);
