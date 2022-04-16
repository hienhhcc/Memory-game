import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import * as yup from 'yup';

interface Props<T> {
  children: React.ReactElement[];
  onSubmit: SubmitHandler<T>;
  schema?: yup.AnyObjectSchema;
  options?: UseFormProps | any;
}

const DEFAULT_OPTIONS = {
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: 'firstError',
  shouldFocusError: true,
  shouldUnregister: false,
  shouldUseNativeValidation: false,
  delayError: undefined,
};

const Form = <T,>({
  children,
  onSubmit,
  options = DEFAULT_OPTIONS,
}: Props<T>) => {
  const methods = useForm<T>(options);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;

// {children.map((child: any) => {
//   if (child.name) {
//     return createElement(child.type, {
//       key: child.name,
//       ...child.props,
//     });
//   } else {
//     return child;
//   }
// })}
