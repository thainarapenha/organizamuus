import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ContainerForm, SelectionGrid, SelectionSection, Label, ButtonContainer, FormScroll } from "./CreateTaksPresenterScreen.styles";
import { HeaderComponent } from "@/components/Header/Header";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { taskOptions } from "@/data/tasks/taskOptions";
import { DateRangePicker } from "@/components/DateRangeDropdown/DateRangeDropdown";
import { RadioButton } from "@/components/RadioButton/RadioButton";
import { SelectionCard } from "@/components/SelectionCard/SelectionCard";

import { Ionicons } from "@expo/vector-icons";
import theme from "@/theme/lightTheme";
import { Button } from "@/components/Button/Button";
import { peopleOptions } from "@/data/mocks/peopleOptions";

export const CreateTaskPresenterScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [responsible, setResponsible] = useState("");

  const [period, setPeriod] = useState({
    startDate: "",
    endDate: "",
  });

  const [taskType, setTaskType] = useState<
    "single" | "weekly" | ""
  >("");

  return (
    <Container>
      <HeaderComponent
        onPress={() => navigation.goBack()}
        title="Criar tarefa"
      />

      <FormScroll showsVerticalScrollIndicator={false}>
        <ContainerForm>
          <Label>Selecione um cômodo</Label>

          <SelectionGrid>
            <SelectionCard
              label="Sala"
              icon={
                <Ionicons
                  name="tv-outline"
                  size={24}
                  color={
                    selectedRoom === "living_room"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                  }
                />
              }
              selected={selectedRoom === "living_room"}
              onPress={() => setSelectedRoom("living_room")}
            />

            <SelectionCard
              label="Cozinha"
              icon={
                <Ionicons
                  name="restaurant-outline"
                  size={24}
                  color={
                    selectedRoom === "kitchen"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                  }
                />
              }
              selected={selectedRoom === "kitchen"}
              onPress={() => setSelectedRoom("kitchen")}
            />

            <SelectionCard
              label="Quarto"
              icon={
                <Ionicons
                  name="bed-outline"
                  size={24}
                  color={
                    selectedRoom === "bedroom"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                  }
                />
              }
              selected={selectedRoom === "bedroom"}
              onPress={() => setSelectedRoom("bedroom")}
            />

            <SelectionCard
              label="Banheiro"
              icon={
                <Ionicons
                  name="water-outline"
                  size={24}
                  color={
                    selectedRoom === "bathroom"
                      ? theme.colors.primary_600
                      : theme.colors.gray_900
                  }
                />
              }
              selected={selectedRoom === "bathroom"}
              onPress={() => setSelectedRoom("bathroom")}
            />
          </SelectionGrid>

          <Dropdown
            label="Qual tarefa deve ser feita?"
            placeholder="Selecione"
            options={taskOptions}
            value={task}
            onChange={setTask}
          />

          <DateRangePicker
            label="Defina uma data"
            placeholder="Selecione um dia ou período"
            value={period}
            onChange={setPeriod}
          />

          <RadioButton
            title="Tarefa única"
            subtitle="A tarefa será realizada uma única vez."
            selected={taskType === "single"}
            disabled={!period.startDate || !period.endDate}
            onPress={() => setTaskType("single")}
          />

          <RadioButton
            title="Repetir semanalmente"
            subtitle="A tarefa será repetida semanalmente durante o período selecionado."
            selected={taskType === "weekly"}
            disabled={!period.startDate || !period.endDate}
            onPress={() => setTaskType("weekly")}
          />

          <Dropdown
            label="Quem fica responsável?"
            placeholder="Selecione o morador"
            options={peopleOptions}
            value={responsible}
            onChange={setResponsible}
          />
        </ContainerForm>
      </FormScroll>

      <ButtonContainer>
        <Button
          title="Cadastrar tarefa"
          variant="filled"
          onPress={() => {}}
        />
      </ButtonContainer>
    </Container>
  );
}