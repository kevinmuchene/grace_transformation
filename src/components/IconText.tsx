import { LucideIcon } from "lucide-react";

interface IconTextProps {
  icon: LucideIcon;
  children: React.ReactNode;
  color?: string;
}

const IconText: React.FC<IconTextProps> = ({
  icon: Icon,
  children,
  color = "text-blue-500",
}) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className={color} />
      <span>{children}</span>
    </div>
  );
};

export default IconText;
