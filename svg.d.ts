interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const content: string;
  const ReactComponent: SvgrComponent;
  export { ReactComponent };
  export default content;
}
