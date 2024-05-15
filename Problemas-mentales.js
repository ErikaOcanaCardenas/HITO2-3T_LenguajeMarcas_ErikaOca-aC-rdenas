document.addEventListener("DOMContentLoaded", function() {
    var encuestaData =  [
        {
            "Marca temporal": "5/13/2024 14:00:42",
            "Nombre y apellidos": "Kepa Jametxo",
            "Sexo?": "Nulo",
            "Pronombres?": "Ullu",
            "Correo ": "Express",
            "Eres autista?": "SI",
            "Eres Disléxico?": "SI",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "Entre 2 buenas tetas o en un ferrari",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿Me espías?",
            "Que te da mas ansiedad?": "Los hitos ",
            "Que te relaja?": "Las sustancias ilícitas psicotrópicas",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "Demasiado",
            "Algo que añadir?": "Sal y pimienta"
        },
        {
            "Marca temporal": "5\/13\/2024 14:01:35",
            "Nombre y apellidos": "Napolitana de chocolate",
            "Sexo?": "Ojalá",
            "Pronombres?": "a, ante, bajo, (cabe), con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, (so), sobre, tras, (versus), (vía)",
            "Correo ": "oerroC",
            "Eres autista?": "SI",
            "Eres Disléxico?": "No se porque prechuntas eso",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "En el armario, con mi amigo",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿¿¿PORQUE PREGUNTAS???",
            "Que te da mas ansiedad?": "La ansiedad",
            "Que te relaja?": "LA navaja en mi brazo",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "soy todes",
            "Algo que añadir?": "Cada dos de arroz una de agua"
           },
           {
            "Marca temporal": "5\/13\/2024 14:01:37",
            "Nombre y apellidos": "Emmanuel",
            "Sexo?": "Puede ",
            "Pronombres?": "Manolo Lama",
            "Correo ": "correoarrobacorreopuntoes",
            "Eres autista?": "Alojomora",
            "Eres Disléxico?": "Solo un poci",
            "Tienes depresión?": "No :)",
            "Si tienes depresión donde prefieres llorar?  ": "En las fiestas de mi pueblo con un cubata en la mano",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿¿¿PORQUE PREGUNTAS???",
            "Que te da mas ansiedad?": "Este cuestionario",
            "Que te relaja?": "No hacer este cuestionario",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "VALE PORQUE COJONES ME PREGUNTAS ESO OSEA WFT",
            "Algo que añadir?": "Si, que las panteras rosas no saben como antes :("
           },
           {
            "Marca temporal": "5\/13\/2024 14:02:25",
            "Nombre y apellidos": "Valentín Cortés",
            "Sexo?": "hombre",
            "Pronombres?": "A mi esas chorradas no ",
            "Correo ": "el de campus",
            "Eres autista?": "Juego al LOL",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "No :)",
            "Si tienes depresión donde prefieres llorar?  ": "creo que no tengo depresión pero a veces lloro cuando estoy tumbado antes de dormir",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "Si",
            "Que te da mas ansiedad?": "La soledad",
            "Que te relaja?": "Tocar el piano ",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No",
            "Algo que añadir?": "Todas mienten"
           },
           {
            "Marca temporal": "5\/13\/2024 14:06:33",
            "Nombre y apellidos": "daniel",
            "Sexo?": "a veces",
            "Pronombres?": "elle",
            "Correo ": "daniel.perezgarcia.23@campusfp.es",
            "Eres autista?": "Juego al LOL",
            "Eres Disléxico?": "Solo un poci",
            "Tienes depresión?": "No :)",
            "Si tienes depresión donde prefieres llorar?  ": "solo en la cama con la puerta cerrada para que nadie me escuche o en la ducha",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿¿¿PORQUE PREGUNTAS???",
            "Que te da mas ansiedad?": "estar solo en la cama",
            "Que te relaja?": "estar con mi pareja",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "no",
            "Algo que añadir?": "quiero una pizza"
           },
           {
            "Marca temporal": "5\/13\/2024 14:08:24",
            "Nombre y apellidos": "Samuel Pereira Lopez",
            "Sexo?": "Ojala",
            "Pronombres?": "los pronombres de michael jackson son he\/he",
            "Correo ": "klkmmhuevo",
            "Eres autista?": "Alojomora",
            "Eres Disléxico?": "No se porque prechuntas eso",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "El banquito del papa jones",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿¿¿PORQUE PREGUNTAS???",
            "Que te da mas ansiedad?": "envejecer sin encontrar a quien me quiera",
            "Que te relaja?": "comer como una vaca",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "soy pacifista y si no te lo crees te lo demuestro a ostias",
            "Algo que añadir?": "menú kebab mixto con todo dos salsas y extra carne"
           },
           {
            "Marca temporal": "5\/13\/2024 14:14:46",
            "Nombre y apellidos": "cg89255",
            "Sexo?": "Depende del día. La mayoría no y el resto menos",
            "Pronombres?": "si",
            "Correo ": "si",
            "Eres autista?": "Alojomora",
            "Eres Disléxico?": "No se porque prechuntas eso",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿Me espías?",
            "Que te da mas ansiedad?": "El inexorable avance del tiempo",
            "Que te relaja?": "Gatos",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "Te estallo",
            "Algo que añadir?": "No"
           },
           {
            "Marca temporal": "5\/13\/2024 14:16:12",
            "Nombre y apellidos": "Armando Ruido",
            "Sexo?": "vengaaaaa",
            "Pronombres?": "nosotros",
            "Correo ": "armandor@fakemail.com",
            "Eres autista?": "Alojomora",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿Me espías?",
            "Que te da mas ansiedad?": "tener hambre",
            "Que te relaja?": "golpear un saco de boxeo",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "en principio no pero si la situación lo requiere como el que mas",
            "Algo que añadir?": "sabes cuanto pesa un oso polar? lo suficiente para romper el hielo"
           },
           {
            "Marca temporal": "5\/13\/2024 14:17:43",
            "Nombre y apellidos": "Edwin Bravo",
            "Sexo?": "Masculino",
            "Pronombres?": "El",
            "Correo ": "bravo.edwin@gmail.com",
            "Eres autista?": "NO",
            "Eres Disléxico?": "Solo un poci",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¡¡¡¡NO!!!!",
            "Que te da mas ansiedad?": "LOS ESPACIOS CERRADOS",
            "Que te relaja?": "La naturaleza",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "no"
           },
           {
            "Marca temporal": "5\/13\/2024 14:21:21",
            "Nombre y apellidos": "Alexis Camero",
            "Sexo?": "M ",
            "Pronombres?": "El que corresponde por biología a mi sexo",
            "Correo ": "alexis.camerohernandez.23@campusfp.es",
            "Eres autista?": "NO",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¡¡¡¡NO!!!!",
            "Que te da mas ansiedad?": "Nada",
            "Que te relaja?": "Escuchar música",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No"
           },
           {
            "Marca temporal": "5\/14\/2024 13:55:19",
            "Nombre y apellidos": "Juan Pérez Gato",
            "Sexo?": "Masculino",
            "Pronombres?": "El",
            "Correo ": "Juanitopg@gmail.com",
            "Eres autista?": "SI",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "En mi cama ",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿¿¿PORQUE PREGUNTAS???",
            "Que te da mas ansiedad?": "El futuro",
            "Que te relaja?": "Mi madre",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "Un poco, solo cuando me estreso",
            "Algo que añadir?": "No"
           },
           {
            "Marca temporal": "5\/14\/2024 13:57:31",
            "Nombre y apellidos": "María Martínez Moya ",
            "Sexo?": "Femenino",
            "Pronombres?": "Ella",
            "Correo ": "mmm1999@gmail.com",
            "Eres autista?": "NO",
            "Eres Disléxico?": "No se porque prechuntas eso",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¡¡¡¡NO!!!!",
            "Que te da mas ansiedad?": "Los estudios",
            "Que te relaja?": "Cocinar ",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "NO",
            "Algo que añadir?": "Tengo TDAH"
           },
           {
            "Marca temporal": "5\/14\/2024 14:00:38",
            "Nombre y apellidos": "Borja Lapida",
            "Sexo?": "Masculino",
            "Pronombres?": "El",
            "Correo ": "Borjitalapidita@gmail.com",
            "Eres autista?": "Juego a los Sims",
            "Eres Disléxico?": "Solo un poci",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "En el tejado por la noche",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "Si",
            "Que te da mas ansiedad?": "El abandono",
            "Que te relaja?": "Hablar con mi hermanastra",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No",
            "Algo que añadir?": "Mi padre me abandono "
           },
           {
            "Marca temporal": "5\/14\/2024 14:05:21",
            "Nombre y apellidos": "Sebastián Caliente ",
            "Sexo?": "Masculino",
            "Pronombres?": "El",
            "Correo ": "sc2048",
            "Eres autista?": "Juego a los Sims",
            "Eres Disléxico?": "No se porque prechuntas eso",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿¿¿PORQUE PREGUNTAS???",
            "Que te da mas ansiedad?": "Mi padre",
            "Que te relaja?": "Jugar con mis primos ",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No",
            "Algo que añadir?": "No"
           },
           {
            "Marca temporal": "5\/14\/2024 14:24:05",
            "Nombre y apellidos": "Aarón Caliente",
            "Sexo?": "Masculino",
            "Pronombres?": "El",
            "Correo ": "aaca649",
            "Eres autista?": "Juego a los Sims",
            "Eres Disléxico?": "SI",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¿Me espías?",
            "Que te da mas ansiedad?": "Mi familia",
            "Que te relaja?": "Jugar",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "Un poco",
            "Algo que añadir?": "NO"
           },
           {
            "Marca temporal": "5\/14\/2024 14:26:19",
            "Nombre y apellidos": "Blanca Caliente",
            "Sexo?": "Femenino",
            "Pronombres?": "Ella",
            "Correo ": "Blanquicali@gmai.com",
            "Eres autista?": "Juego a los Sims",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "En la piscina",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¡¡¡¡NO!!!!",
            "Que te da mas ansiedad?": "Mi padre",
            "Que te relaja?": "Dormir",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No",
            "Algo que añadir?": "No"
           },
           {
            "Marca temporal": "5\/14\/2024 14:30:50",
            "Nombre y apellidos": "Alex Blanco Ora",
            "Sexo?": "Prefiero no decirlo",
            "Pronombres?": "Elle\/Ellu",
            "Correo ": "tucosita19@gmail.com",
            "Eres autista?": "SI",
            "Eres Disléxico?": "SI",
            "Tienes depresión?": "Si :(",
            "Si tienes depresión donde prefieres llorar?  ": "haciendo el pino",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "Si",
            "Que te da mas ansiedad?": "Todo",
            "Que te relaja?": "Las pastillas ",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "Mucho",
            "Algo que añadir?": "NO"
           },
           {
            "Marca temporal": "5\/14\/2024 14:32:59",
            "Nombre y apellidos": "Blanca Blanco ",
            "Sexo?": "Femenino",
            "Pronombres?": "Ella",
            "Correo ": "blanblan@gmail.com",
            "Eres autista?": "NO",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¡¡¡¡NO!!!!",
            "Que te da mas ansiedad?": "La oscuridad",
            "Que te relaja?": "Mi pareja ",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No ",
            "Algo que añadir?": "No me gusta la vinolencia "
           },
           {
            "Marca temporal": "5\/14\/2024 14:34:49",
            "Nombre y apellidos": "Max Jiménez ",
            "Sexo?": "Prefiero no decirlo",
            "Pronombres?": "Elli\/Ello",
            "Correo ": "Maxiiiii@gmail.com",
            "Eres autista?": "Alojomora",
            "Eres Disléxico?": "Solo un poci",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "Si",
            "Que te da mas ansiedad?": "Que me miren ",
            "Que te relaja?": "Estar sola",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "Solo si me miran mucho",
            "Algo que añadir?": "No"
           },
           {
            "Marca temporal": "5\/14\/2024 14:36:57",
            "Nombre y apellidos": "José Miguel Cabo  ",
            "Sexo?": "Masculino",
            "Pronombres?": "EL",
            "Correo ": "josemiguelcabo@gmail.com",
            "Eres autista?": "NO",
            "Eres Disléxico?": "Obviamente no",
            "Tienes depresión?": "No :)",
            "Eres paranoico\/ paranoica\/ paranoice\/ paranoici\/ paranoicu? ": "¡¡¡¡NO!!!!",
            "Que te da mas ansiedad?": "Nada, soy un hombre fuerte",
            "Que te relaja?": "Ver el futbol ",
            "Eres agresivo\/agresiva\/agresivi\/agresive\/agresivu": "No"
           }
    ];
    var encuestaContainer = document.getElementById('encuestaDatos');

    function encuestaDatos(data, filtro) {
        encuestaContainer.innerHTML = '';

        data.forEach(function(item) {
            if (!filtro || item['Tienes depresión?'] === filtro) {
                var divCol = document.createElement('div');
                divCol.className = 'col-lg-6';

                var divCard = document.createElement('div');
                divCard.className = 'card mb-3';

                var divCardBody = document.createElement('div');
                divCardBody.className = 'card-body';

                var h5 = document.createElement('h5');
                h5.className = 'card-title';
                h5.textContent = item['Nombre y apellidos'];

                var ul = document.createElement('ul');
                ul.className = 'list-group list-group-flush';

                for (var key in item) {
                    if (key !== 'Marca temporal' && key !== 'Nombre y apellidos') {
                        var li = document.createElement('li');
                        li.className = 'list-group-item';
                        li.textContent = key + ': ' + item[key];
                        ul.appendChild(li);
                    }
                }

                divCardBody.appendChild(h5);
                divCardBody.appendChild(ul);
                divCard.appendChild(divCardBody);
                divCol.appendChild(divCard);
                encuestaContainer.appendChild(divCol);
            }
        });
    }

    var filtroSelect = document.getElementById('filtro');

    filtroSelect.addEventListener('change', function() {
        var filtro = this.value;
        encuestaDatos(encuestaData, filtro);
    });

    encuestaDatos(encuestaData, '');
});