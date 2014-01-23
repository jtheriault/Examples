# jQuery TDD View Façade
This code example lived across several blog entries.

## 1. jQuery in TDD is Serious Business (Don't Mock It)
http://www.josephtheriault.com/2013/08/jquery-in-tdd-is-serious-business-dont.html

In this post, this example was a demonstration of
* the unreliability of mocking jQuery for the purposes of TDD
* using a façade abstract view interactions and separate them from jQuery

## 2. jQuery in TDD with a View Façade (and Introducing Oreo Testing)
http://www.josephtheriault.com/2013/08/jquery-in-tdd-with-view-adapters-and.html

This tested a view façade implemented with jQuery using black box testing

## 3. querySelector vs. jQuery: Proving Black-Box Testing in Practice
http://www.josephtheriault.com/2013/09/queryselector-vs-jquery-proving-black.html

This demonstrated the robustness of this kind of black box testing by partly moving the implementation away from jQuery.

## 4. jquery-rescope: DOM Mocking Made Easy
http://www.josephtheriault.com/2013/10/jquery-rescope-dom-mocking-made-easy.html

This incorporated a new jQuery plugin, jquery-rescope, as a convenience utility for writing DOM-centric black box tests.