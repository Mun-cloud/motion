"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

const Toolbar = ({ initialData, preview }: ToolbarProps) => {
  return <div className="pl-[54px] group relative">toolbar</div>;
};

export default Toolbar;
