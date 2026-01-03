declare const __brand: unique symbol;

export type Branded<TPrimitive extends string | number | boolean, TBrand> = TPrimitive & {
  [__brand]: TBrand;
};
