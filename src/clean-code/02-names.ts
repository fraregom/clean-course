(() => {

    // arreglo de temperaturas celsius
    const temperaturesInCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIP = '123.123.123.123';

    // Listado de usuarios
    const users = [{id: 1, userEmail: 'fernando@google.com'},{ id: 2, userEmail: 'juan@google.com' }, { id: 3, userEmail: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmails = users.map( user => user.userEmail );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();



