import { useState } from "react";
import {
  CardAction,
  CardBody,
  CardContainer,
  CardInfo,
  CardTypes,
  SparkleStyled,
} from "./styles";
import { BadgeType, getBadgeUrl } from "../../../../enum/badgeEnum";
import { Modal } from "../../../../components/Modal";

interface CardProps {
  sprite: string;
  name: string;
  type1: BadgeType;
  type2: BadgeType;
  spriteShiny: string;
}

export function Card({ sprite, name, type1, type2, spriteShiny }: CardProps) {
  const [isShiny, setIsShiny] = useState(false);
  console.log(isShiny);

  return (
    <div>
      <CardContainer color={type1} $isShiny={isShiny}>
        <CardAction>
          <Modal color={type1} />
          <SparkleStyled size={24} onClick={() => setIsShiny(!isShiny)} />
        </CardAction>
        <CardBody>
          <img src={isShiny ? spriteShiny : sprite} />
          <CardInfo>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            <CardTypes>
              <img src={getBadgeUrl(type1)} />
              {type2 && <img src={getBadgeUrl(type2)} />}
            </CardTypes>
          </CardInfo>
        </CardBody>
      </CardContainer>
    </div>
  );
}
