//Crear un cliente de una api rest para conocer el tiempo restante para que aparezca un autobus de la empresa de transportes publica

type information = {
    code : string,
    description : string,
    datetime: string,
    data : string[]
}

type parada = {
    Arrive: string [],
    StopInfo : string[],
    ExtraInfo : string,
    Incident : string,

}

type Geometry = {
    type : string,
    coordinates : number[]
}

type bus = {
    line: string,
    stop: string,
    isHead : boolean,
    destination : string,
    deviation : string,
    bus : number,
    geometry : Geometry,
    estimateArrive : number,
    DistanceBus : number,
    positionTypeBus : string,
}

//EMTMADRID-MobilityLabs API client
const url = "https://servicios.emtmadrid.es:8443/bus/servicebus.asmx?op=GetTimesLines"
const response = await fetch(url);
const data = await response.json();
console.log(data);
/*
const url = 'https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/2410/arrives/';
const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'stopId' : '2410',
        'lineArrive' : '1',
        'accessToken': 'c9b6c9b6-0c3d-4b1f-9c1f-8c3d8c3d8c3d',
        'Body' : {
            'cultureInfo' : 'ES',
            'Text_StopRequired_YN' : 'Y',
            'Text_EstimationsRequired_YN' : 'Y',
            'Text_IncidencesRequired_YN' : 'Y',
            'DateTime_Referenced_Incidences_YYYYMMDD' : '20221010',
        }
    }
});
const json = await response.json();
console.log(json);*/



