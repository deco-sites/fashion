import supportedTransforms from "../constants/supportedTransforms.d.ts";
export declare type TransformationPosition = "path" | "query";
export declare type Transformation = Partial<typeof supportedTransforms>;
