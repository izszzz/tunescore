import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import router from "next/router";

const PlusMenuManager = () => (
  <IconButton onClick={() => router.push("/new")}>
    <Add />
  </IconButton>
);
export default PlusMenuManager;
