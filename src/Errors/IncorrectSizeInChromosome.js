'use strict';
import {
    ChromosomeErrorMessage,
    IncorrectSizeInChromosome,
} from './errorTexts.js';
const IncorrectSizeInChromosomeF = () => {
    const error = new Error();
    error.name = ChromosomeErrorMessage;
    error.message = IncorrectSizeInChromosome;
    throw error;
}
export default IncorrectSizeInChromosomeF;