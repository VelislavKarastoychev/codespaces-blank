'use strict';
import {
    EvolutionErrorMessage,
    RequestedIndividualsMoreThanPopulation,
} from './errorTexts.js';
const RequestedIndividualsMoreThanPopulationF = () => {
    const error = new Error();
    error.name = EvolutionErrorMessage;
    error.message = RequestedIndividualsMoreThanPopulation;
    throw error;
}
export default RequestedIndividualsMoreThanPopulationF;