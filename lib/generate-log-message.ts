import { ACTION } from "@/types/root";
import { AuditLog } from "@prisma/client";

export default function generateLogMessage({
  action,
  entityTitle,
  entityType,
}: AuditLog) {
  switch (action) {
    case ACTION.CREATE:
      return ` Created ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return ` Updated ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return ` Deleted ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `Unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
  }
}
