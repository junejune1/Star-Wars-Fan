import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import SearchComponets from "./components/SearchComponents";
import LoadingMessages from "./components/LoadingMessages";
import axios from "axios";
import { convertData } from "./functions/convertData";

export default function App() {
    const [characters, setCharacters] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const prevPageNumber = usePrevious(pageNumber);
    const [searchCharacter, setSearchCharacter] = useState("");
    const previousSearchCharacter = usePrevious(searchCharacter);

    useEffect(() => {
        if (previousSearchCharacter !== searchCharacter) {
            if (searchCharacter.length > 0) fetchSearch(searchCharacter);
            else backToHome();
        } else if (prevPageNumber !== pageNumber) {
            const cachedPage = JSON.parse(localStorage.getItem(`page${pageNumber}`));
            displayPage(cachedPage);
        }
    });

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    function displayPage(cachedPage) {
        cachedPage === null ? fetchPage() : setCharacters(cachedPage.components);
    }

    function changePage(type, number) {
        setSearchCharacter("");
        switch (type) {
            case "next":
                if (pageNumber < 9) setPageNumber(prevPageNumber => prevPageNumber + 1);
                break;
            case "previous":
                if (pageNumber > 1) setPageNumber(prevPageNumber => prevPageNumber - 1);
                break;
            default:
                setPageNumber(number);
                break;
        }
    }

    async function fetchSearch(searchCharacters) {
        setIsFetching(true);
        const searchResults = await axios
            .get(`https://swapi.dev/api/people/?search=${searchCharacters}`)
            .then(response => response.data.results);
        setAdditionalData(searchResults);
    }

    async function fetchPage() {
        setIsFetching(true);
        const pageResults = await axios
            .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
            .then(response => response.data.results)
            .catch(error => console.log(error));
        setAdditionalData(pageResults);
    }

    async function setAdditionalData(results) {
        for (let character of results) {
            character = convertData(character);
            character.speciesName = await fetchSpecies(character);
            character.homeworldName = await fetchHomeworld(character);
            character.films = await fetchFilms(character);
            character.vehicles = await fetchVehicles(character);
            character.starships = await fetchStarships(character);
        }
        cachePage(results);
        setCharacters([...results]);
    }

    function fetchSpecies(character) {
        let species = " ";
        if (character.species.length > 0) {
            const httpsSpecies = `https${character.species[0].substring(5)}`;
            species = axios
                .get(httpsSpecies)
                .then(response => 
                    response.data.name)
                .catch(error => console.log(error));
        }
        return species;
    }

    function fetchHomeworld(character) {
        
            const httpsHomeworld = `https${character.homeworld.substring(5)}`;
            return axios
                .get(httpsHomeworld)
                .then(response => response.data.name)
                .catch(error => console.log(error));
        
    }

    async function fetchFilms(character) {
        let films = " ";
        if (character.films.length > 0) {
                //can use map() to iterate films array to show all related films
                const httpsFilms = character.films[0];
                    films =  axios
                    .get(httpsFilms)
                    .then(response => response.data.title)
                    .catch(error => console.log(error))
            }
        return films;
    }

    function fetchVehicles(character) {
        let vehicles = " ";
        if (character.vehicles.length > 0) {
            const httpsVehicles = character.vehicles[0];
            vehicles = axios
            .get(httpsVehicles)
            .then(response => response.data.name)
            .catch(error => console.log(error))
        }
        return vehicles;
    }

    function fetchStarships(character) {
        let starships = " ";
        if (character.starships.length > 0) {
            const httpsStarships = character.starships[0];
            starships = axios
            .get(httpsStarships)
            .then(response => response.data.name)
            .catch(error => console.log(error))
        }
        return starships;
    }


    function cachePage(newPageComponents) {
        if (searchCharacter.length < 1) {
            const storageItem = {
                pageNumber: pageNumber,
                components: newPageComponents,
            };
            localStorage.setItem(`page${pageNumber}`, JSON.stringify(storageItem));
        }
        if (pageNumber === 1) localStorage.setItem("date-created", JSON.stringify(new Date().getTime()));
        setIsFetching(false);
    }

    function backToHome() {
        setSearchCharacter("");
        const cachedPage = JSON.parse(localStorage.getItem(`page${pageNumber}`));
        displayPage(cachedPage);
    }

    if (isFetching) {
        return (
            <div className="App">
                <header className="App-header">
                <Header />
            </header>
                <SearchComponets
                    isLoading={isFetching}
                    changePage={changePage}
                    handleSearch={searched => setSearchCharacter(searched)}
                />
                <LoadingMessages pageNumber={pageNumber} />
            </div>
        );
    } else {
        return (
            <div className="App">
                <header className="App-header">
                <Header />
            </header>
                <SearchComponets
                    onSearch={searchCharacter !== ""}
                    changePage={changePage}
                    handleSearch={searched => setSearchCharacter(searched)}
                    backToHome={backToHome}
                />
                {searchCharacter === "" ? <h4 style={{ color: "#DC5712", marginTop: 20 }}>Page: {pageNumber}</h4> : null}
                <Table rows={characters.map(character => <TableRow character={character} key={character.name} />)} />
            </div>
        );
    }
}
