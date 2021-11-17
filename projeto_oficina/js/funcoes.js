$(function(){
console.log("aaaaa")
		$.getJSON("js/automoveis.json", function(data){		
			
			for(var i = 0; i < data['automoveis'].length; i++){
				$("#TableData").append("<tr>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['MARCA'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CARRO'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
				$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
				$("#TableData").append("</tr>");
			}
		});
});
	

const search = function() {
    var marca = $("#filter").val()

    $("#TableData").empty()

    $.getJSON("js/automoveis.json", data => {

        var newArray = data['automoveis'].filter(automovel => automovel.MARCA.indexOf(marca.toUpperCase()) != -1)


        for (var i = 0; i < newArray.length; i++) {
            $("#TableData").append("<tr>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['MARCA'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CARRO'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CASTER_DIANTEIRO_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CASTER_DIANTEIRO_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CAMBER_TRASEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CAMBER_TRASEIRA_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + newArray[i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
            $("#TableData").append("</tr>");
        }

    })
}