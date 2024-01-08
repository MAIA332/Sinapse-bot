let intentBody = {
    "Resultados de intenção": {
        "class": "falar com atendente",
        "vetor_proximidade": [

        ]
    },
    "Classe de intenção": [
        "Atendimento"
    ],
    "Entidades por palavra": [
        "alarmada",
        "atendimento"
    ],
    "vetores de proximidade por palavra": {
        "falar": {
            "class": "alarme",
            "vetor_proximidade": [
            ]
        },
        "atendente": {
            "class": "atendimento",
            "vetor_proximidade": [
            ]
        }
    }
}

let intent = intentBody["Classe de intenção"][0];
console.log(intent);
