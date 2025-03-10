import BaseIcon from "../base-icon";
import { SvgIcon as SvgIconProp } from "../icon.types";

export default function SvgIcon(props: SvgIconProp) {
  return (
    <BaseIcon {...props}>
      <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </BaseIcon>
  );
}