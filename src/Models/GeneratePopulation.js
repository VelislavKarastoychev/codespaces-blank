'use strict';
/**
 * 
 * @param {number} individuals 
 * @param {number} size 
 * @returns {Array.<ArrayBuffer>}
 * @description this utility function generates
 * a collection of ArrayBuffers which are randomly
 * set.
 */
const GeneratePopulation = (individuals, size) => {
    const n = size * (1 << 9), population = [], fitness = 1 / individuals;
    let i, j, sequence, view, p, q;
    for (i = 0; i < individuals >> 2; i++) {
        j = i << 2;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
        ++j;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
        ++j;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
        ++j;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
    }
    if (individuals % 4 >= 3) {
        j = individuals - 3;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
    }
    if (individuals % 4 >= 2) {
        j = individuals - 2;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
    }
    if (individuals % 4 >= 1) {
        j = individuals - 1;
        sequence = new ArrayBuffer(n);
        view = new Float64Array(sequence);
        for (p = 0; p < view.length >> 2; p++) {
            q = p << 2;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
            ++q;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 3) {
            q = view.length - 3;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 2) {
            q = view.length - 2;
            view[q] = Math.random();
        }
        if (view.length % 4 >= 1) {
            q = view.length - 1;
            view[q] = Math.random();
        }
        population[population.length] = { sequence, fitness };
    }
    return population;
}