'use strict';
import {
    EvolutionErrorMessage,
    IncorrectInputParameterInEvolution,
} from './errorTexts.js';
const IncorrectInputParameterInEvolutionF = () => {
    const error = new Error();
    error.name = EvolutionErrorMessage;
    error.message = IncorrectInputParameterInEvolution;
    throw error;
}
export default IncorrectInputParameterInEvolutionF;