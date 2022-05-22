(() => {
  // Sin aplicar principio de responsabilidad unica
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public ender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSetting = new UserSettings(
    "/user/home",
    "/home",
    "emanuel.romero@test.com",
    "admin",
    "Emanuel",
    "M",
    new Date("2002-01-15")
  );

  console.log({
    userSetting,
  });
})();
