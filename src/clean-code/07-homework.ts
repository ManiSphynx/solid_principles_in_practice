(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputElementProps {
    value: string;
    placeholder: string;
    id: string;
    type: HtmlType;
  }

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public InputEvents: InputEvents;

    constructor({ value, placeholder, id, type }: InputElementProps) {
      this.htmlElement = new HtmlElement(id, type);
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.InputEvents = new InputEvents();
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({
    value: "Emanuel",
    placeholder: "name",
    id: "01",
    type: "input",
  });

  console.log({ nameField });

  nameField.InputEvents.setFocus();
})();
