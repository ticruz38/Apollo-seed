declare module '*.gql' {
    import {DocumentNode} from 'graphql';

    const value: DocumentNode;
    export default value;
}

interface NodeRequire {
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
