/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type YouthCreateFormInputValues = {
    fullName?: string;
    dateOfBirth?: string;
    guardianFullName?: string;
    guardianPhoneNumber?: string;
    grade?: string;
    gender?: string;
};
export declare type YouthCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    guardianFullName?: ValidationFunction<string>;
    guardianPhoneNumber?: ValidationFunction<string>;
    grade?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YouthCreateFormOverridesProps = {
    YouthCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    guardianFullName?: PrimitiveOverrideProps<TextFieldProps>;
    guardianPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<SelectFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type YouthCreateFormProps = React.PropsWithChildren<{
    overrides?: YouthCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: YouthCreateFormInputValues) => YouthCreateFormInputValues;
    onSuccess?: (fields: YouthCreateFormInputValues) => void;
    onError?: (fields: YouthCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: YouthCreateFormInputValues) => YouthCreateFormInputValues;
    onValidate?: YouthCreateFormValidationValues;
} & React.CSSProperties>;
export default function YouthCreateForm(props: YouthCreateFormProps): React.ReactElement;
