(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }

    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    
    // Crear una película
    function createMovie({title, description, rating, cast} : Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    type workerStatus = 'DEAD' | 'SEPARATED' | 'RETIRED';
    const getPayAmountByWorkerStatus = (status: workerStatus): number => {
        switch (status) {
            case "DEAD":
                return 1500;
            case "SEPARATED":
                return 2500;
            case "RETIRED":
                return 3000;
            default:
                return 4000;
        }
    }
})();