const surnameToTable = {
    "Table 1": ["Abainza", "Abajuela", "Abanes", "Abastillas", "Abayan", "Abejuela", "Abengana", "Abenion", "Abenojar", "Abeo", "Abila", "Abon", "Abuan", "Acampado", "Acebedo", "Agawin", "Aguaras", "Akmad", "Alarcon", "Albay", "Alberto", "Albis", "Alcantara", "Aldana", "Alfonso", "Alhamedi", "Alison", "Almanzor", "Almarez", "Almeria", "Alojacin", "Alvarez", "Alvero", "Amande", "Amarante", "Amata", "Amil", "Amion", "Anaya", "Andrada", "Angel", "Angeles", "Angeles", "Angles", "Aniflauni", "Año", "Antonio", "Apolinario", "Apostol", "Apruebo", "Aquino", "Aquino", "Aquino", "Arce", "Arceo", "Arcigal", "Arcilla", "Arenas", "Arias", "Aring", "Ariola", "Ariola", "Armas", "Armendi", "Arranchado", "Arrivado", "Aruelas", "Arzaga", "Asia", "Asuncion", "Ausan", "Avendaño", "Azcueta", "Babagay", "Babao", "Baccay", "Bacsal", "Badua", "Badua", "Bagadiong", "Bagay", "Bajado", "Balajadia", "Balateria", "Balbin", "Balena", "Baligod", "Balisacan", "Ballesteros", "Baloma", "Baltazar", "Baluyo", "Baluyut", "Bamba", "Bandal", "Bangeles", "Bangona", "Baniega", "Banta", "Baracao"],
    "Table 2": ["Baracao", "Barajas", "Barcansel", "Barcelon", "Barcelona", "Barnachea", "Barnedo", "Barnedo", "Barreto", "Basquez", "Batac", "Bautista", "Bautista", "Bautista", "Bautista", "Bautista", "Bayan", "Bayla", "Becera", "Belbes", "Belisario", "Beltran", "Beneras", "Benipayo", "Benito", "Beo", "Beramo", "Berdera", "Bernal", "Bernales", "Bernardino", "Bernardo", "Bernardo", "Bernardo", "Bernardo", "Bernas", "Betache", "Biag", "Bianzon", "Billones", "Binaday", "Bisoy", "Bodeña", "Bolivar", "Bonggay", "Bonor", "Borras", "Borromeo", "Borromeo", "Brebaño", "Brucelo", "Bruno", "Bucag", "Buena", "Buenaventura", "Buenavista", "Buendia", "Bugayong", "Bugnon", "Buhain", "Buhat", "Bundoc", "Bundoc", "Bustos", "Butac", "Cabais", "Cabalar", "Cabales", "Cabalfin", "Cabalquinto", "Cabanguisan", "Cabantog", "Cachuela", "Cacnio", "Caduco", "Cainos", "Cairo", "Calabio", "Calanoc", "Calimag", "Calimbo", "Calo", "Calura", "Campillos", "Canaveral", "Cangas", "Cangas", "Cano", "Cantillo", "Cantonjos", "Capellan", "Capiral", "Capistrano", "Caragatan", "Caraig", "Cariaga", "Carinugan", "Casanova", "Casiano", "Casimiro", "Casis"],
    "Table 3": ["Casquejo", "Castaneda", "Castillano", "Castillo", "Castillo", "Castillo", "Castro", "Castro", "Catli", "Caubalejo", "Cayabyab", "Cayabyab", "Celedonio", "Cellona", "Cenon", "Cervantes", "Chavez", "Chavez", "Chavez", "Cielo", "Cipriano", "Clemencia", "Clemente", "Clemente", "Clemente", "Coballes", "Coco", "Concepcion", "Cordero", "Corpuz", "Corpuz", "Cortez", "Cotejo", "Cristalino", "Cruz", "Cruz", "Cruz", "Cruz", "Cruz", "Cruz", "Cruz", "Cuaresma", "Cudal", "Cumigad", "Cureg", "Curutan", "Dacanay", "Dajonan", "Dalmacio", "Danao", "Danganan", "Danzalan", "De Asis", "De Dios", "De Guzman", "De Guzman", "De Guzman", "De Jesus", "De Jose", "De Lemos", "De Leon", "De Los Santos", "De Mesa", "De Mesa", "De Mesa", "De Ocampo", "De Venecia", "De Vera", "Degala", "Deguzman", "Del Mundo", "Del Mundo", "Del Mundo", "Del Rosario", "Dela Cruz", "Dela Cruz", "Dela Cruz", "Dela Cruz", "Dela Cruz", "Dela Cruz", "Dela Cruz", "Dela Peña", "Dela Peña", "Dela Rosa", "Delasan", "Delos Angeles", "Delos Reyes", "Delos Reyes", "Delos Reyes", "Delos Santos", "Delos Santos", "Delos Santos", "Delos", "Denopol", "Deraya", "Derilo", "Desunia", "Deuda", "Devero"],
    "Table 4": ["Devero", "Diaz", "Diaz", "Diaz", "Diaz", "Dimaiwat", "Diolola", "Diquit", "Dita", "Diwa", "Dizon", "Dizon", "Doctolero", "Doguiles", "Dolleton", "Dolovino", "Domdom", "Domingo", "Domingo", "Domingo", "Dominguez", "Donalanta", "Doremon", "Dorompile", "Dulay", "Dumlao", "Dumosdos", "Dural", "Eguizabal", "Elaurza", "Ellarte", "Embionada", "Embuscado", "Enriola", "Enriquez", "Erbite", "Erero", "Erfe", "Erice", "Erojo", "Escalona", "Espanillo", "Espano", "Españo", "Espedillion", "Espenilla", "Espera", "Espina", "Espiritu", "Espiritu", "Esplana", "Estabillo", "Esteva", "Estologa", "Estoya", "Etorma", "Etorma", "Evangelista", "Evangelista", "Evangelista", "Eyatid", "Fabella", "Fajardo", "Fariolen", "Faustino", "Favila", "Fedelis", "Federigan", "Feliciano", "Fernandez", "Fernandez", "Fernandez", "Ferrer", "Ferrer", "Ferreras", "Flora", "Fonte", "Formeloza", "Francisco", "Francisco", "Francisco", "Francisco", "Franco", "Freires", "Frias", "Fulgencio", "Fulla", "Fulo", "Furio", "Gabon", "Gabutan", "Gadugdug", "Galapin", "Galecia", "Galingan", "Galisanao", "Gallardo", "Gallardo", "Galleon", "Galleta", "Galut"],
    "Table 5": ["Galvez", "Gamila", "Gapiza", "Garbo", "Garcia", "Garcia", "Gaton", "Gautani", "Genova", "Geremia", "Gerilla", "German", "Germina", "Gerona", "Geronimo", "Gingoyon", "Go", "Gobantes", "Gomopas", "Gonzales", "Gonzalvo", "Gordon", "Gorzal", "Gregorio", "Guerrero", "Guittap", "Guray", "Guray", "Gutierrez", "Harina", "Hernandez", "Hernandez", "Hernandez", "Hernandez", "Herrera", "Hilario", "Hilario", "Holgado", "Hollon", "Ibardaloza", "Ico", "Ignacio", "Ignacio", "Inao", "Inocencio", "Iriola", "Isidro", "Isip", "Isorena", "Isorena", "Itona", "Jabon", "Jacolbia", "Jalos", "Jamolin", "Javier", "Javier", "Jimenez", "Jimenez", "Juan", "Julaton", "Juliales", "Juliales", "Junio", "Justiniano", "Kusain", "La Torre", "Labaco", "Labsan", "Ladia", "Langit", "Lantoria", "Lanza", "Lapeña", "Lardizabal", "Lardizabal", "Laserna", "Latoza", "Lauga", "Lauigan", "Laureano", "Layson", "Lazaro", "Lazaro", "Lazarte", "Leoncio", "Lerios", "Libutan", "Limson", "Limson", "Linao", "Lintag", "Lisondra", "Lizardo", "Llamado", "Llemes", "Llobrera", "Lomboy", "Longyapon", "Lopez", "Lorenzana"],
    "Table 6": ["Lozada", "Lozada", "Luces", "Ludovice", "Lugasan", "Lulu", "Lumenda", "Macaballug", "Macalinao", "Macalintal", "Macaraig", "Macaranas", "Macaranas", "Macawile", "Macorol", "Madarang", "Magalona", "Maganes", "Magapi", "Magayon", "Magayon", "Maghirang", "Maglente", "Magnaye", "Magno", "Magramo", "Mahinay", "Malabanan", "Malasa", "Maldo", "Mallari", "Mallo", "Malones", "Mampusti", "Manahan", "Manahan", "Manalaotao", "Manansala", "Manapat", "Manguni", "Manguray", "Manuel", "Mape", "Maratas", "Marcaida", "Marcos", "Margarejo", "Maristela", "Marmeto", "Marquez", "Marquez", "Masangkay", "Masicat", "Masnayon", "Mata", "Mata", "Matoguina", "Matusalem", "Maypa", "Mazarate", "Mdura", "Mediavillo", "Memoracion", "Mendiola", "Mendoza", "Mendoza", "Mendoza", "Mercader", "Mercado", "Mesina", "Miguel", "Minardo", "Miñas", "Mi-Ot", "Miradora", "Miranda", "Mirasol", "Misa", "Mogol", "Molano", "Molina", "Molina", "Mondano", "Mondigo", "Monforte", "Monge", "Monsale", "Monsanto", "Montaño", "Montederamos", "Montianto", "Morante", "Morilla", "Mosada", "Nabos", "Nacario", "Nagamos", "Nalla", "Nalo", "Nalo", "Namuco"],
    "Table 7": ["Naranja", "Narcise", "Nasalita", "Nava", "Naval", "Navia", "Nazareno", "Nepomuceno", "Nepomuceno", "Neypes", "Nievares", "Nipascua", "Noceto", "Noma", "Nuñez", "Nuval", "Obedoza", "Ocampo", "Ocampo", "Ocampo", "Ocampo", "Olapani", "Olinar", "Olisa", "Oliveros", "Olorosisimo", "Ongleo", "Oray", "Orcullo", "Ordanza", "Orgado", "Orilla", "Orongan", "Orquia", "Osias", "Osinsao", "Pablico", "Pablo", "Pabustan", "Pacheco", "Padayao", "Padayogdog", "Padilla", "Padilla", "Padillo", "Pagacpac", "Pagador", "Pagal", "Pagalilauan", "Pagcaliwagan", "Pajarito", "Pal", "Palarao", "Palle", "Palomillo", "Panes", "Pangilinan", "Paniza", "Panlilio", "Panopio", "Papio", "Parañal", "Pasagui", "Pascual", "Pascual", "Pascual", "Patindol", "Patulot", "Payod", "Paz", "Peco", "Pedrosa", "Pega", "Pena", "Peñalosa", "Pera", "Peralta", "Peralta", "Perez", "Perjoles", "Pernetes", "Picio", "Pilapil", "Pilares", "Pilon", "Pineda", "Pineda", "Planta", "Plasabas", "Policarpio", "Policarpio", "Polon", "Pormacion", "Porte", "Posadas", "Prajes", "Prospero", "Publico", "Queja", "Queling"],
    "Table 8": ["Queza", "Quibuyen", "Quides", "Quimson", "Quinto", "Quite", "Quitoras", "Racelis", "Radoc", "Ragunton", "Ramirez", "Ramos", "Ramos", "Ramos", "Ramos", "Raposas", "Raya", "Raymundo", "Reazo", "Rebancos", "Recaña", "Regacho", "Regaya", "Regis", "Rejuso", "Rellama", "Remojo", "Resos", "Resulto", "Reyes", "Reyes", "Reyes", "Reyes", "Reyes", "Reyes", "Reyes", "Reyes", "Reyes", "Reyes", "Ricafort", "Ricalde", "Rinion", "Rioja", "Rivera", "Rivera", "Rivero", "Roa", "Rodriguez", "Rodriguez", "Rodriguez", "Rodriguez", "Rodrigueza", "Rol", "Rosales", "Rosales", "Rosales", "Rosas", "Roy", "Rubino", "Ruda", "Ruiz", "Sacmar", "Sacopla", "Sagutin", "Sahagun", "Salandanan", "Salangsang", "Salas", "Salen", "Salivio", "Salvidar", "Samio", "Samodio", "San Buenaventura", "Sanchez", "Sanchez", "Sanchez", "Sangco", "Sanmiguel", "Santiago", "Santor", "Santos", "Santos", "Santos", "Santos", "Santos", "Santos", "Santos", "Santos", "Santos", "Santos", "Sarabia", "Sarabia", "Sarmiento", "Sebastian", "Sembrano", "Sencio", "Seño", "Sibayan", "Sibayan"],
    "Table 9": ["Sierra", "Silva", "Silva", "Silvestre", "Simoy", "Sintos", "Sioson", "Sison", "Soledad", "Soliven", "Soquila", "Soriso", "Sotelo", "Sotiar", "Sta Maria", "Sta Monica", "Suarez", "Suarez", "Sudario", "Suguitao", "Sultan", "Sumayan", "Supresencia", "Sustituedo", "Sy", "Sy", "Sy", "Tabago", "Tablate", "Tacal", "Tacate", "Taccabban", "Tacis", "Tacsuan", "Tadeo", "Taduran", "Taguiam", "Tagulao", "Tagulao", "Taime", "Talisic", "Tamayo", "Tamayo", "Tamayo", "Tamayo", "Tamondong", "Tampos", "Tamta", "Tan", "Tandoc", "Tarrangco", "Tayag", "Tebrero", "Tengson", "Teodosio Jr", "Teves", "Teves", "Tiburcio", "Tolledo", "Tongco", "Torejo", "Torrechilla", "Torres", "Torres", "Traqueña", "Traqueña", "Trinidad", "Tuazon", "Tubiera", "Tungpalan", "Tuplano", "Turreda", "Turreda", "Tusi", "Tutaan", "Tuzon", "Uchi", "Umali", "Uñas", "Urquia", "Uy", "Valbuena", "Vargas", "Vargas", "Vargas", "Vega", "Vega", "Velasco", "Vergara", "Vidal", "Vigo", "Villacrusis", "Villamer", "Villanueva", "Villar", "Villaverde", "Villena", "Visbal", "Viscayno", "Vivar", "Yambot", "Yasis", "Yulo", "Zabat", "Zipagan"],
    // Add more mappings as needed
};

// Function to handle button click and lookup table information
function lookupTable() {
    const surname = document.getElementById("surnameInput").value.trim();

    let foundTable = null;
    
    // Loop through each table in surnameToTable object
    for (let table in surnameToTable) {
        // Check if the surname exists in the array for this table
        if (surnameToTable[table].includes(surname)) {
            foundTable = table;
            break;
        }
    }

    if (foundTable) {
        const tableInfo = `Please proceed to ${foundTable} for registration.`;
        document.getElementById("tableInfo").textContent = tableInfo;
    } else {
        document.getElementById("tableInfo").textContent = "Surname not found in our records.";
    }
}
