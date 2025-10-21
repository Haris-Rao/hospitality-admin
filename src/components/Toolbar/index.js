import { cn } from "@/helper/HelperFunction";
import classes from "./Toolbar.module.css";

export default function Toolbar({ tools, activeTool, selectedElement }) {
  console.log(activeTool);
  return (
    <div className={classes.toolbar}>
      {tools.map((tool) => (
        <div
          className={cn(
            classes.tool,
            activeTool === tool.value && classes.active,
            !selectedElement && classes.disabled,
          )}
          key={tool.label}
          onClick={() => selectedElement && tool.onClick(tool.value)}
        >
          {tool.label}
        </div>
      ))}
    </div>
  );
}
