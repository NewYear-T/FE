import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface Props {
  title: string;
  list: string[];
}

const DropDown = ({ title, list }: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{title}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {list.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
