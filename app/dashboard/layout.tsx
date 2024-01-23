import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  const memberships =
    await clerkClient.organizations.getOrganizationMembershipList({
      organizationId: process.env.ORG_ID!,
    });

  if (
    !memberships.find(
      (membership) => membership.publicUserData?.userId === userId
    )
  ) {
    redirect("/?error=access-denied");
  }

  return <>{children}</>;
}

export default DashboardLayout;
