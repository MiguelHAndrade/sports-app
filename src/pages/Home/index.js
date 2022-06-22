import { useEffect, useState } from "react"
import { Search } from "../../components/Search";
import { Sport } from "../../components/Sport";

import './styles.scss'

export function Home() {

    const [sports, setSports] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getSports(){
            const response = await fetch('https://sports.api.decathlon.com/sports')
            const data = await response.json();
            setSports(data.data);
        }
        getSports()
    }, [])

     const filteredSports = sports.filter( sport => sport?.attributes?.name?.toLowerCase().includes(search));

    function getSearchValue(e){
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    };

    return(
        <main className="home">
            <Search 
                total={filteredSports.length}
                search={getSearchValue}
            />
                <div className="container">
                    {filteredSports.map( sport => 
                        <Sport
                            key={sport.id}
                            id={sport.id}
                            icon={sport.attributes.icon}
                            title={sport.attributes.name}
                        />
                    )}
                </div>
        </main>
    )
}