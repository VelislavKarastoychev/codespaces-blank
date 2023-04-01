'use strict';
import { 
    ChromosomeErrorMessage, 
    IncorrectInputParameterInChromosome,
} from './errorTexts.js';
const IncorrectInputParameterInChromosomeF = () => {
    const error = new Error();
    error.name = ChromosomeErrorMessage;
    error.message = IncorrectInputParameterInChromosome;
    throw error;
} 
export default IncorrectInputParameterInChromosomeF;