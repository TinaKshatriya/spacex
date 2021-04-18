// Creational design patterns:
// Provide a mechanism to create an object and without revealing the creation method.

// - Factory
// Provides a template to create an object. Can be used when the type of object to create can be
// different and needs to be specified in every instatiation. Does not require the keyword 'new' to instatiate.
class Chocolate {

}
class iceCreamFactory {
  constructor() {
    this.iceCreamFactory = function (flavour) {
      let iceCream;
      let flavor;

      if (flavor === "chocolate") {
        iceCream = new Chocolate();
      }
    };
  }
}

// - Constructor
// - Builder
// - Abstract
// - Prototype
// - Singleton

// Structural design patterns:

// Patterns that concern the class/object composition. They let you add new functionalities to object so in case the
// system changes it might be easy to add things to the core without affecting the rest

// - Facade
// - Decorator
// - Proxy
// - Flyweight
// - Bridge
// - Composite
// - Adapter

// Behavioral design patterns

// They are used when we need dissimilar objects to communicate. They streamline the communication between objects
// so they are always in sync.

// - Revealing module
// - Chain of responsabilty
// - Strategy
// - Interpreter
// - Command
// - Observer
// - Iterator
// - Mediator
// - Visitor
// - State
// - Memento

// Architectural design patterns

// - MVC
// - MVP
// - MVVC
