title: "Learning Neural Computation - 01"
date: 2015-10-19 23:33:33
tags: [Computer_Science, Neural_Computation]
---
#I. Introduction

##What is Neural Computation?

1. Neural Computationis a general Machine Learning approach that involves processing information in a similar manner to the networks of neurons (i.e.Neural Networks) found in human/animal brains.

2. Artificial Neuronsare crude approximations of the neurons found in biological brains. They may be physical devices, or purely mathematical  constructs.

3. Artificial Neural Networks(ANNs) are networks of Artificial Neurons, and hence constitute crude approximations to parts of real brains. They may be physical devices, or simulated on conventional computers.

4. From a practical point of view, any ANN is just a parallel computational system consisting of many simple processing elements connected together in aspecific way in order to perform a particular task.

5. One should never lose sight of how crude the approximations are, and how over-simplified ANNs are compared to the neural networks in real brains

##Why are Artificial Neural Networks Worth Studying?

1. Even though individual artificial neurons are very simple, networks of them can be shown to be extremely powerful computational devices (Turing equivalent, universal computers).

2. Very simple ANNs can be set up to learn and generalize well – so they canperform difficult tasks without the need for enormous feats of programming.

3. Their massive parallelism can make them very efficient.

4. They are particularly fault tolerant – this is equivalent to the “[graceful degradation](https://en.wikipedia.org/wiki/Fault_tolerance)” found in biological brains.

5. They are very noise tolerant – so they can cope with situations where normal symbolic (rule-based) systems would have difficulty.

6.In principle, they can do anything a symbolic/logic system can do, and a lot more. Though, in practice, getting them to do it can be rather difficult... :P

##What are Artificial Neural Networks used for?

As with the field of AI in general, there are two basic goals for neural network research:

<span class="redWord">Brain modelling</span>: The _scientific_ goal of building models of how real brains work. This can potentially help us understand the nature of human intelligence, formulate better teaching strategies, or better remedial actions for brain damaged patients.

<span class="redWord">Artificial System Building</span>: The _engineering_ goal of building efficient systems forreal world applications. This may make machines more powerful, relieve humans of tedious tasks, and may even improve upon human performance.

These should not be thought of as competing goals. We often use exactly the same neural networks and techniques for both. Frequently progress is made when the two approaches are allowed to feed into each other. There are fundamental differences though, e.g. the need for biological plausibility in brain modelling, and the need for computational efficiency in artificial system building.

##Learning in Neural Networks

There are many different types of neural networks. Most operate by passing neural “activations” through a network of connected neurons.

One of the most useful and powerful features of neural networks is their ability to <span class="redWord">_learn_</span> and <span class="redWord">_generalize_</span> from a set of training data. They adapt the strengths/weights ofthe connections between neurons so that their final output activations are optimized.

There are three broad types of learning:

>1.Supervised Learning (i.e. learning with a teacher)
>2.Reinforcement learning (i.e. learning with limited feedback)
>3.Unsupervised learning (i.e. learning with no help)

##Artificial Neural Networks compared with Classical Symbolic AI

The distinctions can be categorized under three broad headings:

1. Level of Explanation

2. Processing Style

3. Representational Structure

These lead to a traditional set of dichotomies:

1. Sub-symbolic vs. Symbolic

2. Non-modular vs. Modular

3. Distributed representation vs. Localist representation

4. Bottom up vs. Top Down

5. Parallel processing vs. Sequential processing

In practice, however, the distinctions are becoming increasingly blurred

##Overview

1. Artificial Neural Networks are extremely powerful (Turing equivalent)computational systems consisting of many simple processing elements connected together to perform tasks analogously to biological brains.

2. They are massively parallel, which makes them efficient, robust, fault tolerant and noise tolerant.

3. They can learn from training data and generalize to new situations.

4. They are useful for brain modelling and real world applications involving pattern recognition, function approximation, prediction,...