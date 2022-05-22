(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    return ["manzana", "cereza", "ciruela"].includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    const fruistByColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruistByColor).includes(color))
      throw new Error("Color no válido");

    return fruistByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true,
    isSecondStepWorking = true,
    isThirdStepWorking = true,
    isFourthStepWorking = true;

  function workingSteps() {
    return !isFirstStepWorking
      ? "First step broken."
      : !isSecondStepWorking
      ? "Second step broken."
      : !isThirdStepWorking
      ? "Third step broken."
      : !isFourthStepWorking
      ? "Fourth step broken."
      : "All steps working.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
