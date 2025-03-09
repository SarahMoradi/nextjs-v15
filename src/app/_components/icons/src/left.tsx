import BaseIcon from "../base-icon";
import { SvgIcon as SvgIconProp } from "../icon.types";

export default function SvgIcon(props: SvgIconProp) {
  return (
    <BaseIcon {...props}>
      <path d="M16.5 3L7.5 12.002L16.495 21"/>
    </BaseIcon>
  );
}