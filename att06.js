function converterParaSegundos(minutos, segundos) {
    return (minutos * 60) + segundos;
}

function calcularTempoPlaylist(playlist) {
    let total = 0;

    for (let musica of playlist) {
        total = total + converterParaSegundos(
            musica.minutos,
            musica.segundos
        );
    }

    return total;
}

let playlist = [
    {
        titulo: "Música 1",
        minutos: 3,
        segundos: 30
    },
    {
        titulo: "Música 2",
        minutos: 4,
        segundos: 20
    },
    {
        titulo: "Música 3",
        minutos: 2,
        segundos: 10
    }
];

console.log("Tempo total: " + calcularTempoPlaylist(playlist) + " segundos");