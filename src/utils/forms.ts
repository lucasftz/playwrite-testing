import { SyntheticEvent } from "react";

function formHandler<FormData extends Record<string, unknown>>(
  handleSubmit: (formData: FormData) => void
) {
  return (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = <FormData>{};
    const formElements = Array.from(e.currentTarget.elements);

    for (const formElement of formElements) {
      // @ts-ignore
      if (formElement.name) {
        // @ts-ignore
        formData[formElement.name] = formElement.value as unknown;
      }
    }

    handleSubmit(formData);
  };
}

export { formHandler };
