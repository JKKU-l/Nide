/// <reference types="react" />
/// <reference types="react-dom" />

// Ensure React JSX runtime is properly typed
declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
  export const Fragment: React.FragmentType;
  export const jsx: (type: any, props: any, key: any) => any;
  export const jsxs: (type: any, props: any, key: any) => any;
}
