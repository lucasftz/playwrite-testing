import { SyntheticEvent } from "react";

type FormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function formHandler<FormData extends Record<string, unknown>>(
  handleSubmit: (formData: FormData) => void
) {
  return (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData | {} = {};
    const formElements = e.currentTarget
      .elements as HTMLFormControlsCollection & Record<string, FormElements>;

    for (const formElement of formElements) {
      // @ts-ignore
      if (formElement.name) {
        // @ts-ignore
        formData[formElement.name] = formElement.value as unknown;
      }
    }

    handleSubmit(formData as FormData);
  };
}

export { formHandler };
