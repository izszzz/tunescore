import { useRef } from "react";

import type { TypographyProps } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const EllipsisTypography = ({
  children,
  ...props
}: Omit<TypographyProps, "noWrap" | "component">) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Tooltip
      disableHoverListener={
        ref.current ? !isEllipsisActive(ref.current) : false
      }
      title={children}
    >
      <Typography {...props} component="div" noWrap ref={ref}>
        {children}
      </Typography>
    </Tooltip>
  );
};

export default EllipsisTypography;

const isEllipsisActive = (e: HTMLDivElement) => e.offsetWidth < e.scrollWidth;
