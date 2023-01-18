import { useEffect, useState } from "react";

import { getProviders } from "next-auth/react";
import type { ClientSafeProvider } from "next-auth/react";

export const useProviders = () => {
  const [providers, setProviders] = useState<ClientSafeProvider[]>([]);
  useEffect(() => {
    getProviders().then((res) => res && setProviders(Object.values(res)));
  }, []);
  return providers;
};
