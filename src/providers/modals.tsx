import { register } from "@ebay/nice-modal-react";

import AuthDialog from "../components/elements/dialog/auth";
import ReportDialog from "../components/elements/dialog/report";

register("auth-dialog", AuthDialog);
register("report-dialog", ReportDialog);

interface ModalsProviderProps {
  children: React.ReactNode;
}
const ModalsProvider = ({ children }: ModalsProviderProps) => <>{children}</>;

export default ModalsProvider;
