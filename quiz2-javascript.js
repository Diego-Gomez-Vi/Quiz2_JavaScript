const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20 },
{ id: 2, nombre: 'Juan', edad: 22 },
{ id: 3, nombre: 'María', edad: 21 },
];

function idestudiantes(estudiantes["id"] ) {
    return new Promise((resolve, reject) => {
        const estudiantes = estudiantes.find(estudiantes.id === id)

        if (estudiantes){
            resolve(estudiantes):
        }else{
            reject("El estudiantes no existe")
        }
    })  
}