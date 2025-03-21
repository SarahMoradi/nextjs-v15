import BaseIcon from "../base-icon";
import { SvgIcon as SvgIconProp } from "../icon.types";

export default function SvgIcon(props: SvgIconProp) {
  return (
    <BaseIcon {...props}>
      <path d="M7.505 3L16.5 12.027L7.5 21"/>
    </BaseIcon>
  );
}