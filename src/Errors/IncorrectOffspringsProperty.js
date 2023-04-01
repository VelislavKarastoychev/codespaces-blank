'use strict';
import {
    EvolutionErrorMessage,
    IncorrectOffspringsProperty,
} from './errorTexts.js';
const IncorrectOffspringsPropertyF = () => {
    const error = new Error();
    error.name = EvolutionErrorMessage;
    error.message = IncorrectOffspringsProperty;
    throw error;
}
export default IncorrectOffspringsPropertyF;