'use strict';

import {
    IsFunction,
    IsNumber,
    IsObject,
    IsPositiveInteger,
    IsSameWithAny,
    IsUndefined,
} from './Conditions/index.js';
import {
    IncorrectConstraintsInChromosome,
    IncorrectIndividualsProperty,
    IncorrectInputInGetBestIndividuals,
    IncorrectInputParameterInChromosome,
    IncorrectInputParameterInEvolution,
    IncorrectOffspringsProperty,
    IncorrectOperatorInChromosome,
    IncorrectSizeInChromosome,
    RequestedIndividualsMoreThanPopulation,

} from './Errors/index.js';
import { 
    ComputeFitness,
    GeneratePopulation,
    GetBestIndividuals,
 } from './Models/index.js';
export class Evolution {
    #crossover = 'arithmetic';
    #individuals = 10;
    #offsprings = 1;
    #population = [];
    /**
     *
     * @class Evolution - this class implements the
     * operators of the genetic algorithms and performs
     * them in order to achieve the required task 
     * (optimization procedure or solution of some 
     * mathematically modeled problem).
     * 
     * @param {{
     * individuals: number,
     * offsprings: number,
     * chromosome: Chromosome,
     * crossover: 'one point' | 'two point' | 
     *     'gene average' | 'uniform' | 
     *     'gene probabilistic' | 'stochastic'
     *     'multi parent average'
     * mutation: 'default' | 'swap' | 'Gaussian' | 'inversion'
     * }} options 
     */
    constructor(options) {
        if (IsObject(options)) {
            this.individuals = options.individuals;
            this.offsprings = options.offsprings;
            this.chromosome = options.chromosome;
            this.crossover = options.crossover;
            this.mutation = options.mutation;
        } else if (!IsUndefined(options)) IncorrectInputParameterInEvolution();
    }

    /**
     * @returns {number} an integers which represents
     * the number of the individuals which will be created
     * initially in the evolution procedure.
     */
    get individuals() { return Math.max(this.#individuals, this.population.length); }
    /**
     * @param {number} individuals - an integer number.
     * @description this method sets the number of the
     * initial individuals which will be generated when
     * the evolution procedure starts.
     */
    set individuals(candidates) {
        if (IsPositiveInteger(candidates)) {
            if (this.population.length) {
                if (this.individuals < candidates) {
                    this.#population = [
                        ...this.#population, 
                        ...GeneratePopulation(candidates - this.individuals, this.chromosome.size)
                    ];
                } else if (this.individuals > candidates) {
                    this.#population = this.getBestIndividuals(candidates);
                }
            } else this.#individuals = candidates
        } else IncorrectIndividualsProperty();
    }
    /**
     * @returns {number} an integer which represents the number of
     * the new individuals which will be created by the crossover 
     * and mutation procedure.
     * @description this method returns 
     * the count of the new individuals
     * which will be generated in every 
     * Evolution step (stage).
     */
    get offsprings() { return this.#offsprings; }
    /**
     * @param {number} offsprings an integer
     * @description this method sets the children
     * or the offsprings which will be created in
     * every stage of the Evolution procedure.
     */
    set offsprings(offsprings) {
        if (IsPositiveInteger(offsprings)) {
            if (this.population.length > offsprings) this.#offsprings = offsprings;
            else IncorrectOffspringsProperty();
        } else IncorrectOffspringsProperty();
    }

    /**
     * @returns {Array.<{sequence: ArrayBuffer, fitness: number}>}
     * @description this method gets the current population of
     * the Evolution ecosystem.
     */
    get population() {
        if (IsUndefined(this.#population)) {
            this.generatePopulation();
        }
        return this.#population;
    }
    /**
     * @returns {
     * 'one point' | 'two point' | 'arithmetic' | 
     * 'probabilistic' | 'stochastic' | 'uniform' } the 
     * type of the crossover operator.
     * @description this method returns the type of the
     * crossover operator which is needed for the performance
     * of the Evolution process.
     * If the crossover is equals to "one point", then the
     * offsprings which will be generated have to be generated
     * from the first p elements of the first parent and the
     * other p + 1 to n elements of the second element.
     * If the value is equals to "two point", then the 
     */
    get crossover () { return this.#crossover; }
    /**
     * 
     * @param {number} n an integer smaller than
     * the population length of the Evolution
     * ecosystem. 
     * @returns {Array.<{sequence: ArrayBuffer, fitness: number}>} an
     * array of object elements with properties sequence (the array buffer
     * with the sequence description of the individual) and fitness - the
     * value of efficient performance of the task.
     * @description this method selects the best n individuals
     * from the population of the Evolution ecosystem. The
     * method uses the Chromosome 
     */
    getBestIndividuals(n) {
        if (IsPositiveInteger(n)) {
            if (n < this.individuals) {
                return GetBestIndividuals(this.computeFitness().#population, n);
            } else RequestedIndividualsMoreThanPopulation();
        } else IncorrectInputInGetBestIndividuals();
    }
    /**
     * @description this method creates the initial
     * population of the current Evolution instance. 
     * Note that if the population property is already defined,
     * then this method 
     * @returns {Evolution}
     **/
    generatePopulation() {
        this.#population = GeneratePopulation(this.individuals, this.chromosome.size);
        return this;
    }
    /**
     * 
     * @returns {Evolution}
     * @description this method computes
     * the fitness property of every population
     * element (individual) of the current Evolution
     * instance.
     */
    computeFitness() {
        ComputeFitness(this.#population, this.chromosome);
        return this;
    }
}




export class Chromosome {
    #constraints = function () { return true; };
    #operator = null;

    /**
     *
     * @description this constructor generates the instance
     * of a Chromosome class. We define a Chromosome as a
     * labeled collection (dictionary) with titles "operator",
     * the underlined function which represents the objective
     * function,    
     * @param {{
     * operator: function(ArrayBuffer, {}):number,
     * constraints: function(ArrayBuffer, {}):Array, 
     * size: number,
     * sequence: options.sequence,
     * parameters: {}
     * }} options 
     */
    constructor(options) {
        if (!IsObject(options)) {
            this.operator = options.operator;
            this.constraints = options.constraints;
            this.size = options.size;
            this.sequence = options.sequence;
            this.parameters = options.parameters;
        } else if (!IsUndefined(options)) IncorrectInputParameterInChromosome();
    }
    /**
     * @returns {function}
     */
    get operator() { return this.#operator; }
    /**
     * @param {function} f
     */
    set operator(f) {
        if (IsFunction(f)) this.#operator = f;
        else if (!IsUndefined(f)) IncorrectOperatorInChromosome();
    }
    get constraints() { return this.#constraints; }
    set constraints(constraints) {
        if (IsFunction(constraints)) this.#constraints = constraints;
        else if (IsUndefined(constraints)) IncorrectConstraintsInChromosome();
    }
    get size() { return this.#size; }
    set size(s) {
        if (IsNumber(s)) {
            if (!((s * 64) % 8)) {
                this.#size = s;
            } else IncorrectSizeInChromosome();
        } else IncorrectSizeInChromosome();
    }
}


export class Coevolution {
    constructor(options) { }
}