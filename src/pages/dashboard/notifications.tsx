import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import NotificationMenuList from "../../components/elements/menu/list/notification";
import DashboardLayout from "../../components/layouts/dashboard";
import IndexLayout from "../../components/layouts/index";
import { notificationPaginationQuery } from "../../paths/dashboard/notifications";
import { trpc } from "../../utils/trpc";

const Notification: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.notification.useQuery(
      notificationPaginationQuery({ router, session })
    );
  if (!data) return <></>;
  return (
    <DashboardLayout active="notifications">
      <IndexLayout meta={data.meta}>
        <NotificationMenuList data={data.data} />
      </IndexLayout>
    </DashboardLayout>
  );
};

export default Notification;
