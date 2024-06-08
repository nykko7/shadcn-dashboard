import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge capitalize variant="default">
        default
      </Badge>
      <Badge capitalize variant="destructive">
        destructive
      </Badge>
      <Badge capitalize variant="secondary">
        secondary
      </Badge>
      <Badge capitalize variant="outline">
        outline
      </Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
    </div>
  );
}
