import type { PropsWithChildren } from "react";

import { register } from "@ebay/nice-modal-react";

import AuthDialog from "../components/elements/dialog/auth";
import ReportDialog from "../components/elements/dialog/report";
import SettingsDialog from "../components/elements/dialog/settings";

register("auth-dialog", AuthDialog);
register("report-dialog", ReportDialog);
register("settings-dialog", SettingsDialog);

const ModalsProvider = ({ children }: PropsWithChildren) => <>{children}</>;

export default ModalsProvider;
