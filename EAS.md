# A brief introduction to the genetic and evolution algorithms

The genetic algorithms or as it is more strictly defined in the specialized bibliography as *evolution algorithms* (EAs) or *evolution calculations* (ECs) are branch of the applied mathematics which implement the model of biological reproduction and the evolving of the individual's species for solving of a general or abstract class of mathematical problems.

Let us assume that a mathematical problem (or simply called bellow *task*) can be described mathematically with some operations on set of elements defined on an abstract field. If this field or structure in some general space has power not less than the *continuum* (or in other words is homeomorphism of the ℝ space) then it may be represented (encoded) with a binary sequence {0, 1} \[ISS\]. 
***Definition 1:*** Consider a task P with parameters (arguments) defined over an abstract field F which elements have power no bigger than the continuum and in addition the elements of the P belong to a Banach space. Assume that for the task P exists a bijection map or a rule , or a function which transforms  the arguments (parameters) of the P to a sequence S, which elements belong to a countered compact space. Then this rule is called *encoder*. The arguments of the P are called *phenotype* and the encoded form of the arguments of the task P in are called *genotype* of the task P. The values of the P for given arguments are called *fitness* of the P.

***Definition 2:*** Consider a task P, which phenotype is a point from a Banach space. Then a sequence of phenotypes is called population of the task and every member of the population is called individual</sup>1</sup>.  
For example let us assume a portfolio from 500 financial assets with a Var-CoVar matrix S and mean values vector of the assets **μ**. Our task is to find a vector *w* with size 500, which minimize the constrained quadratic program:

$$ \begin{aligned}
& \min_{\mathbf{w}} Q = \frac{1}{2} \mathbf{w}^T \mathbf{S} \mathbf{w} - \boldsymbol{\mu}^T \mathbf{w} \\
& \text{s.t.:} \\
& \qquad \boldsymbol{\mu}^T \mathbf{w} \geq r \\
& \qquad \mathbf{1}^T \mathbf{w} = 1 \\
\end{aligned} $$


The vector **w** may be encoded in a binary form with at most a sequence of 32000 binary elements (each value of the vector **w** is a 64 bit number, so we need 64·500 = 32000 bits).
The sequence of elements {0, 1} is called *genotype* and the value of 64 bit sequence of the genotype is called *allele* (the index of the allele is called *locus*). The inverse operation, the *decrypted* or *decoded* form of the sequence {0, 1} is called *phenotype* (in the case above this is the vector **w**).
In an ***evolution space*** we have a countered set of individuals represented by their species and each individual has properties which measures its location and quality. The location of the individual is called *chromosome* and the quality of the individual is called *fitness* (in the case described above this is the value of the Q for the decoded sequence chromosome genotype). When we say chromosome we mean an element of the Evolution space in which is defined a measure which can obtain the distance between two chromosomes (individuals) and when we say genotype we assume that the chromosome code has mapped with a function f, which transforms the sequence {0, 1} to a concrete mathematical object which may belongs to other space distinct from the evolution space. 


</br>

# References

1. Note that in a sequence is possible two members to be equal, while in the sets/collections every member has to be unique.

</br>

# Bibliography


\[ISS\] Mathematical analysis, V. Ilin, V. Sadovnichi, Bl. Sendov, Science and art, Sofia, 1979.
