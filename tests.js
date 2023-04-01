'use strict';
import { Evolution, Chromosome, Coevolution } from './index.js';
const evolution = new Evolution();
evolution.chromosome = new Chromosome({ operator: function (x) { 
    return x* x * x - 23 * x * x + 2.8 * x + 124;
}, });
// evolution.begin();