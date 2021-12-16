import Pet from './Pet'


const Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No pets Found</h1>
            ) : (
                pets.map(pet =>{  
                    return (
                        <Pet 
                            name={pet.name}
                            animal={pet.animal}
                            breed={pet.breed}
                            key={pet.id}
                            images={pet.images}
                            location={`${pet.city},${pet.state}`}
                            id={pet.id}
                        />
                    )}
                  )
            )}
        </div>
    )
}
export default Results; 