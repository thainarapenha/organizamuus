import { useState } from "react";
import { Modal } from "react-native";
import { Calendar } from "react-native-calendars";

import {
  Container,
  Label,
  DropdownButton,
  DropdownText,
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  CloseText,
  ConfirmButton,
  ConfirmText,
} from "./DateRangeDropdown.styles";

type DateRangePickerProps = {
  label: string;
  placeholder?: string;
  value?: {
    startDate: string;
    endDate: string;
  };
  onChange?: (range: {
    startDate: string;
    endDate: string;
  }) => void;
};

export function DateRangePicker({
  label,
  placeholder = "Selecione o período",
  value,
  onChange,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [startDate, setStartDate] = useState(
    value?.startDate ?? ""
  );

  const [endDate, setEndDate] = useState(
    value?.endDate ?? ""
  );

  function handleDayPress(day: { dateString: string }) {
    const selectedDate = day.dateString;

    if (!startDate || endDate) {
      setStartDate(selectedDate);
      setEndDate("");
      return;
    }

    if (selectedDate < startDate) {
      setStartDate(selectedDate);
      return;
    }

    setEndDate(selectedDate);
  }

  function handleConfirm() {
    if (!startDate || !endDate) {
      return;
    }

    onChange?.({
      startDate,
      endDate,
    });

    setIsOpen(false);
  }

  const markedDates: Record<string, object> = {};

  if (startDate) {
    markedDates[startDate] = {
      startingDay: true,
      color: "#000",
      textColor: "#fff",
    };
  }

  if (endDate) {
    markedDates[endDate] = {
      endingDay: true,
      color: "#000",
      textColor: "#fff",
    };
  }

  return (
    <Container>
      <Label>{label}</Label>

      <DropdownButton onPress={() => setIsOpen(true)}>
        <DropdownText>
          {startDate && endDate
            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
            : placeholder}
        </DropdownText>

        <DropdownText>▼</DropdownText>
      </DropdownButton>

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Selecionar período</ModalTitle>

              <CloseButton onPress={() => setIsOpen(false)}>
                <CloseText>×</CloseText>
              </CloseButton>
            </ModalHeader>

            <Calendar
              markingType="period"
              markedDates={markedDates}
              onDayPress={handleDayPress}
            />

            <ConfirmButton
              onPress={handleConfirm}
              disabled={!startDate || !endDate}
            >
              <ConfirmText>Confirmar</ConfirmText>
            </ConfirmButton>
          </ModalContainer>
        </ModalOverlay>
      </Modal>
    </Container>
  );
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}