/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckInVibeOverridesProps = {
    CheckInVibe?: PrimitiveOverrideProps<FlexProps>;
    Contents?: PrimitiveOverrideProps<FlexProps>;
    Emote?: PrimitiveOverrideProps<ImageProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckInVibeProps = React.PropsWithChildren<Partial<FlexProps> & {
    src?: String;
    label?: String;
    default?: String;
} & {
    isSelected?: "False" | "True";
} & {
    overrides?: CheckInVibeOverridesProps | undefined | null;
}>;
export default function CheckInVibe(props: CheckInVibeProps): React.ReactElement;
