# A brief introduction to the genetic and evolution algorithms

The genetic algorithms or as it is more strictly defined in the specialized bibliography as *evolution algorithms* (EAs) or *evolution calculations* (ECs) are branch of the applied mathematics which implement the model of biological reproduction and the evolving of the individual's species for solving of a general or abstract class of mathematical problems.

Let us assume that a mathematical problem (or simply called bellow *task*) can be described mathematically with some operations on set of elements defined on an abstract field. If this field or structure in some general space has power not less than the *continuum* (or in other words is homeomorphism of the ℝ space) then it may be represented (encoded) with a binary sequence {0, 1} \[ISS\]. 
For example let us assume a portfolio from 500 financial assets with a Var-CoVar matrix S and mean values vector of the assets **μ**. Our task is to find a vector *w* with size 500, which minimize the constrained quadratic program:

$$ \begin{aligned}
& \min_{\mathbf{w}} Q = \frac{1}{2} \mathbf{w}^T \mathbf{S} \mathbf{w} - \boldsymbol{\mu}^T \mathbf{w} \\
& \text{s.t.:} \\
& \qquad \boldsymbol{\mu}^T \mathbf{w} \geq r \\
& \qquad \mathbf{1}^T \mathbf{w} = 1 \\
\end{aligned} $$


 μ**^T·**w** >= r and **1**^T·**w** = 1. The vector **w** can be encoded in a binary form with at most a sequence of 32000 binary elements (each value of the vector **w** is a 64 bit number, so we need 64·500 = 32000).
The sequence of elements {0, 1} is called *genotype* and the value of 64 bit sequence of the genotype is called *allele* (the index of the allele is called *locus*). The inverse operation, the *decrypted* or *decoded* form of the sequence {0, 1} is called *phenotype* (in the case above this is the vector **w**).
In an ***evolution space*** we have a countered set of individuals represented by their species and each individual has properties which measures its location and quality. The location of the individual is called *chromosome* and the quality of the individual is called *fitness* (in the case described above this is the value of the Q for the decoded sequence chromosome genotype). When we say chromosome we mean an element of the Evolution space in which is defined a measure which can obtain the distance between two chromosomes (individuals) and when we say genotype we assume that the chromosome code has mapped with a function f, which transforms the sequence {0, 1} to a concrete mathematical object which may belongs to other space distinct from the evolution space. 


</br>

# References


\[ISS\] Mathematical analysis, V. Ilin, V. Sadovnichi, Bl. Sendov, Science and art, Sofia, 1979.
