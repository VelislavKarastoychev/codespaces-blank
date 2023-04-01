'use strict';
export const ChromosomeErrorMessage = '@euriklis/mathematics genetic algorithms library Chromosome error message';
export const EvolutionErrorMessage = '@euriklis/mathematics genetic algorithms library Evolution error message';
export const IncorrectConstraintsInChromosome = 'Incorrect constraints property in the Chromosome instance. Note that the constraints have to be from a function type.'
export const IncorrectIndividualsProperty = 'Incorrect individuals property in the current Evolution instance. Note that the individuals has to be a positive integer and represents the number of the population in the beginning of the evolution procedure.';
export const IncorrectInputInGetBestIndividuals = 'Incorrect input parameter in the getBestIndividuals() method. The parameter which this method requests is a positive integer number.';
export const IncorrectInputParameterInChromosome = 'The "options" parameter in the Chromosome constructor has to be an object with the appropriate properties.';
export const IncorrectInputParameterInEvolution = 'Incorrect input parameter in the Evolution constructor. Note that the input parameter has to be an object with appropriate properties like chromosome, individuals, offsprings, crossover, mutation. See the JSDoc documentation for more details.';
export const IncorrectOperatorInChromosome = 'Incorrect operator declaration in the Chromosome class. The operator has to be a function.';
export const IncorrectSizeInChromosome = 'Incorrect size in chromosome. The size which is equal to 1 denotes a 64-bit array buffer (8 byte array buffer). So the size has to be a number which when is multiplied by 64 to creates a number which is multiple to 8.';
export const IncorrectOffspringsProperty = 'Incorrectly defined "offsprings" property of the current Evolution instance. Note that this property has to be a positive integer. The default value of the property is set to unit.';
export const RequestedIndividualsMoreThanPopulation = 'The number of the requested individuals in method "getBestIndividuals()" is bigger than the population size.';