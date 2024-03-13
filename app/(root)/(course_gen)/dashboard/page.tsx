import Generate from "@/components/Generate";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {

  const { userId } = auth();
  if (!userId) {
    redirect("/")
  }
  const mongoUser = await getUserById({ userId });
  return (
    <>
      <Generate mongoUserId={JSON.stringify(mongoUser._id)} />
    </>
  );
}

export default Page;