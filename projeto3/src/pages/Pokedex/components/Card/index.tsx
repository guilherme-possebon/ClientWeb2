import { useState } from "react";
import {
  CardAction,
  CardBody,
  CardContainer,
  CardImage,
  CardInfo,
  CardTypes,
  SparkleStyled,
} from "./styles";
import { BadgeType, getBadgeUrl } from "../../../../enum/badgeEnum";
import { Modal } from "../../../../components/Modal";
import { PokedexContex } from "../../../../context/PokedexContext";

interface CardProps {
  id: number;
  sprite: string;
  name: string;
  type1: BadgeType;
  type2: BadgeType;
  spriteShiny: string;
}

export function Card({
  sprite,
  name,
  type1,
  type2,
  spriteShiny,
  id,
}: CardProps) {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <PokedexContex.Provider value={id}>
      <CardContainer color={type1} $isShiny={isShiny}>
        <CardAction>
          <Modal color={type1} />
          <SparkleStyled size={24} onClick={() => setIsShiny(!isShiny)} />
        </CardAction>
        <CardBody>
          <CardImage src={isShiny ? spriteShiny : sprite} />
          <CardInfo>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            <CardTypes>
              <CardImage src={getBadgeUrl(type1)} />
              {type2 && <CardImage src={getBadgeUrl(type2)} />}
            </CardTypes>
          </CardInfo>
        </CardBody>
      </CardContainer>
    </PokedexContex.Provider>
  );
}
