import React from "react";

function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>PERSONAJES</h1>
      
      <spam className="back-home" onClick={resetCharacters}>Home</spam>

      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            
            <div>
              <img src={character.image} alt={character.name} />
            </div>

            <div>
              <h3>
                {character.name}
              </h3>
              
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <spam className="alive"></spam>
                    Alive
                  </>
                ) : (
                  <>
                    < spam className="dead"></spam>
                    Dead
                  </>                
                )}
              </h6>

              <p>
                <span className="text-grey">Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
              
              <p>
                <span className="text-grey">Especies:</span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <spam className="back-home" onClick={resetCharacters}>Home</spam>
    
    </div>
  );
}

export default Characters;
