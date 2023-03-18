import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { useToggle } from "usehooks-ts";

import ExpandToggleButton from "../button/icon/toggle/read";

interface Article {
  text: string;
}
const Article = ({ text }: Article) => {
  const [on, toggle] = useToggle(false);
  return (
    <Box style={{ userSelect: navigator.language === "ja" ? "none" : "auto" }}>
      <Collapse collapsedSize={200} in={on}>
        <Typography component="pre">{text}</Typography>
      </Collapse>
      <ExpandToggleButton onClick={toggle} value={on} />
    </Box>
  );
};
export default Article;
