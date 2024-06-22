import { Button, ButtonProps } from "@/components/ui/button";
import { SidebarMenuItemProps } from "@/constants/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SidebarMenuItem = ({
  Icon,
  label,
  route,
  isActive,
  className,
  ...props
}: SidebarMenuItemProps & { isActive: boolean } & ButtonProps) => {
  return (
    <Button
      asChild
      className={cn(
        "gap-2 w-full justify-start capitalize",
        isActive && "pointer-events-none",
        className
      )}
      variant={isActive ? "default" : "ghost"}
      {...props}
    >
      <Link href={route}>
        <Icon size={20} />
        {label}
      </Link>
    </Button>
  );
};
