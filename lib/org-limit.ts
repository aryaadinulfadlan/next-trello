import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { MAX_FREE_BOARDS } from "@/constants/boards";

export const incrementAvailableCount = async () => {
  try {
    const { orgId } = auth();
    if (!orgId) throw new Error("Unauthorized");
    const orgLimit = await db.orgLimit.findUnique({
      where: { orgId },
    });
    if (orgLimit) {
      await db.orgLimit.update({
        where: { orgId },
        data: { count: orgLimit.count + 1 },
      });
    } else {
      await db.orgLimit.create({
        data: { orgId, count: 1 },
      });
    }
  } catch (error) {
    console.log("[ORGANIZATION_LIMIT_INCREMENT]", error);
  }
};

export const decrementAvailableCount = async () => {
  try {
    const { orgId } = auth();
    if (!orgId) throw new Error("Unauthorized");
    const orgLimit = await db.orgLimit.findUnique({
      where: { orgId },
    });
    if (orgLimit) {
      await db.orgLimit.update({
        where: { orgId },
        data: { count: orgLimit.count > 0 ? orgLimit.count - 1 : 0 },
      });
    } else {
      await db.orgLimit.create({
        data: { orgId, count: 1 },
      });
    }
  } catch (error) {
    console.log("[ORGANIZATION_LIMIT_DECREMENT]", error);
  }
};

export const hasAvailableCount = async () => {
  try {
    const { orgId } = auth();
    if (!orgId) throw new Error("Unauthorized");
    const orgLimit = await db.orgLimit.findUnique({
      where: { orgId },
    });
    if (!orgLimit || orgLimit.count < MAX_FREE_BOARDS) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("[ORGANIZATION_LIMIT_HAS]", error);
  }
};

export const getAvailableCount = async () => {
  //   try {
  const { orgId } = auth();
  if (!orgId) {
    return 0;
  }
  const orgLimit = await db.orgLimit.findUnique({
    where: { orgId },
  });
  if (!orgLimit) {
    return 0;
  }
  return orgLimit.count;
  //   } catch (error) {
  //     console.log("[ORGANIZATION_LIMIT_GET]", error);
  //   }
};
