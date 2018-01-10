export default class Greeter {
  private readonly greeting: string;

  constructor(person: string) {
    this.greeting = "Hello, " + person;
  }

  hello() {
    return this.greeting;
  }

  method1() {
    return this.greeting;
  }
}
