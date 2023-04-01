# @euriklis/mathematics genetic_algorithms library.

The *genetic_algorithms* library implements an umbrella of evolution and coevolution algorithms in an genetic - like pattern. More detailed information for the genetic algorithms and the evolutionary strategies that they use you can read [here](./EAS.md). 

The *genetic_algorithms* library consists from two main modules (classes): Evolution and Coevolution. The library also provides a utility class called *Chromosome*.

To define an instance of the Evolution class you have to specify the size of the individuals which initially will be created (the so called *popsize* parameter), the *offsprings* which will be generated in every evolution step, the *selection* rule (more strictly defined as *selection operator* in the bibliography) and the *Chromosome*, that is the characterization of the individuals. The chromosome characterization is a Chromosome class object. 

To define a Chromosome class