import { register } from "@ebay/nice-modal-react";

import AuthDialog from "../components/elements/dialog/auth";

register("auth-dialog", AuthDialog);

interface ModalsProviderProps {
  children: React.ReactNode;
}
const ModalsProvider = ({ children }: ModalsProviderProps) => <>{children}</>;

export default ModalsProvider;
