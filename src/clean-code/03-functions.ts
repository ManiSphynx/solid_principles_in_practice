(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActorsByMovieId(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorInfoById(actorId: string) {
    console.log({ actorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo acto
  function createActor(fullName: string, birthDate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  interface PayAmount {
    isDead: Boolean;
    isSeparated: Boolean;
    isRetired: Boolean;
  }

  const getPayAmount = ({ isDead, isSeparated, isRetired }: PayAmount) =>
    isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;

    
})();
