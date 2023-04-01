'use strict';
import {
    ChromosomeErrorMessage,
    IncorrectConstraintsInChromosome,
} from './errorTexts.js';
const IncorrectConstraintsInChromosomeF = () => {
    const error = new Error();
    error.name = ChromosomeErrorMessage;
    error.message = IncorrectConstraintsInChromosome;
    throw error;
}
export default IncorrectConstraintsInChromosomeF;