import './styles.scss'

export function Search({search, total}){
    return(
        <div className="search">
            <div className="search-results">
                {total} Sports Found
            </div>
            <form className="search-form">
                <input type="text" placeholder="Search.." onChange={search} />
            </form>
        </div>
    )
}