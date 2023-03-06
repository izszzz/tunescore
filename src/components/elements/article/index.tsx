import { useToggle } from "react-use";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";

import ExpandToggleButton from "../button/toggle/read";

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
      <ExpandToggleButton value={on} onClick={toggle} />
    </Box>
  );
};
export default Article;
