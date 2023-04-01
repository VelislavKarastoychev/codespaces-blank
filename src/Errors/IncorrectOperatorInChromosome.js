'use strict';
import {
    ChromosomeErrorMessage,
    IncorrectOperatorInChromosome,
} from './errorTexts.js';

const IncorrectOperatorInChromosomeF = () => {
    const error = new Error();
    error.name = ChromosomeErrorMessage;
    error.message = IncorrectOperatorInChromosome;
    throw error;
}
export default IncorrectOperatorInChromosomeF;
