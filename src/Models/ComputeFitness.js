'use strict';
import { IsFunction, IsNumber } from "../Conditions/index.js";
import { Chromosome } from "../index.js";

/**
 * @param {Array.<{sequence: ArrayBuffer, fitness: number}>} population
 * @param {Chromosome} chromosome
 * @description this utility function sets the fitness
 * property of the current Evolution instance.
 * The complexity of the function is O(2·n), where
 * with n is denoted the population length.
 */
const ComputeFitness = (population, chromosome) => {
    let fitness_norm = 0, f, i, j;
    for (i = 0; i < population.length >> 2; i++) {
        j = i << 2;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            }
        }
        ++j;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            }
        }
        ++j;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            }
        }
        ++j;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            } 
        }
    }
    if ( population.length % 4 >= 3) {
        j = population.length - 3;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            }
        }
    }
    if ( population.length % 4 >= 2) {
        j = population.length - 2;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            }
        }
    }
    if (population.length % 4 >= 1) {
        j = population.length - 1;
        if (IsFunction(chromosome.operator)) {
            chromosome.sequence = population[j].sequence;
            f = chromosome.operator();
            if (IsNumber(f)) {
                population[j].fitness = chromosome.operator();
                fitness_norm += f;
            }
        }
    }
    // normalize the fitness of every individual.
    if (fitness_norm) {
        for (i = 0;i < population.length >> 2;i++) {
            j = i << 2;
            population[j].fitness /= fitness_norm;
            ++j;
            population[j].fitness /= fitness_norm;
            ++j;
            population[j].fitness /= fitness_norm;
            ++j;
            population[j].fitness /= fitness_norm;
        }
        if (population.length % 4 >= 3) {
            j = population.length - 3;
            population[j].fitness /= fitness_norm;
        }
        if (population.length % 4 >= 2) {
            j = population.length - 2;
            population[j].fitness /= fitness_norm;
        }
        if (population.length % 4 >= 1) {
            j = population.length - 1;
            population[j].fitness /= fitness_norm;
        }
    }
};
export default ComputeFitness;