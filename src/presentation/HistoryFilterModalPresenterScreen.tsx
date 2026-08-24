import { Modal, Pressable } from "react-native";

import { DateRangePicker } from "@/components/DateRangeDropdown/DateRangeDropdown";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Button } from "@/components/Button/Button";
import { peopleOptions } from "@/data/mocks/peopleOptions";

import {
  ModalOverlay,
  ModalContainer,
  Header,
  Title,
  Form,
  ButtonsContainer,
  StatusRow,
} from "./HistoryFilterModalPresenterScreen.styles";
import { useState } from "react";
import { StatusCard } from "@/components/StatusCard/StatusCard";
import { Ionicons } from "@expo/vector-icons";
import theme from "@/theme/lightTheme";

interface HistoryFilterModalProps {
  visible: boolean;
  period: {
    startDate: string;
    endDate: string;
  };
  responsible: string;
  onPeriodChange: (period: {
    startDate: string;
    endDate: string;
  }) => void;
  onResponsibleChange: (value: string) => void;
  onApply: () => void;
  onClear: () => void;
  onClose: () => void;
}

export const HistoryFilterModalPresenterScreen = ({
  visible,
  period,
  responsible,
  onPeriodChange,
  onResponsibleChange,
  onApply,
  onClear,
  onClose,
}: HistoryFilterModalProps) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <ModalOverlay>
        <Pressable
          style={{ flex: 1 }}
          onPress={onClose}
        />
        
        <ModalContainer>
          <Header>
            <Title>Filtrar tarefas</Title>
          </Header>

          <Form>
            <StatusRow>
              <StatusCard
                label="Atrasada"
                selected={selectedStatus === "atrasado"}
                onPress={() => setSelectedStatus("atrasado")}
                icon={
                  <Ionicons
                    name="alert-circle-outline"
                    size={22}
                    color={
                      selectedStatus === "atrasado"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                    }
                  />
                }
              />

              <StatusCard
                label="Pendente"
                selected={selectedStatus === "pendente"}
                onPress={() => setSelectedStatus("pendente")}
                icon={
                  <Ionicons
                    name="time-outline"
                    size={22}
                    color={
                      selectedStatus === "pendente"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                    }
                  />
                }
              />

              <StatusCard
                label="Concluída"
                selected={selectedStatus === "concluido"}
                onPress={() => setSelectedStatus("concluido")}
                icon={
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={22}
                    color={
                      selectedStatus === "concluido"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                    }
                  />
                }
              />
            </StatusRow>

            <DateRangePicker
              label="Data"
              placeholder="Selecione um dia ou período"
              value={period}
              onChange={onPeriodChange}
            />

            <Dropdown
              label="Responsável"
              placeholder="Escolha um membro do apê"
              options={peopleOptions}
              value={responsible}
              onChange={onResponsibleChange}
            />
          </Form>

          <ButtonsContainer>
            <Button
              title="Aplicar filtro"
              variant="filled"
              onPress={onApply}
            />

            <Button
              title="Limpar"
              variant="outline"
              onPress={onClear}
            />
          </ButtonsContainer>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
}