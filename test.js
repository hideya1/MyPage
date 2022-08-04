class User {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }
}

let user = new User("aaaa");
user.say();
