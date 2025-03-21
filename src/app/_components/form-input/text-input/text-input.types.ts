import { DeepMap, FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { TextboxProps } from "../../textbox/textbox.types";

export type TextInputProps<TFormValues extends FieldValues> = Omit<TextboxProps, 'name'> & {
    register: UseFormRegister<TFormValues>,
    name: Path<TFormValues>,
    // rules?: RegisterOptions<TFormValues>;
    errors: Partial<DeepMap<TFormValues, FieldError>>
}