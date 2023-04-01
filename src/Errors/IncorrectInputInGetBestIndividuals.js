'use strict';
import {
    EvolutionErrorMessage,
    IncorrectInputInGetBestIndividuals,
} from './errorTexts.js';
const IncorrectInputInGetBestIndividualsF = () => {
    const error = new Error();
    error.name = EvolutionErrorMessage;
    error.message = IncorrectInputInGetBestIndividuals;
    throw error;
}
export default IncorrectInputInGetBestIndividualsF;