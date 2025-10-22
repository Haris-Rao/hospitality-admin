import { Button } from "@/components/Core/Button";
import { DropDown } from "@/components/Core/DropDown";
import { Input } from "@/components/Core/Input";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [button, setButton] = useState("");

  return (
    <SideBarSkeleton>
      <Input
        placeholder="Search"
        label="Search"
        value={search}
        setter={setSearch}
      />
      <DropDown
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ]}
        label="Select"
        placeholder="Select"
        value={select}
        setter={setSelect}
      />
      <Button label="Search" value={button} setter={setButton} variant="dark" />
    </SideBarSkeleton>
  );
}
