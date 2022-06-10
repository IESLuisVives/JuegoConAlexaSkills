const axios = require('axios');

module.exports={ 
    getMesEscrito(mesNumerico){
    let mes;
    switch(mesNumerico){
        case 00:
            mes='enero';
            break;
        case 01:
            mes='febrero';
            break;
        case 02:
            mes='marzo';
            break;
        case 03:
            mes='abril';
            break;
        case 04:
            mes='mayo';
            break;
        case 05:
            mes='junio';
            break;
        case 06:
            mes='julio';
            break;
        case 07:
            mes='agosto';
            break;
        case 08:
            mes='septiembre';
            break;
        case 09:
            mes='octubre';
            break;
        case 10:
            mes='noviembre';
            break;
        case 11:
            mes='diciembre';
            break;
        default:
            mes='No determinado'
            break;
    }
    return mes;
},
 fetchHechizo(numero_hechizo){
        const url = 'https://fedeperin-harry-potter-api.herokuapp.com/hechizos/'+ numero_hechizo;
       
        var config = {
            timeout: 2000,
        };

        async function getJsonResponse(url, config){
            const res = await axios.get(url, config);
            return res.data;
        }
        
        return getJsonResponse(url, config).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
    callDirectiveService(handlerInput, msg) {
        // Call Alexa Directive Service.
        const {requestEnvelope} = handlerInput;
        const directiveServiceClient = handlerInput.serviceClientFactory.getDirectiveServiceClient();
        const requestId = requestEnvelope.request.requestId;
        const {apiEndpoint, apiAccessToken} = requestEnvelope.context.System;
        // build the progressive response directive
        const directive = {
            header: {
                requestId
            },
            directive:{
                type: 'VoicePlayer.Speak',
                speech: msg
            }
        };
        // send directive
        return directiveServiceClient.enqueue(directive, apiEndpoint, apiAccessToken);
    }
}