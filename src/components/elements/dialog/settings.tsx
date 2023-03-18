import React from "react";

import { create, useModal } from "@ebay/nice-modal-react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";

import { ambientState } from "../../../atoms/ambient";
import LocaleAutocomplete from "../autocomplete/locale";
import ThemeToggleButton from "../button/icon/toggle/theme";

const SettingsDialog = create(() => {
  const { visible, hide } = useModal(),
    [ambient, setAmbient] = useRecoilState(ambientState);
  return (
    <Dialog onClose={hide} open={visible}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <DialogActions>
          <Stack spacing={2}>
            <Stack direction="row" spacing={5}>
              <Typography>Locale: </Typography>
              <LocaleAutocomplete />
            </Stack>
            <Stack direction="row" spacing={5}>
              <Typography>Theme: </Typography>
              <ThemeToggleButton />
            </Stack>
            <Stack direction="row" spacing={5}>
              <Typography>Ambient: </Typography>
              <Switch
                defaultChecked={ambient}
                onChange={(_e, c) => setAmbient(c)}
              />
            </Stack>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
});

export default SettingsDialog;
