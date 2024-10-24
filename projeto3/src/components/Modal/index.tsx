import { useContext, useEffect, useState } from "react";
import {
  AbilityContainer,
  Abilitys,
  EyeStyled,
  Images,
  InfoContainer,
  Infos,
  ModalContainer,
  ModalContent,
  Title,
  XStyled,
} from "./styles";
import { BadgeType } from "../../enum/badgeEnum";
import { GraphicChart } from "../GraphicChart/index";
import { PokedexContex } from "../../context/PokedexContext";
import { PokedexApi, PokemonInterface } from "../../api/routes/PokedexApi";

interface ModalProps {
  color: BadgeType;
}

export function Modal({ color }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState<number[]>([]);
  const [data, setData] = useState<PokemonInterface>();

  const id: number = useContext(PokedexContex);

  useEffect(() => {
    getPokemonStats();
  }, []);

  const getPokemonStats = async () => {
    try {
      const result = await PokedexApi.getOnePokemon(id);
      const resultData = result.data;

      setData(resultData);

      const stats = [
        resultData.hp,
        resultData.atk,
        resultData.spatk,
        resultData.def,
        resultData.spdef,
        resultData.speed,
      ];

      setStats(stats);
    } catch (error) {
      console.error("Error fetching Pokémon stats:", error);
    }
  };

  return (
    <>
      <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ModalContainer>
          <ModalContent color={color}>
            <Title>{data?.name}</Title>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            <InfoContainer>
              <Infos>
                <Images src={data?.sprite} />
                <Images src={data?.spriteShiny} />
              </Infos>
              <Infos>
                <GraphicChart stats={stats} />
                <AbilityContainer>
                  <Abilitys>Habilidades</Abilitys>
                  <Abilitys>normal: {data?.abilityNormal}</Abilitys>
                  <Abilitys>escondida: {data?.abilityHidden}</Abilitys>
                </AbilityContainer>
              </Infos>
            </InfoContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
