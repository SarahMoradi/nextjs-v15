import BaseIcon from "../base-icon";
import { SvgIcon as SvgIconProp } from "../icon.types";

export default function SvgIcon(props: SvgIconProp) {
  return (
    <BaseIcon {...props}>
      <circle cx="3.5779" cy="3.2879" r="2.7487"/>
    </BaseIcon>
  );
}