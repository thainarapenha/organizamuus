import { useState } from "react";

import {
  Container,
  Label,
  DropdownButton,
  DropdownText,
  OptionsContainer,
  Option,
  OptionText,
} from "./Dropdown.styles";

export type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
};

export function Dropdown({
  label,
  placeholder = "Selecione",
  options,
  value,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  function handleSelect(option: DropdownOption) {
    onChange?.(option.value);
    setIsOpen(false);
  }

  return (
    <Container>
      <Label>{label}</Label>

      <DropdownButton onPress={() => setIsOpen((previous) => !previous)}>
        <DropdownText>
          {selectedOption?.label ?? placeholder}
        </DropdownText>

        <DropdownText>
          {isOpen ? "▲" : "▼"}
        </DropdownText>
      </DropdownButton>

      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option
              key={option.value}
              onPress={() => handleSelect(option)}
            >
              <OptionText>{option.label}</OptionText>
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
}